'use strict';

import headerSass from './Header.sass';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <div className="div--img">
          <img className="logo" src="./images/purple-lotus-flower.png" alt="logo" />
        </div>
        <h1 className="header">HandMade Pixels</h1>
      </header>
    );
  }
}
