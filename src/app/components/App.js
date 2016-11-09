"use strict";

import React from 'react';

import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Header from './Header';
import Main from './Main';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import ContactUs from './ContactUs';
import Sidebar from './Sidebar';
import Footer from './Footer';
import NotFound from './NotFound';

import AppSass from './App.sass';

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/portfolio' component={Portfolio}/>
          <Match pattern='/about' component={About}/>
          <Match pattern='/contact-us' component={ContactUs}/>
          <Miss component={NotFound}/>
          <Footer />
        </div>
      </Router>

    );
  }
}
