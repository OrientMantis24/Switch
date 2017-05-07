import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import $ from 'jquery';
window.JQuery = $;
import bootstrap from 'bootstrap';
import slideInRight from 'animate.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Footer from './Footer';

const app = document.querySelector('#root');

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Section1/>
				<Section2/>
				<Section3/>
				<Section4/>
				<Section5/>
				<Section6/>
				<Section7/>
				<Section8/>
				<Footer/>
			</div>
		);
	}
}


ReactDOM.render(<App />, app);