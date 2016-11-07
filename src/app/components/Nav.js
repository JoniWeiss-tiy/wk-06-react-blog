"use strict";

import React from 'react';

import NavSass from './_Nav.sass';

export default class App extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <div id="logo">
          <img src="app/images/purple-lotus-flower.png" alt="logo" />
        </div>
        <ul>
          <li><a href="index.html" className="selected">Home</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="about.html" >About</a></li>
          <li><a href="contact.html" >Contact</a></li>
        </ul>
      </nav>
    )
  }
}
