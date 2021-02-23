import React, { useEffect, useState } from 'react';
import './Dash.css';
import EditToolbar from 'Toolbar/Edit';

// components
// import Section from 'shared/Section';

// Data
import { ZCM, tempController, ZCMbackup } from 'logic/zcm';



const handleChange = (event, obj) => {
	console.log(event.target.dataset.zcm)
	console.log(obj)
	obj[event.target.dataset.zcm] = event.target.innerText;
}

const setEdit = (event) => {
	event.target.setAttribute('contenteditable', '');
}
const unsetEdit = (event) => {
	event.target.removeAttribute('contenteditable');
}

let entries = [];
let entry = [];
parseHTML(ZCM);
function parseHTML(obj, parent=[], arrayIndex=null ) {
	Object.entries(obj).forEach( (e,i) => {
		let hideEntry = ['exceptions', 'time', 'file'].find(v => e[0] === v)
		if ( hideEntry ) { return }
		if( typeof e[1] === 'object' ) {
			if ( !parent[0] ) {
				if ( entry[0] ) {
					entries.push(
						<div key={`entry${parent}.${i}`} className={ `Section-Group` }>
							{ entry }
						</div>
					);
					entry = [];
				}
				entry.push(

					<div className={ `Section-Heading` } key={`head${parent}.${i}`}>
						<h2>{ e[0] }</h2>
						
					</div>,
					<div className={ `Info-Row` } key={`info${parent}.${i}`}>
						<h3>Entry Key</h3>
						<h3>Swedish</h3>
						<h3>English</h3>
					</div>

				);
			} else if( !e[0].match(/[0-9]/g) ) {
				entry.push(
					<h2 className={ `small stripes Subheading` } key={`sub${parent}.${i}`}>{ e[0] }</h2>
				);
			} else {
				arrayIndex = e[0];
			}
			
			parseHTML(e[1], [...parent, e[0]], arrayIndex );
		} else {
			let engObj = ZCM;
			parent.forEach(e => {
				engObj = engObj[e];
				
			})
			
			entry.push(
				<div className={ `Entry-Group` } key={`entrys${parent}.${i}`}>
					<h3 key={`sub${parent}.${i}`} className={ `Entry-Heading` }>{ arrayIndex || e[0] }</h3>
					<h4 className={ `Input-Field` } data-zcm={ e[0] } onInput={ (ev)=>handleChange(ev, obj) } onMouseDown={ (ev)=>setEdit(ev) } onBlur={ (ev)=>unsetEdit(ev) }>{ e[1] }</h4>
					<h4 className={ `Input-Field` } data-zcm={ e[0] } onInput={ (ev)=>handleChange(ev, engObj) } onMouseDown={ (ev)=>setEdit(ev) } onBlur={ (ev)=>unsetEdit(ev) }>{ e[1] }</h4>
				</div>
			);
		}
		
	})
}

function redo(z) {
	entry = [];
	entries = [];
	parseHTML(z);
}

const Dash = () => {
	const [ state, setState ] = useState([]);
	
	const updatePage = () => {
		setState(entries);
	}
	console.log(state);

	useEffect(()=>{
		tempController.content = setState;
		tempController.redo = redo;
		entries = [];
		parseHTML(ZCM);
		updatePage();
		// console.log(entries);
	}, [])

	return(
		<section className="Page">
			<EditToolbar />
			<h1 className={ `Page-Heading` }>Text Content and Locale</h1>
			{ 
				entries
			}
		</section>
	);
}

export default Dash;