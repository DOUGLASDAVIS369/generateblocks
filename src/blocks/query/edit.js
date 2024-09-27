import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { BlockStyles, withUniqueId } from '@edge22/block-styles';

import RootElement from '../../components/root-element/index.js';
import { TemplateSelector } from '@components/template-selector';
import { templates } from './templates';
import { BlockSettings } from './components/BlockSettings';
import { selectorShortcuts } from '@utils/selectorShortcuts';
import { withEmptyObjectFix } from '@hoc/withEmptyObjectFix';
import { withStyles } from '@hoc/withStyles';
import { BlockStylesBuilder } from '@components/index';
import { withHtmlAttributes } from '@hoc/withHtmlAttributes.js';
import { useBlockClassAttributes } from '@hooks/useBlockClassAttributes.js';
import { getBlockClasses } from '@utils/getBlockClasses.js';

function EditBlock( props ) {
	const {
		attributes,
		setAttributes,
		name,
		clientId,
		selector,
		onStyleChange,
		editorHtmlAttributes,
	} = props;

	const {
		tagName,
		showTemplateSelector,
	} = attributes;

	const classNameAttributes = useBlockClassAttributes( attributes );
	const classNames = getBlockClasses( 'gb-query', classNameAttributes );

	useEffect( () => {
		if ( ! tagName ) {
			setAttributes( { tagName: 'div' } );
		}
	}, [ tagName ] );

	const blockProps = useBlockProps(
		{
			className: classNames.join( ' ' ).trim(),
			...editorHtmlAttributes,
		}
	);

	const innerBlocksProps = useInnerBlocksProps(
		blockProps,
		{
			allowedBlocks: [
				'generateblocks/looper',
				'generateblocks/query-no-results',
				'generateblocks/query-page-numbers',
				'generateblocks/element',
			],
		}
	);

	const TagName = tagName || 'div';
	const shortcuts = useMemo( () => {
		const visibleShortcuts = [
			{
				label: __( 'Main', 'generateblocks' ),
				value: '',
			},
			{
				label: __( 'Links', 'generateblocks' ),
				value: 'a',
			},
		];

		return {
			selectorShortcuts,
			visibleShortcuts,
		};
	}, [] );

	if ( showTemplateSelector ) {
		return (
			<TemplateSelector
				clientId={ clientId }
				setAttributes={ setAttributes }
				label={ __( 'Query', 'generateblocks' ) }
				instructions={ __( 'Choose a layout to start with.', 'generateblocks' ) }
				templates={ templates }
			/>
		);
	}

	return (
		<>
			<InspectorControls>
				<BlockStyles
					settingsTab={ (
						<BlockSettings
							{ ...props }
						/>
					) }
					stylesTab={ (
						<BlockStylesBuilder
							selector={ selector }
							setAttributes={ setAttributes }
							shortcuts={ shortcuts }
							onStyleChange={ onStyleChange }
						/>
					) }
				/>
			</InspectorControls>
			<RootElement
				name={ name }
				clientId={ clientId }
			>
				<TagName { ...innerBlocksProps } />
			</RootElement>
		</>
	);
}

const Edit = compose(
	withHtmlAttributes,
	withStyles,
	withEmptyObjectFix,
	withUniqueId
)( EditBlock );

export { Edit };
