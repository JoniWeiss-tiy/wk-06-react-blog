"use strict";

import React from 'react';
import { Link } from 'react-router';

import NavSass from './_Nav.sass';

export default class App extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <div id="logo">
          <img src="app/images/purple-lotus-flower.png" alt="logo" />
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
      </nav>
    )
  }
}
