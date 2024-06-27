import { __ } from '@wordpress/i18n';

import ApplyFilters from '@components/apply-filters';
import { OpenPanel } from '@components/open-panel';
import { HtmlAttributes } from '@components/html-attributes';
import { QueryInspectorControls } from './QueryInspectorControls';

export function BlockSettings( {
	onStyleChange,
	name,
	attributes,
	setAttributes,
} ) {
	const {
		htmlAttributes,
	} = attributes;

	return (
		<ApplyFilters
			name="generateblocks.editor.blockControls"
			blockName={ name }
			onStyleChange={ onStyleChange }
			attributes={ attributes }
			setAttributes={ setAttributes }
		>
			<OpenPanel
				title={ __( 'Query Parameters', 'generateblocks' ) }
			>
				<QueryInspectorControls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</OpenPanel>
			<OpenPanel
				title={ __( 'Settings', 'generateblocks' ) }
			>
				<HtmlAttributes
					items={ htmlAttributes }
					onAdd={ ( value ) => setAttributes( { htmlAttributes: value } ) }
					onRemove={ ( value ) => setAttributes( { htmlAttributes: value } ) }
					onChange={ ( value ) => setAttributes( { htmlAttributes: value } ) }
				/>
			</OpenPanel>
		</ApplyFilters>
	);
}
