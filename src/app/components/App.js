"use strict";

import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import AppSass from './App.sass';

import blogData from './blog-data.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: blogData
    }
  }
  render () {
    return (
      <div className='container'>
        <Header />
        <div className="content">
          <Sidebar data={this.state.data} />
          <Main data={this.state.data} />
        </div>
        <Footer />
      </div>
    );
  }
}
