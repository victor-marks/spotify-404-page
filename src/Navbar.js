import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import logo from './images/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <ul>
            <li>
              <NavLink className="nav-item" to="/">
                Spotify
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li>
              <NavLink className="nav-item" to="/">
                Premium
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/">
                Help
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/">
                Download
              </NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink className="nav-item" to="/">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                Profile
                <FontAwesomeIcon className="icon" icon={faChevronDown} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
