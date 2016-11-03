'use strict';

import React from 'react';

import headerSass from './Header.sass';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <div className="div--img">
          <img className="logo" src="app/images/purple-lotus-flower.png" alt="logo" />
        </div>
        <h1 className="header">Bloggy McBlog-Face</h1>
      </header>
    );
  }
}
