/**
 * External dependencies
 */
import classnames from 'classnames';
import blockAttributes from './attributes';

const {
	InnerBlocks,
} = wp.blockEditor;

const {
	applyFilters,
} = wp.hooks;

const deprecated = [
	// v1 of container block. Deprecated the gb-grid-column wrapper in save component.
	{
		attributes: blockAttributes,
		supports: {
			anchor: false,
			className: false,
			customClassName: false,
		},
		isEligible( attributes ) {
			return attributes.cssClasses && ! attributes.className;
		},
		migrate( attributes ) {
			const oldClasses = ( attributes.cssClasses ? attributes.cssClasses : undefined );

			return {
				...attributes,
				className: oldClasses ? oldClasses : undefined,
			};
		},
		save: ( props ) => {
			const {
				uniqueId,
				elementId,
				cssClasses,
			} = props.attributes;

			let htmlAttributes = {
				id: !! elementId ? elementId : undefined,
				className: classnames( {
					'gb-button-wrapper': true,
					[ `gb-button-wrapper-${ uniqueId }` ]: true,
					[ `${ cssClasses }` ]: '' !== cssClasses,
				} ),
			};

			htmlAttributes = applyFilters( 'generateblocks.frontend.htmlAttributes', htmlAttributes, 'generateblocks/button-container', props.attributes );

			return (
				<div
					{ ...htmlAttributes }
				>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];

export default deprecated;
