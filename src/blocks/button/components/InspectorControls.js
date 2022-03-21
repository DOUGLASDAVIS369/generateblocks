import PanelArea from '../../../components/panel-area';
import { __ } from '@wordpress/i18n';
import getIcon from '../../../utils/get-icon';
import { Fragment, useEffect, useState } from '@wordpress/element';
import TypographyControls from '../../../components/typography';
import { applyFilters } from '@wordpress/hooks';
import DimensionsControl from '../../../components/dimensions';
import DimensionsGroup from '../../../components/dimensions-group';
import ColorGroup from '../../../components/color-group';
import GradientControl from '../../../components/gradient';
import IconPicker from '../../../components/icon-picker';
import { InspectorControls } from '@wordpress/block-editor';
import NumberControl from '../../../components/number-control';

const getFontSizePlaceholder = ( uniqueId ) => {
	let placeholder = '17';

	const buttonId = document.querySelector( `.gb-button-${ uniqueId }` );

	if ( buttonId ) {
		placeholder = parseFloat( window.getComputedStyle( buttonId ).fontSize );
	}

	return placeholder;
};

export default ( props ) => {
	const {
		uniqueId,
		attributes,
		deviceType,
		state,
		blockDefaults,
	} = props;

	const {
		icon,
		removeText,
		iconSizeUnit,
	} = attributes;

	const [ fontSizePlaceholder, setFontSizePlaceholder ] = useState( '17' );

	useEffect( () => {
		const currentPlaceholder = getFontSizePlaceholder( uniqueId );

		if ( currentPlaceholder !== fontSizePlaceholder ) {
			setFontSizePlaceholder( currentPlaceholder );
		}
	} );

	return (
		<InspectorControls>
			<PanelArea
				{ ...props }
				title={ __( 'Typography', 'generateblocks' ) }
				initialOpen={ false }
				icon={ getIcon( 'typography' ) }
				className={ 'gblocks-panel-label' }
				id={ 'buttonTypography' }
				state={ state }
				showPanel={ ! removeText || false }
			>
				<TypographyControls
					{ ...props }
					deviceType={ deviceType }
					options={ [ 'fontWeight', 'textTransform', 'fontSize', 'letterSpacing', 'fontFamily' ] }
				/>

				{ applyFilters( 'generateblocks.editor.controls', '', 'buttonTypography', props, state ) }
			</PanelArea>

			<PanelArea
				{ ...props }
				title={ __( 'Spacing', 'generateblocks' ) }
				initialOpen={ false }
				icon={ getIcon( 'spacing' ) }
				className={ 'gblocks-panel-label' }
				id={ 'buttonSpacing' }
				state={ state }
			>
				<DimensionsGroup
					{ ...props }
					deviceType={ deviceType }
					dimensions={
						[
							{
								type: 'padding',
								label: __( 'Padding', 'generateblocks' ),
								units: [ 'px', 'em', '%' ],
							},
							{
								type: 'margin',
								label: __( 'Margin', 'generateblocks' ),
								units: [ 'px', 'em', '%' ],
							},
							{
								type: 'borderSize',
								label: __( 'Border Size', 'generateblocks' ),
								units: [ 'px' ],
							},
							{
								type: 'borderRadius',
								label: __( 'Border Radius', 'generateblocks' ),
								units: [ 'px', 'em', '%' ],
							},
						]
					}
				/>

				{ applyFilters( 'generateblocks.editor.controls', '', 'buttonSpacing', props, state ) }
			</PanelArea>

			<PanelArea
				{ ...props }
				title={ __( 'Colors', 'generateblocks' ) }
				initialOpen={ false }
				icon={ getIcon( 'colors' ) }
				className={ 'gblocks-panel-label' }
				id={ 'buttonColors' }
				state={ state }
			>
				{ 'Desktop' === deviceType &&
					<ColorGroup
						{ ...props }
						colors={
							[
								{
									label: __( 'Background', 'generateblocks' ),
									attribute: 'backgroundColor',
									alpha: true,
								},
								{
									label: __( 'Background Hover', 'generateblocks' ),
									attribute: 'backgroundColorHover',
									alpha: true,
								},
								{
									label: __( 'Text', 'generateblocks' ),
									attribute: 'textColor',
								},
								{
									label: __( 'Text Hover', 'generateblocks' ),
									attribute: 'textColorHover',
								},
								{
									label: __( 'Border', 'generateblocks' ),
									attribute: 'borderColor',
									alpha: true,
								},
								{
									label: __( 'Border Hover', 'generateblocks' ),
									attribute: 'borderColorHover',
									alpha: true,
								},
							]
						}
					/>
				}

				{ applyFilters( 'generateblocks.editor.controls', '', 'buttonColors', props, state ) }
			</PanelArea>

			<PanelArea
				{ ...props }
				title={ __( 'Background Gradient', 'generateblocks' ) }
				initialOpen={ false }
				icon={ getIcon( 'gradients' ) }
				className={ 'gblocks-panel-label' }
				id={ 'buttonBackgroundGradient' }
				state={ state }
			>
				{ 'Desktop' === deviceType &&
				<GradientControl
					{ ...props }
					attrGradient={ 'gradient' }
					attrGradientDirection={ 'gradientDirection' }
					attrGradientColorOne={ 'gradientColorOne' }
					attrGradientColorOneOpacity={ 'gradientColorOneOpacity' }
					attrGradientColorStopOne={ 'gradientColorStopOne' }
					attrGradientColorTwo={ 'gradientColorTwo' }
					attrGradientColorTwoOpacity={ 'gradientColorTwoOpacity' }
					attrGradientColorStopTwo={ 'gradientColorStopTwo' }
					defaultColorOne={ blockDefaults.gradientColorOne }
					defaultColorTwo={ blockDefaults.gradientColorTwo }
				/>
				}

				{ applyFilters( 'generateblocks.editor.controls', '', 'buttonBackgroundGradient', props, state ) }
			</PanelArea>

			<PanelArea
				{ ...props }
				title={ __( 'Icon', 'generateblocks' ) }
				initialOpen={ false }
				icon={ getIcon( 'icons' ) }
				className={ 'gblocks-panel-label' }
				id={ 'buttonIcon' }
				state={ state }
				showPanel={ 'Desktop' === deviceType || !! icon ? true : false }
			>

				{ 'Desktop' === deviceType &&
				<IconPicker
					{ ...props }
					attrIcon={ 'icon' }
					attrIconLocation={ 'iconLocation' }
					attrRemoveText={ 'removeText' }
					locationOptions={ [
						{ label: __( 'Left', 'generateblocks' ), value: 'left' },
						{ label: __( 'Right', 'generateblocks' ), value: 'right' },
					] }
				/>
				}

				{ 'Desktop' === deviceType && !! icon && (
					<Fragment>
						{ ! removeText &&
							<DimensionsControl
								{ ...props }
								device={ deviceType }
								type={ 'iconPadding' }
								label={ __( 'Padding', 'generateblocks' ) }
								units={ [ 'px', 'em', '%' ] }
							/>
						}
					</Fragment>
				) }

				{ 'Tablet' === deviceType && !! icon &&
				<Fragment>
					{ ! removeText &&
						<DimensionsControl
							{ ...props }
							device={ deviceType }
							type={ 'iconPadding' }
							label={ __( 'Padding', 'generateblocks' ) }
							units={ [ 'px', 'em', '%' ] }
						/>
					}
				</Fragment>
				}

				{ 'Mobile' === deviceType && !! icon && (
					<Fragment>
						{ ! removeText &&
							<DimensionsControl
								{ ...props }
								device={ deviceType }
								type={ 'iconPadding' }
								label={ __( 'Padding', 'generateblocks' ) }
								units={ [ 'px', 'em', '%' ] }
							/>
						}
					</Fragment>
				) }

				{ !! icon &&
					<NumberControl
						{ ...props }
						label={ __( 'Icon Size', 'generateblocks' ) }
						attributeName="iconSize"
						units={ [ 'px', 'em' ] }
						device={ deviceType }
						presets={
							[
								{
									unit: 'em',
									data: [ 0.7, 1, 1.5, 2 ],
								},
							]
						}
						min="1"
						step={ 'em' === iconSizeUnit ? .1 : 1 }
					/>
				}

				{ applyFilters( 'generateblocks.editor.controls', '', 'buttonIcon', props, state ) }
			</PanelArea>
		</InspectorControls>
	);
};
