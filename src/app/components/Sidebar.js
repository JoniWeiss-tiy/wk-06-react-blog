'use strict';

import React from 'react';

import SidebarSass from './_Sidebar.sass'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: this.props.defaultSearchStr,
      monthList: this.props.monthList,
      selectedMonth: this.props.selectedMonth
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

  genMonthList() {
    return this.reduce(function(p, c)
    	{
    		if (p.indexOf(c) < 0) p.push(c);
    		return p;
    	}, []);
  }


  render () {
    return(
      <div className="sidebar">
        <h2>Sidebar</h2>

        <h3>Months</h3>
        {this.props.monthList.map(function(month, idx) {
          return  <div key={idx}>
                    <button>{month}</button><br/>
                  </div>
        })}

        <h3>Tags</h3>
        {this.props.tagList.map(function(tag, idx) {
          return  <div key={idx}>
                    <button>{tag}</button><br/>
                  </div>
        })}

        <h3>Search</h3>
        <input type="text" defaultValue={this.props.defaultSearchStr} onChange={(event) => this.onHandleSearch(event) }></input>
        <button onClick={this.onSearch.bind(this)}>Search</button>
      </div>
    );
  }
}
