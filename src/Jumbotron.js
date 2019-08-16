import React, { Component } from 'react';
import './Jumbotron.css';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron-text">
          <h2>
            <b>
              <span>404s and</span>
              <span>heartbreaks</span>
            </b>
          </h2>
          <span>
            <p>We couldn't find the page</p>
          </span>
          <span>
            <p>you were looking for. Maybe</p>
          </span>
          <span>
            <p>our FAQ or Community can</p>
          </span>
          <span>
            <p>help?</p>
          </span>
          <span>
            <Link className="link" to="/">
              GO BACK
            </Link>
          </span>
        </div>
        <div className="jumbotron-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/record.svg"
            alt="disc"
          />
        </div>
      </div>
    );
  }
}

export default Jumbotron;
