import { render } from '@testing-library/react';
import React from 'react';
import './Dash.css';

// components
import Section from 'shared/Section';

const Dash = props => {

	return(
		<section className="Dashboard-Page">
			<Section />
		</section>
	);
}

export default Dash;