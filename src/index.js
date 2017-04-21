import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import $ from 'jquery';
window.JQuery = $;
import bootstrap from 'bootstrap';
import slideInRight from 'animate.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const app = document.querySelector('#root');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
    );
  }
}


ReactDOM.render(<App />, app);