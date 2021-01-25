import React from 'react';

const Button = ({ text, clicked }) => {

	return(
		<button onClick={ clicked }>
			<h3>{ text }</h3>
		</button>
	);
}

export default Button;