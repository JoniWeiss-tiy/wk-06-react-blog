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
  return entry.posted.month;
})
.reduce(function(p, c)
{
  if (p.indexOf(c) < 0) p.push(c);
  return p;
}, []);

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
      searchStr: '',
      monthList: monthList,
      tagList: tagList,
      selectedMonth: ''
    };
  }

  onSetSearchStr (str) {
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
            defaultSearchStr={this.state.searchStr} />
          <Main
            data={this.state.data}
            selectedMonth={this.state.selectedMonth}
            searchStr={this.state.searchStr}/>
        </div>
        <Footer />
      </div>
    );
  }
}
