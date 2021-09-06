const el = wp.element.createElement;

export default function getIcon( icon ) {
	if ( 'tabs-desktop' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
			el( 'path', {
				d: 'M18.95 4H4.55C3.55589 4 2.75 4.76751 2.75 5.71429V14.2857C2.75 15.2325 3.55589 16 4.55 16H18.95C19.9441 16 20.75 15.2325 20.75 14.2857V5.71429C20.75 4.76751 19.9441 4 18.95 4Z',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			} ),
			el( 'path', {
				d: 'M1.75 18C1.19772 18 0.75 18.4477 0.75 19C0.75 19.5523 1.19772 20 1.75 20H21.75C22.3023 20 22.75 19.5523 22.75 19C22.75 18.4477 22.3023 18 21.75 18H1.75ZM9 18.8C8.86193 18.8 8.75 18.9119 8.75 19.05C8.75 19.1881 8.86193 19.3 9 19.3H14.5C14.6381 19.3 14.75 19.1881 14.75 19.05C14.75 18.9119 14.6381 18.8 14.5 18.8H9Z',
				stroke: 'currentColor',
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			} ),
		);
	}

	if ( 'tabs-tablet' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24' },
			el( 'path', { d: 'M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z' } ),
			el( 'path', { d: 'M12 17.5H12.01' } )
		);
	}

	if ( 'tabs-mobile' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24' },
			el( 'path', { d: 'M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z' } ),
			el( 'path', { d: 'M12 17.5H12.01' } )
		);
	}

	if ( 'sync' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24' },
			el( 'path', {
				d: 'm7.34133533 6.23855964v-1.98499625c-2.17404351.03150788-4.03300825 1.38634659-4.85221305 3.27681921-.31507877.72468117-.44111028 1.51237809-.4096024 2.33158289.06301575 1.13428361.47261815 2.20555141 1.16579145 3.05626411.37809452.4411102.28357089 1.1027757-.18904726 1.4493623-.44111028.3150788-1.07126782.2205551-1.41785447-.1890473-.85071268-1.0397599-1.38634658-2.3315829-1.54388597-3.7179294-.12603151-1.00825211-.03150788-2.01650417.25206302-2.9302326.88222055-3.02475619 3.6864216-5.26181546 6.99474868-5.29332334v-1.98499624c0-.09452363.12603151-.15753939.22055514-.09452363l4.09602403 2.99324831c.0630157.06301575.0630157.15753938 0 .18904726l-4.09602403 2.99324831c-.09452363.06301575-.22055514 0-.22055514-.09452363zm.22055514 13.17029256c.09452363.0630158.22055514 0 .22055514-.0945236v-1.9849963c3.30832709-.0315078 6.11252809-2.2685671 6.99474869-5.2933233.252063-.9137284.3780945-1.8904726.252063-2.93023256-.1575394-1.38634658-.7246812-2.67816954-1.543886-3.71792948-.3465866-.44111028-.9767441-.53563391-1.4178544-.18904726-.4726182.34658665-.5671418 1.00825206-.1890473 1.44936234.6931733.85071268 1.1027757 1.89047262 1.1657915 3.05626407.0315078.81920479-.1260315 1.63840959-.4096024 2.33158289-.787697 1.8904726-2.6466617 3.2453113-4.85221309 3.2768192v-1.9849962c0-.0945237-.12603151-.1575394-.22055514-.0945237l-4.096024 2.9932483c-.06301576.0630158-.06301576.1575394 0 .1890473z',
				transform: 'translate(4 2)',
			} ),
		);
	}

	if ( 'headline' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 20 20', style: { padding: '1px' } },
			el( 'path', {
				d: 'M12.5 4v5.2h-5V4H5v13h2.5v-5.2h5V17H15V4',
				fill: '#1e72bd',
			} ),
		);
	}

	if ( 'grid' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 20 20', style: { padding: '1px' } },
			el( 'path', {
				d: 'M20 .6c0-.3-.2-.6-.5-.6H.5C.2 0 0 .3 0 .6v4.6c0 .3.2.6.5.6h19c.3 0 .5-.3.5-.6V.6zM6.7 7.7c0-.3-.2-.6-.5-.6H.5c-.3 0-.5.3-.5.6v4.6c0 .3.2.6.5.6h5.6c.3 0 .5-.3.5-.6l.1-4.6zM19.9 7.7c0-.3-.2-.6-.6-.6H8.6c-.4 0-.6.3-.6.6v4.5c0 .3.2.6.6.6h10.8c.3 0 .6-.3.6-.6l-.1-4.5z',
				fill: '#1d72ba',
			} ),
			el( 'path', {
				d: 'M20 14.8c0-.3-.2-.6-.5-.6h-5.6c-.3 0-.5.2-.5.6v4.6c0 .3.2.6.5.6h5.6c.3 0 .5-.2.5-.6v-4.6zM12 14.8c0-.3-.2-.5-.5-.5H.5c-.3 0-.5.2-.5.5v4.6c0 .4.2.6.5.6h11c.3 0 .5-.2.5-.5v-4.7z',
				fill: '#1d72ba',
			} ),
		);
	}

	if ( 'container' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 20 20', style: { padding: '1px' } },
			el( 'path', {
				d: 'M2.8 3.4c0-.4.3-.7.7-.7h1.2V0H3.4C1.5 0 0 1.5 0 3.4v1.2h2.8V3.4zM0 7.4h2.8v5.3H0zM17.2 7.4H20v5.3h-2.8zM17.2 16.6c0 .4-.3.7-.7.7h-1.2V20h1.2c1.9 0 3.4-1.5 3.4-3.4v-1.2h-2.8v1.2h.1zM7.4 0h5.3v2.8H7.4zM3.4 17.2c-.4 0-.7-.3-.7-.7v-1.2H0v1.2c0 2 1.5 3.5 3.4 3.5h1.2v-2.8H3.4zM7.4 17.2h5.3V20H7.4zM16.6 2.8c.4 0 .7.3.7.7v1.2H20V3.4C20 1.5 18.5 0 16.6 0h-1.2v2.8h1.2z',
				fill: '#1e72bd',
			} ),
		);
	}

	if ( 'button' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 20 20', style: { padding: '1px' } },
			el( 'path', {
				d: 'M19.2 0H.8C.4 0 0 .4 0 .8v6.4c0 .4.4.8.8.8h18.4c.4 0 .8-.4.8-.8V.8c0-.4-.4-.8-.8-.8zM18.4 12H1.6c-.9 0-1.6.7-1.6 1.6v4.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6v-4.8c0-.9-.7-1.6-1.6-1.6zm.4 6.4c0 .2-.2.4-.4.4H1.6c-.2 0-.4-.2-.4-.4v-4.8c0-.2.2-.4.4-.4h16.8c.2 0 .4.2.4.4v4.8z',
				fill: '#1e72bd',
			} ),
		);
	}

	if ( 'paragraph' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 20 20' },
			el( 'path', {
				d: 'M15 2H7.54c-.83 0-1.59.2-2.28.6-.7.41-1.25.96-1.65 1.65C3.2 4.94 3 5.7 3 6.52s.2 1.58.61 2.27c.4.69.95 1.24 1.65 1.64.69.41 1.45.61 2.28.61h.43V17c0 .27.1.51.29.71.2.19.44.29.71.29.28 0 .51-.1.71-.29.2-.2.3-.44.3-.71V5c0-.27.09-.51.29-.71.2-.19.44-.29.71-.29s.51.1.71.29c.19.2.29.44.29.71v12c0 .27.1.51.3.71.2.19.43.29.71.29.27 0 .51-.1.71-.29.19-.2.29-.44.29-.71V4H15c.27 0 .5-.1.7-.3.2-.19.3-.43.3-.7s-.1-.51-.3-.71A.984.984 0 0 0 15 2z',
			} ),
		);
	}

	if ( 'spacing' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-10.007,10.007c6.632,6.632 6.632,73.42 0,80.052c-6.632,6.632 -73.42,6.632 -80.052,0c-6.632,-6.632 -6.632,-73.42 0,-80.052c6.632,-6.632 73.42,-6.632 80.052,0Z',
			} ),
			el( 'path', {
				d: 'M40.452,77.705c7.802,1.393 23.794,1.393 31.596,0l13.635,13.635c-12.215,3.213 -46.652,3.213 -58.866,0l13.635,-13.635Zm50.888,-50.888c3.213,12.215 3.213,46.653 0,58.866l-13.635,-13.635c1.393,-7.801 1.393,-23.794 0,-31.596l13.635,-13.635Zm-70.18,0l13.635,13.635c-1.393,7.802 -1.393,23.794 0,31.596l-13.635,13.635c-3.213,-12.213 -3.213,-46.651 0,-58.866Zm5.657,-5.657c12.214,-3.213 46.652,-3.213 58.866,0l-13.635,13.635c-7.801,-1.393 -23.795,-1.393 -31.596,0l-13.635,-13.635Z',
			} ),
		);
	}

	if ( 'advanced' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-10.007,37.215c6.632,2.124 6.632,23.512 0,25.636c-6.632,2.124 -73.42,2.124 -80.052,0c-6.632,-2.124 -6.632,-23.512 0,-25.636c6.632,-2.124 73.42,-2.124 80.052,0Z',
			} ),
			el( 'path', {
				d: 'M48.61,51.916c2.243,0.718 2.243,7.95 0,8.668c-2.242,0.718 -24.823,0.718 -27.065,0c-2.243,-0.718 -2.243,-7.95 0,-8.668c2.242,-0.718 24.823,-0.718 27.065,0Z',
			} ),
			el( 'path', {
				d: 'M90.955,51.916c2.243,0.718 2.243,7.95 0,8.668c-2.242,0.718 -24.823,0.718 -27.065,0c-2.243,-0.718 -2.243,-7.95 0,-8.668c2.242,-0.718 24.823,-0.718 27.065,0Z',
			} ),
		);
	}

	if ( 'backgrounds' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M1.491,87.777l37.79,-37.79l31.352,31.352c2.412,2.171 5.656,0 5.656,0l17.248,-17.247l13.186,13.186l4.796,4.797c-0.971,12.199 -2.726,21.685 -5.249,24.208c-8.29,8.289 -91.776,8.289 -100.066,0c-2.113,-2.113 -3.687,-9.113 -4.713,-18.506Z',
			} ),
			el( 'path', {
				d: 'M0.631,77.323c-1.742,-27.728 0.125,-65.658 5.573,-71.106c8.29,-8.289 91.776,-8.289 100.066,0c5.07,5.07 7.039,38.265 5.89,65.185l-15.795,-15.795c-2.412,-2.172 -5.657,0 -5.657,0l-17.247,17.246l-31.351,-31.351c-0.731,-0.658 -1.036,-1 -2.619,-1.166c-0.263,0 -0.477,-0.075 -1.245,0.131c-0.912,0.244 -1.793,1.035 -1.793,1.035l-35.822,35.821Zm76.434,-59.584c7.115,0 12.891,5.776 12.891,12.89c0,7.114 -5.776,12.89 -12.891,12.89c-7.114,0 -12.89,-5.776 -12.89,-12.89c0,-7.114 5.776,-12.89 12.89,-12.89Z',
			} ),
		);
	}

	if ( 'colors' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-50.033,12.818c-20.551,0 -37.215,16.664 -37.215,37.215c0,20.551 16.664,37.215 37.215,37.215c3.432,0 6.202,-2.77 6.202,-6.203c0,-1.612 -0.62,-3.059 -1.612,-4.176c-0.951,-1.075 -1.571,-2.522 -1.571,-4.094c0,-3.432 2.77,-6.202 6.202,-6.202l7.319,0c11.413,0 20.675,-9.262 20.675,-20.675c0,-18.277 -16.664,-33.08 -37.215,-33.08Zm-22.742,37.215c-3.433,0 -6.203,-2.77 -6.203,-6.202c0,-3.433 2.77,-6.203 6.203,-6.203c3.432,0 6.202,2.77 6.202,6.203c0,3.432 -2.77,6.202 -6.202,6.202Zm45.484,0c-3.432,0 -6.202,-2.77 -6.202,-6.202c0,-3.433 2.77,-6.203 6.202,-6.203c3.433,0 6.203,2.77 6.203,6.203c0,3.432 -2.77,6.202 -6.203,6.202Zm-33.079,-16.54c-3.433,0 -6.203,-2.77 -6.203,-6.202c0,-3.433 2.77,-6.203 6.203,-6.203c3.432,0 6.202,2.77 6.202,6.203c0,3.432 -2.77,6.202 -6.202,6.202Zm20.674,0c-3.432,0 -6.202,-2.77 -6.202,-6.202c0,-3.433 2.77,-6.203 6.202,-6.203c3.433,0 6.203,2.77 6.203,6.203c0,3.432 -2.77,6.202 -6.203,6.202Z',
			} ),
		);
	}

	if ( 'gradients' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M112.426,48.746c0.503,25.204 -1.545,52.939 -6.143,57.537c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.289,-8.288 91.748,-8.289 100.061,-0.004c0,0 0.005,0.004 0.005,0.004c3.691,3.692 5.739,22.295 6.143,42.529Zm-16.154,-32.526c-6.656,-6.628 -73.418,-6.627 -80.048,0.004c-6.631,6.63 -6.632,73.392 -0.004,80.048l80.052,-80.052Z',
			} ),
		);
	}

	if ( 'icons' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-10.007,10.007c6.632,6.632 6.632,73.42 0,80.052c-6.632,6.632 -73.42,6.632 -80.052,0c-6.632,-6.632 -6.632,-73.42 0,-80.052c6.632,-6.632 73.42,-6.632 80.052,0Z',
			} ),
			el( 'path', {
				d: 'M89.605,22.895c5.527,5.526 5.527,61.184 0,66.71c-5.526,5.527 -61.184,5.527 -66.71,0c-5.527,-5.526 -5.527,-61.184 0,-66.71c5.526,-5.527 61.184,-5.527 66.71,0Zm-21.066,62.31l0,-2.731c-0.648,-0.074 -1.272,-0.199 -1.87,-0.374c-0.599,-0.174 -1.148,-0.374 -1.646,-0.598c-0.699,-0.299 -1.235,-0.755 -1.609,-1.366c-0.374,-0.611 -0.561,-1.353 -0.561,-2.226l0,-29.703l-0.561,-0.561l-18.331,0.972l0,2.731c0.748,0.075 1.577,0.25 2.488,0.524c0.91,0.274 1.589,0.561 2.038,0.86c0.599,0.399 1.098,0.929 1.497,1.59c0.399,0.661 0.598,1.428 0.598,2.301l0,21.773c0,0.923 -0.162,1.665 -0.486,2.226c-0.324,0.561 -0.885,0.991 -1.683,1.29c-0.449,0.175 -0.986,0.3 -1.609,0.374c-0.624,0.075 -1.26,0.138 -1.908,0.187l0,2.731l23.643,0Zm-12.978,-59.459c4.76,0 8.625,3.864 8.625,8.625c0,4.76 -3.865,8.625 -8.625,8.625c-4.76,0 -8.625,-3.865 -8.625,-8.625c0,-4.761 3.865,-8.625 8.625,-8.625Z',
			} ),
		);
	}

	if ( 'typography' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-8.783,78.583l0,-2.817c-0.661,-0.026 -1.481,-0.165 -2.46,-0.417c-0.979,-0.251 -1.773,-0.562 -2.381,-0.932c-0.9,-0.609 -1.601,-1.23 -2.103,-1.865c-0.503,-0.635 -0.953,-1.468 -1.349,-2.5l-18.769,-48.569l-3.175,0c-2.672,6.878 -5.714,14.721 -9.126,23.53c-3.266,8.43 -6.265,16.06 -8.998,22.891l-11.672,-28.684l-2.304,0c-1.939,4.742 -4.148,10.149 -6.625,16.222c-2.477,6.072 -4.743,11.543 -6.798,16.412c-0.403,0.949 -0.816,1.692 -1.238,2.23c-0.423,0.538 -1.018,1.053 -1.786,1.545c-0.48,0.292 -1.095,0.524 -1.844,0.698c-0.749,0.173 -1.373,0.278 -1.872,0.314l0,1.942l15.382,0l0,-1.942c-1.518,-0.073 -2.881,-0.31 -4.091,-0.711c-1.209,-0.401 -1.814,-0.966 -1.814,-1.696c0,-0.31 0.048,-0.711 0.144,-1.204c0.096,-0.492 0.268,-1.13 0.518,-1.914c0.269,-0.803 0.571,-1.678 0.907,-2.626c0.336,-0.948 0.773,-2.061 1.311,-3.338l14.316,0l3.399,8.699c0.012,0.03 0.024,0.06 0.036,0.092c-0.161,0.119 -0.329,0.237 -0.503,0.355c-0.661,0.423 -1.508,0.76 -2.539,1.012c-1.032,0.251 -1.892,0.403 -2.58,0.456l0,2.817l21.19,0l0,-2.817c-2.09,-0.106 -3.968,-0.45 -5.635,-1.032c-1.666,-0.582 -2.499,-1.402 -2.499,-2.46c0,-0.45 0.066,-1.032 0.198,-1.746c0.132,-0.714 0.37,-1.64 0.714,-2.777c0.371,-1.164 0.787,-2.434 1.25,-3.81c0.463,-1.375 1.065,-2.989 1.806,-4.841l19.721,0l4.682,12.619c0.106,0.264 0.186,0.568 0.238,0.912c0.053,0.344 0.08,0.635 0.08,0.873c0,0.582 -0.681,1.072 -2.044,1.468c-1.362,0.397 -3.075,0.662 -5.138,0.794l0,2.817l23.451,0Zm-56.864,-15.865l-6.193,-15.045l-6.078,15.045l12.271,0Zm34.167,-7.15l-8.532,-21.824l-8.373,21.824l16.905,0Z',
			} ),
		);
	}

	if ( 'addContainer' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 64 64', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M41.454,57.126l0,6.409c-6.088,0.286 -12.82,0.286 -18.908,0l0,-6.409c5.957,0.366 12.951,0.366 18.908,0Zm-33.93,-8.899c0.458,3.226 1.086,5.568 1.883,6.366c0.798,0.797 3.14,1.425 6.366,1.883l0,6.592c-6.084,-0.578 -10.706,-1.519 -12.015,-2.826c-1.307,-1.309 -2.248,-5.931 -2.826,-12.015l6.592,0Zm55.544,0c-0.578,6.084 -1.519,10.706 -2.826,12.015c-1.309,1.307 -5.931,2.248 -12.015,2.826l0,-6.592c3.226,-0.458 5.568,-1.086 6.366,-1.883c0.797,-0.798 1.425,-3.14 1.883,-6.366l6.592,0Zm0.467,-25.681c0.286,6.088 0.286,12.82 0,18.908l-6.409,0c0.366,-5.957 0.366,-12.951 0,-18.908l6.409,0Zm-56.661,0c-0.366,5.957 -0.366,12.951 0,18.908l-6.409,0c-0.286,-6.088 -0.286,-12.82 0,-18.908l6.409,0Zm41.353,-21.614c6.084,0.578 10.706,1.519 12.015,2.826c1.307,1.309 2.248,5.931 2.826,12.015l-6.592,0c-0.458,-3.226 -1.086,-5.568 -1.883,-6.366c-0.798,-0.797 -3.14,-1.425 -6.366,-1.883l0,-6.592Zm-32.454,0l0,6.592c-3.226,0.458 -5.568,1.086 -6.366,1.883c-0.797,0.798 -1.425,3.14 -1.883,6.366l-6.592,0c0.578,-6.084 1.519,-10.706 2.826,-12.015c1.309,-1.307 5.931,-2.248 12.015,-2.826Zm6.773,-0.467c6.088,-0.286 12.82,-0.286 18.908,0l0,6.409c-5.957,-0.366 -12.951,-0.366 -18.908,0l0,-6.409Z',
			} ),
			el( 'path', {
				d: 'M18.03,29.037l11.007,0l0,-11.007l6.773,0l0,11.007l11.007,0l0,6.773l-11.007,0l0,11.007l-6.773,0l0,-11.007l-11.007,0l0,-6.773Z',
			} ),
		);
	}

	if ( 'gradient' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M17.66 8L12 2.35L6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z',
			} ),
		);
	}

	if ( 'documentation' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.755 6.245c8.327 8.326 8.327 92.184 0 100.51-8.326 8.327-92.184 8.327-100.51 0-8.327-8.326-8.327-92.184 0-100.51 8.326-8.327 92.184-8.327 100.51 0zm-92.661 93.896C9.279 84 9.781 23.714 15.834 17.661c2.491-2.491 19.588-4.132 26.354-4.712 4.748-.408 10.115.671 14.243 1.23 4.128-.559 9.495-1.638 14.243-1.23 6.766.58 23.863 2.221 26.354 4.712 6.053 6.053 6.791 66.339 1.976 82.48-4.729-1.977-19.708-3.436-26.784-3.853-5.234-.308-11.129.739-15.671 1.354-4.543-.615-10.437-1.662-15.672-1.354-7.075.417-22.054 1.876-26.783 3.853z',
			} ),
			el( 'path', {
				d: 'M50.188 32.738c2.252.536 2.252 5.927 0 6.463-2.252.535-24.934.535-27.186 0-2.252-.536-2.252-5.927 0-6.463 2.252-.535 24.934-.535 27.186 0zM50.277 46.846c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0zM50.277 60.037c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0zM50.277 73.799c2.252.536 2.252 5.927 0 6.463-2.252.535-24.934.535-27.186 0-2.252-.536-2.252-5.927 0-6.463 2.252-.535 24.934-.535 27.186 0z',
			} ),
			el( 'path', {
				d: 'M89.909 32.738c2.252.536 2.252 5.927 0 6.463-2.252.535-24.934.535-27.186 0-2.252-.536-2.252-5.927 0-6.463 2.252-.535 24.934-.535 27.186 0zM89.998 46.846c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0zM89.998 60.037c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0z',
			} ),
		);
	}

	if ( 'layout' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.719 6.238c8.362 8.362 8.362 92.208 0 100.57-8.362 8.287-92.208 8.287-100.495 0-8.362-8.362-8.362-92.208 0-100.57 8.287-8.286 92.133-8.286 100.495 0zm-9.417 9.417c6.78 6.78 6.78 74.957 0 81.737-6.78 6.78-74.956 6.78-81.661 0-6.78-6.78-6.78-74.957 0-81.737 6.705-6.78 74.881-6.78 81.661 0z',
			} ),
			el( 'path', {
				d: 'M93.988 48.877c.602 17.477-.754 37.893-3.993 41.132-3.164 3.164-22.75 4.52-40.002 4.068v-45.2h43.995zm-75.108 0h23.58v44.899c-9.718-.603-17.553-1.808-19.512-3.767-3.24-3.24-4.595-23.655-4.068-41.132zm.377-7.533c.678-9.19 1.883-16.498 3.691-18.306 5.575-5.575 61.472-5.575 67.047 0 1.808 1.808 3.013 9.115 3.691 18.306h-74.43z',
			} ),
		);
	}

	if ( 'shapes' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.756,6.244C115.081,14.571 115.081,98.429 106.756,106.756C98.429,115.081 14.571,115.081 6.244,106.756C-2.081,98.429 -2.081,14.571 6.244,6.244C14.571,-2.081 98.429,-2.081 106.756,6.244ZM67.875,88.052C67.875,86.977 67.003,86.105 65.928,86.105L47.072,86.105C45.997,86.105 45.125,86.977 45.125,88.052L45.125,91.948C45.125,93.023 45.997,93.896 47.072,93.896L65.928,93.896C67.003,93.896 67.875,93.023 67.875,91.948L67.875,88.052ZM57.899,31.409L59.305,31.409C60.853,31.409 62.11,30.152 62.11,28.604L62.11,28.089L73.263,57.543C73.757,58.333 73.731,59.161 73.731,59.403C73.729,62.659 65.231,69.414 65.375,83.611L47.625,83.611C47.769,69.414 39.271,62.659 39.269,59.403C39.269,59.161 39.243,58.333 39.737,57.543L50.89,28.089L50.89,28.604C50.89,30.152 52.147,31.409 53.695,31.409L55.101,31.409C55.111,35.738 55.142,50.367 55.098,54.109C55.093,54.494 54.907,54.988 54.68,55.45C52.915,56.169 51.669,57.903 51.669,59.925C51.669,62.592 53.834,64.756 56.5,64.756C59.166,64.756 61.331,62.592 61.331,59.925C61.331,57.903 60.085,56.169 58.32,55.45C58.093,54.988 57.907,54.494 57.902,54.109C57.858,50.367 57.889,35.738 57.899,31.409ZM52.227,19.451L52.227,18.881C52.227,17.702 53.185,16.745 54.364,16.745L58.636,16.745C59.815,16.745 60.773,17.702 60.773,18.881L60.773,19.451L88.831,19.451C89.457,17.867 91.002,16.745 92.807,16.745C95.165,16.745 97.08,18.66 97.08,21.018C97.08,23.376 95.165,25.29 92.807,25.29C91.03,25.29 89.505,24.203 88.861,22.658L71.798,22.658C83.83,28.003 92.531,39.501 93.898,53.148L94.93,53.148C96.109,53.148 97.067,54.105 97.067,55.284L97.067,59.557C97.067,60.736 96.109,61.693 94.93,61.693L90.657,61.693C89.478,61.693 88.521,60.736 88.521,59.557L88.521,55.284C88.521,54.105 89.478,53.148 90.657,53.148L90.922,53.148C89.19,37.24 76.627,24.564 60.773,22.659L60.773,23.154C60.773,24.333 59.815,25.29 58.636,25.29L54.364,25.29C53.185,25.29 52.227,24.333 52.227,23.154L52.227,22.688C36.484,24.689 24.036,37.318 22.312,53.148L22.329,53.148C23.508,53.148 24.466,54.105 24.466,55.284L24.466,59.557C24.466,60.736 23.508,61.693 22.329,61.693L18.056,61.693C16.877,61.693 15.92,60.736 15.92,59.557L15.92,55.284C15.92,54.105 16.877,53.148 18.056,53.148L19.336,53.148C20.703,39.501 29.405,28.003 41.437,22.658L24.139,22.658C23.495,24.203 21.97,25.29 20.193,25.29C17.835,25.29 15.92,23.376 15.92,21.018C15.92,18.66 17.835,16.745 20.193,16.745C21.998,16.745 23.543,17.867 24.169,19.451L52.227,19.451Z',
			} ),
		);
	}

	if ( 'wrench' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M16.68 9.77c-1.34 1.34-3.3 1.67-4.95.99l-5.41 6.52c-.99.99-2.59.99-3.58 0s-.99-2.59 0-3.57l6.52-5.42c-.68-1.65-.35-3.61.99-4.95 1.28-1.28 3.12-1.62 4.72-1.06l-2.89 2.89 2.82 2.82 2.86-2.87c.53 1.58.18 3.39-1.08 4.65zM3.81 16.21c.4.39 1.04.39 1.43 0 .4-.4.4-1.04 0-1.43-.39-.4-1.03-.4-1.43 0-.39.39-.39 1.03 0 1.43z" /></g></svg>;
	}

	if ( 'x' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z" /></g></svg>;
	}

	if ( 'ellipsis' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></g></svg>;
	}

	if ( 'insert' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z" /></g></svg>;
	}

	if ( 'refresh' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={ { fill: 'none' } } stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" /></svg>;
	}
}
