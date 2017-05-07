import React from 'react';
import Footer from './Footer';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Gallery extends React.Component{
	render() {
		return (
			<div className="gallery">
				<div className="row">
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
					<div className="col"><img src="bulb.jpg"/></div>
				</div>
			</div>
		)
	}
}

class Section3 extends React.Component{
	constructor() {
		super();
		this.state = {
			showFooter: false,
			buttonText: "View more work"
		}
	}
	onClick(e) {
		e.preventDefault();
		this.setState({showFooter: !this.state.showFooter})
		if(this.state.buttonText == "View more work")this.setState({buttonText: "Hide more work"})
		else this.setState({buttonText: "View more work"})
	}
	
	render() {
		return (
			<div className="section3">
				<div className="container-fluid">
					<div className="jumbotron">
		
						<div className="section3Header"><b>OUR LATEST WORK</b><hr/><span>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</span><br />
							<div className="btn-group">
								<button type="button" className="btn btn-primary active">Photography</button>
								<button type="button" className="btn btn-primary">Design</button>
								<button type="button" className="btn btn-primary">Print</button>
							</div>
						</div>
						<Gallery/>
						{this.state.showFooter && < Gallery />}
						<button onClick={this.onClick.bind(this)} type="button" className="btn btn-success viewMoreWork">{this.state.buttonText}<img src="arrowRightButton.png"/></button>
					</div>
				</div>
			</div>
		)
	}
}

export default Section3;