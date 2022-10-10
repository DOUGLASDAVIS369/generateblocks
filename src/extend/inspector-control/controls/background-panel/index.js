import { __ } from '@wordpress/i18n';
import getIcon from '../../../../utils/get-icon';
import PanelArea from '../../../../components/panel-area';
import ImageUrl from './components/image-url';
import { useContext } from '@wordpress/element';
import ControlsContext from '../../../../block-context';
import UseInlineStyle from './components/use-inline-style';
import BackgroundOptions from './components/background-options';
import Size from './components/size';
import Position from './components/position';
import Repeat from './components/repeat';
import Attachment from './components/attachment';
import GradientControl from '../../../../components/gradient';

export default function BackgroundPanel( { attributes, setAttributes } ) {
	const { id, isInQueryLoop } = useContext( ControlsContext );

	const {
		bgImage,
		bgOptions,
		bgImageInline,
		useDynamicData,
		dynamicContentType,
		isQueryLoopItem,
	} = attributes;

	return (
		<PanelArea
			title={ __( 'Backgrounds', 'generateblocks' ) }
			initialOpen={ false }
			icon={ getIcon( 'gradients' ) }
			className={ 'gblocks-panel-label' }
			id={ `${ id }Background` }
			attributes={ attributes }
			setAttributes={ setAttributes }
		>
			<ImageUrl
				bgImage={ bgImage }
				setAttributes={ setAttributes }
				isUsingFeaturedImage={ useDynamicData && '' !== dynamicContentType }
			/>

			{ ( !! bgImage || ( useDynamicData && '' !== dynamicContentType ) ) &&
				<>
					<UseInlineStyle
						checked={ !! bgImageInline }
						disabled={ useDynamicData && '' !== dynamicContentType && ( isQueryLoopItem || isInQueryLoop ) }
						onChange={ ( value ) => setAttributes( { bgImageInline: value } ) }
					/>

					<BackgroundOptions
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>

					<Size
						value={ bgOptions.size }
						onChange={ ( nextSize ) => setAttributes( { bgOptions: { ...bgOptions, size: nextSize } } ) }
					/>

					<Position
						value={ bgOptions.position }
						onChange={ ( nextPosition ) => setAttributes( {
							bgOptions: { ...bgOptions, position: nextPosition },
						} ) }
					/>

					<Repeat
						value={ bgOptions.repeat }
						onChange={ ( nextRepeat ) => setAttributes( {
							bgOptions: { ...bgOptions, repeat: nextRepeat },
						} ) }
					/>

					<Attachment
						value={ bgOptions.attachment }
						onChange={ ( nextAttachment ) => setAttributes( {
							bgOptions: { ...bgOptions, attachment: nextAttachment },
						} ) }
					/>
				</>
			}

			<GradientControl
				attributes={ attributes }
				setAttributes={ setAttributes }
				attrGradient={ 'gradient' }
				attrGradientDirection={ 'gradientDirection' }
				attrGradientColorOne={ 'gradientColorOne' }
				attrGradientColorStopOne={ 'gradientColorStopOne' }
				attrGradientColorTwo={ 'gradientColorTwo' }
				attrGradientColorStopTwo={ 'gradientColorStopTwo' }
				attrGradientColorOneOpacity={ 'gradientColorOneOpacity' }
				attrGradientColorTwoOpacity={ 'gradientColorTwoOpacity' }
				defaultColorOne={ generateBlocksDefaults.container.gradientColorOne }
				defaultColorTwo={ generateBlocksDefaults.container.gradientColorTwo }
			/>
		</PanelArea>
	);
}
