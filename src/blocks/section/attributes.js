export default {
	uniqueId: {
		type: 'number',
		default: '',
	},
	tagName: {
		type: 'string',
		default: 'section',
	},
	elementId: {
		type: 'string',
		default: '',
	},
	cssClasses: {
		type: 'string',
		default: '',
	},
	isGrid: {
		type: 'boolean',
		default: false,
	},
	width: {
		type: 'number',
		default: generatepressDefaults.section.width,
	},
	mobileWidth: {
		type: 'number',
		default: generatepressDefaults.section.mobileWidth,
	},
	outerContainer: {
		type: 'string',
		default: generatepressDefaults.section.outerContainer,
	},
	innerContainer: {
		type: 'string',
		default: generatepressDefaults.section.innerContainer,
	},
	containerWidth: {
		type: 'number',
		default: generatepressDefaults.section.containerWidth,
	},
	paddingTop: {
		type: 'number',
		default: generatepressDefaults.section.paddingTop,
	},
	paddingRight: {
		type: 'number',
		default: generatepressDefaults.section.paddingRight,
	},
	paddingBottom: {
		type: 'number',
		default: generatepressDefaults.section.paddingBottom,
	},
	paddingLeft: {
		type: 'number',
		default: generatepressDefaults.section.paddingLeft,
	},
	paddingTopMobile: {
		type: 'number',
		default: generatepressDefaults.section.paddingTopMobile,
	},
	paddingRightMobile: {
		type: 'number',
		default: generatepressDefaults.section.paddingRightMobile,
	},
	paddingBottomMobile: {
		type: 'number',
		default: generatepressDefaults.section.paddingBottomMobile,
	},
	paddingLeftMobile: {
		type: 'number',
		default: generatepressDefaults.section.paddingLeftMobile,
	},
	marginTop: {
		type: 'number',
		default: generatepressDefaults.section.marginTop,
	},
	marginRight: {
		type: 'number',
		default: generatepressDefaults.section.marginRight,
	},
	marginBottom: {
		type: 'number',
		default: generatepressDefaults.section.marginBottom,
	},
	marginLeft: {
		type: 'number',
		default: generatepressDefaults.section.marginLeft,
	},
	marginTopMobile: {
		type: 'number',
		default: generatepressDefaults.section.marginTopMobile,
	},
	marginRightMobile: {
		type: 'number',
		default: generatepressDefaults.section.marginRightMobile,
	},
	marginBottomMobile: {
		type: 'number',
		default: generatepressDefaults.section.marginBottomMobile,
	},
	marginLeftMobile: {
		type: 'number',
		default: generatepressDefaults.section.marginLeftMobile,
	},
	backgroundColor: {
		type: 'string',
		default: generatepressDefaults.section.backgroundColor,
	},
	textColor: {
		type: 'string',
		default: generatepressDefaults.section.textColor,
	},
	linkColor: {
		type: 'string',
		default: generatepressDefaults.section.linkColor,
	},
	linkColorHover: {
		type: 'string',
		default: generatepressDefaults.section.linkColorHover,
	},
	bgImage: {
		type: 'object',
		default: generatepressDefaults.section.bgImage,
	},
	bgOptions: {
		type: 'object',
		default: {
			overlay: generatepressDefaults.section.bgOptions.overlay,
			position: generatepressDefaults.section.bgOptions.position,
			size: generatepressDefaults.section.bgOptions.size,
			repeat: generatepressDefaults.section.bgOptions.repeat,
			attachment: generatepressDefaults.section.bgOptions.attachment,
		}
	},
	verticalAlignment: {
		type: 'string',
		default: generatepressDefaults.section.verticalAlignment,
	},
	zindex: {
		type: 'number',
		default: generatepressDefaults.section.zindex,
	},
}
