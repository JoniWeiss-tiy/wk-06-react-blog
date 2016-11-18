'use strict';

import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthList: this.props.monthList,
      searchStr: this.props.defaultSearchStr,
      searchType: this.props.defaultSearchType,
      searchValue: this.props.defaultSearchValue
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

  onClickSelect(event) {
    this.setState({
      searchType: event.target.name,
      searchValue: event.target.id
    });
    this.props.setSearch(event.target.name, event.target.id)
  }

  render () {
    console.log("this.props.monthList: ", this.props.monthList);
    console.log("this.props.tagList: ", this.props.tagList);
    return(
      <div className="sidebar">
        <h2>Sidebar</h2>
        {/* <h3>Search</h3>
        <input type="text"
          defaultValue={this.props.defaultSearchStr} onChange={(event) => this.onHandleSearch(event) }>
        </input>
        <button
          onClick={this.onSearch.bind(this)}>
          Search
        </button>
      <br /><br /><hr /> */}

        <h3>Months</h3>
        {this.props.monthList.map((month, idx) => {
          return  <div key={idx}>
                    <button
                      id={month}
                      name="month"
                      onClick={this.onClickSelect.bind(this)}>{month}</button><br/>
                  </div>
        })}

        <h3>Tags</h3>
        {this.props.tagList.map((tag, idx) => {
          return  <div key={idx}>
                    <button
                      id={tag}
                      name="tag"
                      onClick={this.onClickSelect.bind(this)}>{tag}</button><br/>
                  </div>
        })}
      </div>
    );
  }
}
