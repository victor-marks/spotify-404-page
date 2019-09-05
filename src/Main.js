import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-text">
          <h1 className="title">
            {/* <b>
              <span>404s and</span>
              <span>heartbreaks</span>
            </b> */}
            404s and heartbreaks
          </h1>
          {/* <h4>We couldn't find the page</h4>
          <h4>you were looking for. Maybe</h4>
          <h4>our FAQ or Community can</h4>
          <h4>help?</h4> */}
          <h4>
            We couldn't find the page you were looking for. Maybe our{' '}
            <Link className="link" to="/">
              {' '}
              FAQ{' '}
            </Link>{' '}
            or{' '}
            <Link className="link" to="/">
              {' '}
              Community{' '}
            </Link>{' '}
            can help?
          </h4>
          <span>
            <Link className="link" to="/">
              GO BACK
            </Link>
          </span>
        </div>
        <div className="main-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/record.svg"
            className="record"
            alt="record"
          />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/record-arm.svg"
            className="arm"
            alt="arm"
          />
        </div>
      </div>
    );
  }
}

export default Main;
