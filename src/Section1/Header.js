import React from 'react';

class Header extends React.Component {
    render() {
        return (
           <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span> 
      </button>
      <div className="logo">Switch</div>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">What we do?</a></li>
        <li><a href="#">Testimonial</a></li> 
        <li><a href="#">Contact Us</a></li> 
      </ul>
    
      <ul className="nav navbar-right">
        <div className="search">
          Search... <img alt="" src="magnifying-glass.png"/>
        </div>
      </ul>
    </div>
  </div>
  </nav>
        )
    }
}

export default Header;