import React, { Component } from 'react';
import './css/App.css';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Navbar />
          <div>
            <Welcome />
          </div>

          <div className="body-container">
            <About />
            <Projects />
            <Contact />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
