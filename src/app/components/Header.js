'use strict';

import React from 'react';

import headerSass from '../styles/_Header.sass';

import Nav from './Nav.js';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <Nav />
        <h1 className="header">Bloggy McBlog-Face</h1>
      </header>
    );
  }
}
