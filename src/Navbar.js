import React, { Component } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import logo from './images/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>Spotify</li>
        </ul>

        <ul>
          <li>Premium</li>
          <li>Help</li>
          <li>Download | </li>
          <li>
            <FontAwesomeIcon icon={faUserCircle} />
            Profile
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
