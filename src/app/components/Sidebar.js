'use strict';

import React from 'react';

import SidebarSass from './_Sidebar.sass'

export default class Sidebar extends React.Component {
  render () {
    return(
      <div className="sidebar">
        <h2>Sidebar</h2>
        <h3>Blog Entries</h3>
        {this.props.data.map(function(entry, idx) {
          return <p key={idx}><small>{entry.title}</small><br /><br /></p>
        })}
      </div>
    );
  }
}
