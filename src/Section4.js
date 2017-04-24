import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, Caption, Item} from 'react-bootstrap';

class Section4 extends React.Component{
    render() {
        return (
        <div className="section4">
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="section4Header">OUR LATEST WORK<hr/><span>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</span>
  <Carousel>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
                    <button type="button" className="btn btn-success viewMoreWork">View more work<img src="arrowRight.png"/></button></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Section4;