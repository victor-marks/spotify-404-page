import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <ul>
            <li>
              <NavLink className="nav-item" to="/">
                <img
                  className="logo"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/spotify-logo.svg"
                  alt="logo"
                />
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
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faUserCircle} />
                  </li>
                  <li>Profile</li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faChevronDown} />
                  </li>
                </ul>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
