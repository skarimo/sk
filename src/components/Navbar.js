import React, { Component} from 'react'
import '../css/Navbar.css';

import Scrollchor from 'react-scrollchor';
import { slide as Menu } from "react-burger-menu";


class Navbar extends Component {
  constructor () {
    super()
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
      return (
        <Menu right
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Scrollchor to="#welcome" className="menu-item">
            <span onClick={() => this.closeMenu()}>Main Page</span>
          </Scrollchor>
          <Scrollchor to="#about" className="menu-item">
            <span onClick={() => this.closeMenu()}>About</span>
          </Scrollchor>
          <Scrollchor to="#projects" className="nav-links">
            <span onClick={() => this.closeMenu()}>Projects</span>
          </Scrollchor>
          <Scrollchor to="#contact" className="nav-links">
            <span onClick={() => this.closeMenu()}>Contact</span>
          </Scrollchor>
        </Menu>
        )
     }
  }

export default Navbar
