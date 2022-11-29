import React from 'react';

function Image(props) {
	console.log(props.alternativeText)
	return <img src={ props.source } alt={ props.alternativeText } />;

}

export default Image;