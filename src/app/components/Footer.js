'use strict';

import React from 'react';

import FooterSass from '../styles/_Footer.sass';

export default class Footer extends React.Component {
  render () {
    return(
      <div className="footer">
        <h3>Joni Weiss --- <a href="email:me@joniweiss.com">me@joniweiss.com</a> --- <a href="//github.com/JoniWeiss">GitHub</a></h3>
      </div>
    );
  }
}
