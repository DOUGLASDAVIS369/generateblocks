export const containerColorControls = [
	{
		label: 'Background Color',
		items: [
			{
				tooltip: 'Background Color',
				value: 'backgroundColor',
				selector: '',
			},
		],
	},
	{
		label: 'Text Color',
		items: [
			{
				tooltip: 'Text Color',
				value: 'color',
				selector: '',
			},
		],
	},
	{
		label: 'Link Color',
		items: [
			{
				tooltip: 'Link Color',
				value: 'color',
				selector: 'a',
			},
			{
				tooltip: 'Link Hover Color',
				value: 'color',
				selector: 'a:is(:hover, :focus)',
			},
		],
	},
];

export const buttonColorControls = [
	{
		label: 'Background Color',
		items: [
			{
				tooltip: 'Background Color',
				value: 'backgroundColor',
				selector: '',
			},
			{
				tooltip: 'Hover Background Color',
				value: 'backgroundColor',
				selector: '&:is(:hover, :focus)',
			},
		],
	},
	{
		label: 'Text Color',
		items: [
			{
				tooltip: 'Text Color',
				value: 'color',
				selector: '',
			},
			{
				tooltip: 'Hover Text Color',
				value: 'color',
				selector: '&:is(:hover, :focus)',
			},
		],
	},
];
