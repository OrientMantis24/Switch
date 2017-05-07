import React from 'react';

class Section1 extends React.Component{
	render() {
		return (
			<div className="section1">
				<div className="container-fluid">
					<div className="jumbotron">
						<h1>Art is Eternal Happiness<br />
							<button type="button" className="btn btn-success">WORK WITH US</button>
							<button className="btn btn-primary scrollDown"><a>scroll down <img src="arrow.png"/></a></button>
						</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default Section1;