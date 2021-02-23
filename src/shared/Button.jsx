import React from 'react';

const Button = ({ text, clicked, altClass, imgSrc, imgDesc='' }) => {

	return(
		<button className={ altClass }
			onClick={ clicked }
		>
			{ imgSrc ? <img src={ imgSrc } alt={ imgDesc }></img> : '' }
			{ text ? <h3>{ text }</h3> : '' }
		</button>
	);
}

export default Button;