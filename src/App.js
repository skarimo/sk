import React, { Component } from 'react';
import './css/App.css';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

// import { Animated } from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';


class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Navbar />
          <div>
            <ScrollAnimation animateIn="slideInUp" duration='3'>
              <Welcome />
            </ScrollAnimation>
          </div>

          <div className="body-container">
            <ScrollAnimation animateIn="fadeIn" duration='1.5'>
              <About />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration='1.5'>
              <Projects />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration='1.5'>
              <Contact />
            </ScrollAnimation>

          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
