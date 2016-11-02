"use strict";

import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import AppLayout from './AppLayout.sass';


export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className="content">
          <Sidebar></Sidebar>
          <Main></Main>
        </div>
        <Footer />
      </div>
    );
  }
}
