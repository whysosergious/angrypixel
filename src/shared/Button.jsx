import React from 'react';

const Button = ({ text, clicked, altClass }) => {

	return(
		<button className={ altClass }
			onClick={ clicked }>
			<h3>{ text }</h3>
		</button>
	);
}

export default Button;