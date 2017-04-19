import React from 'react';

class Section2 extends React.Component{
    render() {
        return (
        <div className="section2">
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="section2Header">WHAT  WE  DO<hr/><span>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</span></div>
                    <div className="works"><div className="worksBackground"><img src="camera.png"/></div><h2>Lorem Ipsum</h2><p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh ver velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p><button type="button" className="btn btn-success">Learn more</button></div>
                    <div className="works"><div className="worksBackground"><img src="pallet.png"/></div><h2>Lorem Ipsum</h2><p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh ver velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p><button type="button" className="btn btn-success">Learn more</button></div>
                    <div className="works"><div className="worksBackground"><img src="suitcase.png"/></div><h2>Lorem Ipsum</h2><p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh ver velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p><button type="button" className="btn btn-success">Learn more</button></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Section2;