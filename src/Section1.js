import React from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';

class Section1 extends React.Component{
	constructor() {
		super();
}
render() {
		return (
			<div className="section1">
				<div className="container-fluid">
					<div className="jumbotron">
						<div className="header">
						<h1>Art is Eternal Happiness<br />
							<button type="button" className="btn btn-success">WORK WITH US</button>
						</h1>
						</div>
						<a type="button" className="btn btn-primary scrollDown"><img src="arrowDown.png"/></a>
					</div>
				</div>
				<div ref={(el) => { this.End = el; }}></div>
			</div>
		)
	}
}

export default Section1;