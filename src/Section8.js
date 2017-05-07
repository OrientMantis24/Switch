import React from 'react';

class Section8 extends React.Component{
	render() {
		return (
			<div className="section8">
				<div className="container-fluid">
					<div className="jumbotron">
						<div className="col-md-6"><h2>About</h2><hr/>
							This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh 
							vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Ut aliquam massa nisl quis neque. Suspendisse in orci enim. Aerean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ispum, nec sagittis sem nibj ir
							 elit. Dios sed odio sit amet nibh vulputate cursus.
						</div>
						<div className="col-md-6">
							<h2>Contact us</h2><hr/>
								10044 West 23th Street, Suite 721 New york NY 10010<br/>Email: Username@email.com<br/>Phone: +1 (0) 123 4567 890<br/>Fax: +1 (0) 321 4567 890

							<form>
								<div className="form-group">
									<input type="text" className="form-control" id="nameInput"placeholder="Your name..." required/>
								</div>

								<div className="form-group">
									<input type="email" className="form-control" placeholder="Your email..." required/>
								</div>

								<div className="form-group">
									<textarea className="form-control" rows="4" placeholder="Message" required id="messageInput"></textarea>
								</div>

								<div className="form-group">
									<button type="submit" className="btn btn-success submitButton">Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Section8;