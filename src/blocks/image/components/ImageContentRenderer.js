import ImagePlaceholder from './ImagePlaceholder';
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import RootElement from '../../../components/root-element';
import Element from '../../../components/element';
import Image from './Image';
import BlockControls from './BlockControls';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useRef, useState, useMemo, useEffect } from '@wordpress/element';

export default function ImageContentRenderer( props ) {
	const {
		attributes,
		setAttributes,
		name,
		clientId,
		isSelected,
		context,
	} = props;

	const {
		uniqueId,
		isDynamicContent,
		contentType,
		dynamicSource,
		anchor,
		dynamicImage, // Injected by DynamicRenderer
		href,
		openInNewWindow,
		relNoFollow,
		relSponsored,
		width,
		height,
	} = attributes;

	const imageRef = useRef();
	const [
		{ loadedNaturalWidth, loadedNaturalHeight },
		setLoadedNaturalSize,
	] = useState( {} );

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// witdth and height is otherwise lost when switching between alignments.
	// See: https://github.com/WordPress/gutenberg/pull/37210.
	const { naturalWidth, naturalHeight } = useMemo( () => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth ||
				loadedNaturalWidth ||
				undefined,
			naturalHeight:
				imageRef.current?.naturalHeight ||
				loadedNaturalHeight ||
				undefined,
		};
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
		imageRef.current?.complete,
	] );

	useEffect( () => {
		if ( ! isDynamicContent ) {
			if ( ! width ) {
				setAttributes( { width: naturalWidth } );
			}

			if ( ! height ) {
				setAttributes( { height: naturalHeight } );
			}
		}
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
	] );

	const currentImage = useSelect( ( select ) => {
		const { getMedia } = select( coreStore );

		if ( 'post-meta' === contentType && 'object' !== typeof dynamicImage ) {
			return getMedia( parseInt( dynamicImage ), { context: 'view' } );
		}

		return dynamicImage;
	}, [ isDynamicContent, dynamicImage ] );

	const imageUrl = isDynamicContent ? currentImage?.source_url : attributes.mediaUrl;
	const altText = isDynamicContent ? currentImage?.alt_text : attributes.alt;
	const titleText = isDynamicContent ? currentImage?.title?.rendered : attributes.title;
	const captionText = isDynamicContent ? currentImage?.caption?.rendered : attributes.caption;

	let htmlAttributes = {
		className: classnames( {
			'gb-block-image': true,
			[ `gb-block-image-${ uniqueId }` ]: true,
		} ),
		id: anchor ? anchor : null,
	};

	htmlAttributes = applyFilters(
		'generateblocks.frontend.htmlAttributes',
		htmlAttributes,
		'generateblocks/image',
		attributes
	);

	const blockProps = useBlockProps( htmlAttributes );

	const isDescendentOfQueryLoop = !! context[ 'generateblocks/query' ];

	const canUploadImage =
		! isDynamicContent ||
		(
			isDynamicContent &&
			'featured-image' === contentType &&
			'current-post' === dynamicSource &&
			! isDescendentOfQueryLoop
		);

	const anchorAttributes = {
		href,
		openInNewWindow,
		relNoFollow,
		relSponsored,
		disabled: true,
	};

	const imageProps = {
		width,
		height,
		src: imageUrl,
		alt: altText,
		title: titleText,
		caption: captionText,
		className: `gb-image-${ uniqueId }`,
		isDynamic: !! isDynamicContent,
		setAttributes,
		isSelected,
		anchorAttributes,
		imageRef,
		naturalWidth,
		naturalHeight,
		setLoadedNaturalSize,
	};

	return (
		<>
			<BlockControls { ...props } imageUrl={ imageUrl } canUploadImage={ canUploadImage } />

			<RootElement name={ name } clientId={ clientId }>
				<Element tagName="figure" htmlAttrs={ blockProps }>
					{ ( !! imageUrl )
						? <Image { ...imageProps } />
						: <ImagePlaceholder { ...props } canUploadImage={ canUploadImage } />
					}
				</Element>
			</RootElement>
		</>
	);
}
