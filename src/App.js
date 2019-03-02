import React, { Component } from 'react';
import './css/App.css';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

import ScrollAnimation from 'react-animate-on-scroll';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ScrollAnimation animateIn="fadeInDownBig" duration={1}>
          <Welcome />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <About />
          <Projects />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
          <Contact />
        </ScrollAnimation>
      </div>
    );
  }
}

export default App;
