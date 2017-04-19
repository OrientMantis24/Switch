import React from 'react';
import Header from './Section1/Header';

class Section1 extends React.Component{
    render() {
        return (
        <div className="section1">
            <Header/>
            <div className="container-fluid">
                <div className="jumbotron">
                    <h1>Art is Eternal Happiness<br /><button type="button" className="btn btn-success">WORK WITH US</button></h1>
                    <button className="btn btn-primary scrollDown"><a>scroll down <img src="arrow.png"/></a></button>
                </div>
            </div>
        </div>
        )
    }
}

export default Section1;