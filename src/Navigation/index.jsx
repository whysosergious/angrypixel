import React from 'react';
import{
	Link
} from "react-router-dom";
import './Navigation.css';


const Navigation = props => {

	return(
		<div className="Navigation">
			<Link className="Route-Button" to="/">
				<h3>Dash</h3>
			</Link>
			<Link className="Route-Button" to="/">
				<h3>Menues</h3>
			</Link>
			<Link className="Route-Button" to="/">
				<h3>Text & Language</h3>
			</Link>
			<Link className="Route-Button" to="/">
				<h3>Media</h3>
			</Link>
			<Link className="Route-Button" to="/" style={{ marginLeft: 'auto' }}>
				<h3>Logout</h3>
			</Link>
		</div>
	);
}

export default Navigation;
