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
        <span onClick={() => this.closeMenu()}>
          <Menu right
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <Scrollchor to="#welcome" className="menu-item">
              Main Page
            </Scrollchor>

            <Scrollchor to="#about" className="menu-item">
              About
            </Scrollchor>

            <Scrollchor to="#projects" className="nav-links">
              Projects
            </Scrollchor>

            <Scrollchor to="#contact" className="nav-links">
              Contact
            </Scrollchor>
          </Menu>
      </span>
        )
     }
  }

export default Navbar
