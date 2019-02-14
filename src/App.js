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
        <ScrollAnimation animateIn="fadeInDownBig" animateOnce duration={1}>
          <Welcome />
        </ScrollAnimation>
            <div className='divider'/>
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <About />
            <div className='divider'/>
          <Projects />
            <div className='divider'/>
          <Contact />
        </ScrollAnimation>
      </div>
    );
  }
}

export default App;
