import React from 'react';

class Section5 extends React.Component{
	render() {
		return (
			<div className="section5">
				<div className="container-fluid">
					<div className="jumbotron">
						<div className="section5Header"><b>OUR HAPPY CLIENTS</b><hr/><span>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</span></div>
						<div className="gallery">
							<div className="row">
								<div className="col"><img src="google.png"/></div>
								<div className="col"><img src="yahoo.png"/></div>
								<div className="col"><img src="microsoft.png"/></div>
								<div className="col"><img src="intel.png"/></div>
								<div className="col"><img src="qualcomm.png"/></div>
								<div className="col"><img src="cisco.png"/></div>
								<div className="col"><img src="apple.png"/></div>
								<div className="col"><img src="asus.png"/></div>
							</div>
						</div>
						<button type="button" className="btn btn-success">See all clients <img src="arrowRightButton.png"/></button>
					</div>
				</div>
			</div>
		)
	}
}

export default Section5;