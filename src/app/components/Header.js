'use strict';

import React from 'react';

import headerSass from './_Header.sass';

import Nav from './Nav.js';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <Nav />
        <div className="div--img">
          <img className="logo" src="app/images/purple-lotus-flower.png" alt="logo" />
        </div>
        <h1 className="header">Bloggy McBlog-Face</h1>
      </header>
    );
  }
}
