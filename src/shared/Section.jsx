import React, { useEffect, useState, forceUpdate } from 'react';
import './Section.css';

// components
import Textfield from './Textfield';
import Button from './Button';

let key = 0;
let textFieldArray = [];



const Section = ({ props }) => {
	const [ state, setState ] = useState('regular');

	const handleClick = value => {
		textFieldArray.push([<Textfield key="1" />]);
		setState(value);
	}
	const test = () => {
		// return textFieldArray;
	}

	return(
		<div className="Section">
			<Button text={ 'Add field' } clicked={ ()=>handleClick( key++ ) } />
			{ textFieldArray.map( e => e ) }
		</div>
	);
}

export default Section;