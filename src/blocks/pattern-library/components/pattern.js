import { Spinner } from '@wordpress/components';
import { useEffect, useRef, useState, useLayoutEffect } from '@wordpress/element';
import imagesLoaded from 'imagesloaded';
import { useLibrary } from './library-provider';

export default function Pattern( props ) {
	const {
		id,
		preview,
		isLoading,
		activePatternId,
		label,
	} = props;
	const iframeRef = useRef();
	const elementRef = useRef();
	const [ height, setHeight ] = useState( 0 );
	const [ injectContent, setInjectContent ] = useState( false );
	const [ editorColors, setEditorColors ] = useState( {} );
	const [ isVisible, setIsVisible ] = useState( !! activePatternId );
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ patternWidth, setPatternWidth ] = useState( 0 );
	const [ isResizing, setIsResizing ] = useState( false );
	const { previewIframeWidth } = useLibrary();
	const patternHeight = 350;
	const viewport = patternWidth;
	const iframe = 1280;
	const editorStylesWrapper = document?.querySelector( '.editor-styles-wrapper' );

	/**
	 * Debounce our resizing event.
	 * This is used to re-calculate the pattern width.
	 */
	useEffect( () => {
		let resizeTimer;

		const handleResize = () => {
			setIsResizing( true );
			clearTimeout( resizeTimer );

			resizeTimer = setTimeout( () => {
				setIsResizing( false );
			}, 500 );
		};

		window.addEventListener( 'resize', handleResize );

		return () => {
			window.removeEventListener( 'resize', handleResize );
		};
	}, [] );

	/**
	 * Set the width of our patterns.
	 */
	useEffect( () => {
		if ( elementRef.current?.clientWidth && ! isResizing ) {
			setPatternWidth( elementRef.current?.clientWidth );
		}
	}, [ elementRef.current?.clientWidth, isResizing ] );

	/**
	 * Set up lazy loading on the iframes.
	 */
	useEffect( () => {
		const intersectionObserver = new IntersectionObserver(
			( entries ) => {
				entries.forEach( ( entry ) => {
					if ( entry.isIntersecting ) {
						setIsVisible( true );
						intersectionObserver.disconnect();
					}
				} );
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.01,
			}
		);

		if ( elementRef.current ) {
			intersectionObserver.observe( elementRef.current );
		}

		return () => {
			if ( intersectionObserver ) {
				intersectionObserver.disconnect();
			}
		};
	}, [] );

	/**
	 * Insert our pattern preview into the empty iframe.
	 */
	useEffect( () => {
		if ( ! isVisible || ! injectContent ) {
			return;
		}

		const document = iframeRef.current.contentWindow.document;
		const scripts = props?.scripts ?? [];

		scripts.forEach( ( script ) => {
			const scriptElement = document.createElement( 'script' );
			scriptElement.defer = true;
			scriptElement.src = script;
			document.head.appendChild( scriptElement );
		} );

		document.body.innerHTML = preview;
		document.head.innerHTML += '<style id="block-active"></style>';
		document.head.innerHTML += '<style id="pattern-styles"></style>';

		imagesLoaded( document.body, () => {
			setHeight( document.body.scrollHeight );
			setIsLoaded( true );
		} );
	}, [ injectContent, isVisible ] );

	/**
	 * Store our editor background and text color.
	 */
	useEffect( () => {
		if ( ! editorStylesWrapper ) {
			return;
		}

		const styles = getComputedStyle( editorStylesWrapper );

		if ( styles ) {
			setEditorColors( { background: styles.backgroundColor, text: styles.color } );
		}
	}, [ editorStylesWrapper?.style ] );

	/**
	 * Mimic our editor styles in the pattern preview.
	 * This allows our patterns to have the same background/text colors as the editor.
	 */
	useLayoutEffect( () => {
		const document = iframeRef.current?.contentWindow?.document;

		if ( document && document.querySelector && document.querySelector( '#pattern-styles' ) ) {
			document.querySelector( '#pattern-styles' ).innerHTML = `body{background-color:${ editorColors?.background };color:${ editorColors?.text };}`;
		}
	}, [ editorColors, height ] );

	/**
	 * Set the height of the preview iframe.
	 */
	useEffect( () => {
		if ( ! activePatternId ) {
			return;
		}

		const document = iframeRef?.current?.contentWindow?.document;

		imagesLoaded( document?.body, () => {
			setHeight( document?.body?.scrollHeight );
		} );
	}, [ previewIframeWidth ] );

	/**
	 * Add padding and center the pattern if it's not full width.
	 */
	useEffect( () => {
		const iframeDocument = iframeRef.current.contentWindow.document;
		const iframeBody = iframeDocument.body;
		const elements = Array.from( iframeBody.querySelectorAll( '*' ) );

		const firstVisibleElement = elements?.find( ( element ) => {
			const { display } = getComputedStyle( element );
			return display !== 'none';
		} );

		if ( firstVisibleElement ) {
			const parentWidth = firstVisibleElement.parentElement.clientWidth;
			const isFullWidth = firstVisibleElement.offsetWidth === parentWidth;

			if ( ! isFullWidth ) {
				iframeBody.style.padding = '100px';
				firstVisibleElement.style.marginLeft = 'auto';
				firstVisibleElement.style.marginRight = 'auto';
			}
		}
	}, [ patternWidth, injectContent, isVisible ] );

	const viewportHeight = Math.round( height * ( viewport / iframe ) );

	const wrapperStyle = {
		opacity: isLoading ? 0 : 1,
		height: patternHeight + 'px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: ( viewportHeight + 40 ) < patternHeight ? 'center' : '',
	};

	return (
		<div
			className="gb-pattern-frame"
			style={ activePatternId ? {
				backgroundColor: 'none',
				padding: 0,
			} : {} }
		>
			<div
				ref={ elementRef }
				className="gb-pattern"
				style={ ! activePatternId ? wrapperStyle : { minHeight: '200px' } }
			>
				{ !! isVisible && ! isLoaded && <Spinner /> }
				<div
					style={ ! activePatternId ? {
						width: `${ viewport }px`,
						height: `${ viewportHeight }px`,
					} : {} }
				>
					<div
						style={ ! activePatternId ? {
							height: height + 'px',
							width: `${ ( ( iframe / viewport ) * 100 ) }%`,
							transformOrigin: '0 0',
							transform: `scale( ${ viewport / iframe } )`,
						} : {} }
					>
						<iframe
							id={ id }
							onLoad={ () => {
								if ( isVisible ) {
									setInjectContent( true );
								}

								const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

								iframeDoc.addEventListener( 'click', ( event ) => {
									const clickedElement = event.target;

									if ( 'A' === clickedElement.tagName ) {
										const href = clickedElement.getAttribute( 'href' );

										if ( href && ! href.startsWith( '#' ) ) {
											event.preventDefault();
											event.stopPropagation();
										}
									}

									// Reset our height when we click anything in our preview.
									// This accounts for height changes from accordions etc...
									if ( activePatternId ) {
										setHeight( iframeDoc.body.scrollHeight );
									}
								} );
							} }
							title={ label }
							src={ isVisible ? generateBlocksInfo.patternPreviewUrl : '' }
							ref={ iframeRef }
							style={ {
								height: height + 'px',
								border: '0',
								pointerEvents: ! activePatternId ? 'none' : '',
								width: activePatternId ? previewIframeWidth : `${ iframe }px`,
								opacity: ! isLoaded ? 0 : 1,
								display: activePatternId && '100%' !== previewIframeWidth ? 'block' : '',
								margin: activePatternId && '100%' !== previewIframeWidth ? '0 auto' : '',
							} }
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
