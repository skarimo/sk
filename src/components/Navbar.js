import React, { Component} from 'react'
import '../css/Navbar.css';

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
          <a onClick={() => this.closeMenu()} href="#welcome" className="menu-item">Main Page</a>
          <a onClick={() => this.closeMenu()} href="#about" className="menu-item">About</a>
          <a onClick={() => this.closeMenu()} href="#projects" className="nav-links">Projects</a>
          <a onClick={() => this.closeMenu()} href="#contact" className="nav-links">Contact</a>
        </Menu>
        )
     }
  }

export default Navbar
