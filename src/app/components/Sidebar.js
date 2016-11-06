'use strict';

import React from 'react';

import SidebarSass from './_Sidebar.sass'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: this.props.defaultSearchStr
    }
  }

  onSearch() {
    this.props.setSearchStr(this.state.searchStr)
  }

  onHandleSearch(event) {
    this.setState({
      searchStr: event.target.value
    });
  }


  render () {
    return(
      <div className="sidebar">
        <h2>Sidebar</h2>
        <h3>Blog Entries</h3>
        {this.props.data.map(function(entry, idx) {
          return <p key={idx}><small>{entry.title}</small><br /><br /></p>
        })}
        <h3>Search</h3>
        <input type="text" defaultValue={this.props.defaultSearchStr} onChange={(event) => this.onHandleSearch(event) }></input>
        <button onClick={this.onSearch.bind(this)}>Search</button>
      </div>
    );
  }
}
