import React from 'react';

class Section3 extends React.Component{
    render() {
        return (
        <div className="section3">
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="section3Header">OUR LATEST WORK<hr/><span>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</span><br />
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary active">Photography</button>
                        <button type="button" className="btn btn-primary">Design</button>
                        <button type="button" className="btn btn-primary">Print</button>
                    </div>
                    </div>
                    <div className="gallery">
                        <div className="row">
                            <div className="col"><img src="image1.png"/></div>
                            <div className="col"><img src="image2.png"/></div>
                            <div className="col"><img src="image3.png"/></div>
                            <div className="col"><img src="image4.png"/></div>
                            <div className="col"><img src="image5.png"/></div>
                            <div className="col"><img src="image6.png"/></div>
                            <div className="col"><img src="image7.png"/></div>
                            <div className="col"><img src="image8.png"/></div>
                            <div className="col"><img src="image9.png"/></div>
                            <div className="col"><img src="image10.png"/></div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success viewMoreWork">View more work<img src="arrowRight.png"/></button>
                </div>
            </div>
        </div>
        )
    }
}

export default Section3;