import { BlockControls } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import getIcon from '../../../utils/get-icon';
import { __ } from '@wordpress/i18n';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';

export default ( { clientId } ) => {
	const { insertBlocks } = useDispatch( 'core/block-editor' );

	const DEFAULT_BUTTON_ATTRIBUTES = {
		useDynamicData: true,
		isPagination: true,
	};

	const PAGINATION_TEMPLATE = [
		'generateblocks/container', {
			marginTop: '20',
			variantRole: 'button-container',
			display: 'flex',
			isPagination: true,
		},
		[
			[
				'generateblocks/button',
				Object.assign( {}, DEFAULT_BUTTON_ATTRIBUTES, generateBlocksStyling.button, {
					text: __( 'Previous', 'generateblocks' ),
					dynamicLinkType: 'pagination-prev',
					dynamicLinkRemoveIfEmpty: true,
				} ),
			],
			[
				'generateblocks/button',
				Object.assign( {}, DEFAULT_BUTTON_ATTRIBUTES, generateBlocksStyling.button, {
					text: __( '1 2 … 10', 'generateblocks' ),
					dynamicContentType: 'pagination-numbers',
				} ),
			],
			[
				'generateblocks/button',
				Object.assign( {}, DEFAULT_BUTTON_ATTRIBUTES, generateBlocksStyling.button, {
					text: __( 'Next', 'generateblocks' ),
					dynamicLinkType: 'pagination-next',
					dynamicLinkRemoveIfEmpty: true,
				} ),
			],
		],
	];

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={ getIcon( 'add-pagination' ) }
					label={ __( 'Add Pagination', 'generateblocks' ) }
					onClick={ () => {
						insertBlocks( createBlocksFromInnerBlocksTemplate( [ PAGINATION_TEMPLATE ] ), undefined, clientId );
					} }
					showTooltip
				/>
			</ToolbarGroup>
		</BlockControls>
	);
};
