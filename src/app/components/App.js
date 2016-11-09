"use strict";

import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import AppSass from './App.sass';

import blogData from './blog-data.json';

// Generate a list array of unique month names
// from blogData entries.
const monthList = blogData.map(function(entry, idx) {
  return entry.posted[1];
})
.reduce(function(p, c)
{
  if (p.indexOf(c) < 0) p.push(c);
  return p;
}, []);

// Generate a list array of unique tag names
// from blogData entries.
const tagList = blogData.map(function(entry, idx) {
  return entry.tags;
})
.reduce((a, b) => a.concat(b))
.reduce(function(p, c)
{
  if (p.indexOf(c) < 0) p.push(c);
  return p;
}, [])
.sort();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: blogData,
      monthList: monthList,
      tagList: tagList,
      searchStr: '',
      searchType: '',
      searchValue: ''
    };
  }

  setBlogData(stype, sval) {
    let arr = [];
    if (stype === "month") {
      blogData.map(function(obj) {
        if (obj.posted.includes(sval)) {
          arr.push(obj);
        }
      })
    } else if (stype === "tag") {
      blogData.map(function(obj) {
        if (obj.tags.includes(sval)) {
          arr.push(obj);
        }
      })
    }
    return arr;
  }

  onSetSearch (stype, sval) {
    this.setState({
      searchType: stype,
      searchValue: sval,
      data: this.setBlogData(stype, sval)
    });
  }

  onSetSearchStr (str) {
    console.log("str: ", str);
    this.setState({
      searchStr: str
    });
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className="content">
          <Sidebar
            data={this.state.data}
            monthList={this.state.monthList}
            tagList={this.state.tagList}
            setSearchStr={this.onSetSearchStr.bind(this)}
            defaultSearchStr={this.state.searchStr}
            defaultSearchType={this.state.searchType}
            defaultSearchValue={this.state.searchValue}
            setSearch={this.onSetSearch.bind(this)} />
          <Main
            data={this.state.data}
            searchStr={this.state.searchStr}
            searchType={this.state.searchType}
            searchValue={this.state.searchValue}/>
        </div>
        <Footer />
      </div>
    );
  }
}
