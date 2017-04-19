import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import $ from 'jquery';
window.JQuery = $;
import bootstrap from 'bootstrap';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';
import slideInRight from 'animate.css';
import Section1 from './Section1';
import Section2 from './Section2';

const app = document.querySelector('#root');

class App extends React.Component {
  render() {
    return (
      <div>
        <Section1/>
        <Section2/>
      </div>
    );
  }
}


ReactDOM.render(<App />, app);