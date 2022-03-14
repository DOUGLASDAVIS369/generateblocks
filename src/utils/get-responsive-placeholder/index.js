export default function getResponsivePlaceholder( name, attributes, device, fallback ) {
	// Make sure this is the desktop value.
	name = name.replace( 'Tablet', '' ).replace( 'Mobile', '' );

	let responsivePlaceholder = attributes[ name ];

	if ( 'Mobile' === device && attributes[ name + 'Tablet' ] ) {
		responsivePlaceholder = attributes[ name + 'Tablet' ];
	}

	if ( '' === responsivePlaceholder || false === responsivePlaceholder ) {
		responsivePlaceholder = fallback;
	}

	return responsivePlaceholder;
}
