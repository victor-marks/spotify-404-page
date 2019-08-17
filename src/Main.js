import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-text">
          <h2>
            <b>
              <span>404s and</span>
              <span>heartbreaks</span>
            </b>
          </h2>
          <h3>We couldn't find the page</h3>
          <h3>you were looking for. Maybe</h3>
          <h3>our FAQ or Community can</h3>
          <h3>help?</h3>
          <span>
            <Link className="link" to="/">
              GO BACK
            </Link>
          </span>
        </div>
        <div className="main-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/record.svg"
            alt="disc"
          />
        </div>
      </div>
    );
  }
}

export default Main;
