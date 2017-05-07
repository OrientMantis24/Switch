import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, Caption, Item, Glyphicon} from 'react-bootstrap';
import  Slider from 'react-slick';

class Section4 extends React.Component{
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 900,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3500
		};

		return (
			<div className="section4">
				<div className="container-fluid">
					<div className="jumbotron">
						<div className="section4Header"><b>TESTIMONIALS</b><hr/><span>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</span>
 
							<Slider {...settings}>
								<div className="slider">
									<p>"Awalnya saya tidak menderita penyakit apapun, namun setelah saya tibak berobat ke klinik tongfang, aya dinyatakan tidak menderita penyakit apapun!"</p>
									<div className = "client">
										<img src="Herp.png"/>
										<h4><b>Mr. Herp </b> <br />CEO of Meme.Inc</h4>
									</div>
								</div>
								<div className="slider">
									<p>"Awalnya saya tidak menderita penyakit apapun, namun setelah saya tibak berobat ke klinik tongfang, aya dinyatakan tidak menderita penyakit apapun!"</p>
									<div className = "client">
										<img src="Herp.png"/>
										<h4><b>Mr. Herp </b> <br />CEO of Meme.Inc</h4>
									</div>
								</div>
								<div className="slider">
									<p>"Awalnya saya tidak menderita penyakit apapun, namun setelah saya tibak berobat ke klinik tongfang, aya dinyatakan tidak menderita penyakit apapun!"</p>
									<div className = "client">
										<img src="Herp.png"/>
										<h4><b>Mr. Herp </b> <br />CEO of Meme.Inc</h4>
									</div>
								</div>
								<div className="slider">
									<p>"Awalnya saya tidak menderita penyakit apapun, namun setelah saya tibak berobat ke klinik tongfang, aya dinyatakan tidak menderita penyakit apapun!"</p>
									<div className = "client">
										<img src="Herp.png"/>
										<h4><b>Mr. Herp </b> <br />CEO of Meme.Inc</h4>
									</div>
								</div>
								<div className="slider">
									<p>"Awalnya saya tidak menderita penyakit apapun, namun setelah saya tibak berobat ke klinik tongfang, aya dinyatakan tidak menderita penyakit apapun!"</p>
									<div className = "client">
										<img src="Herp.png"/>
										<h4><b>Mr. Herp </b> <br />CEO of Meme.Inc</h4>
									</div>
								</div>
								<div className="slider">
									<p>"Awalnya saya tidak menderita penyakit apapun, namun setelah saya tibak berobat ke klinik tongfang, aya dinyatakan tidak menderita penyakit apapun!"</p>
									<div className = "client">
										<img src="Herp.png"/>
										<h4><b>Mr. Herp </b> <br />CEO of Meme.Inc</h4>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Section4;