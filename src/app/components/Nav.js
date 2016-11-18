"use strict";

import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

export default class App extends React.Component {

  render() {
    // Navigation menu responsiveness
    // for small screens
    $(document).ready(function() {
      $('.menu').click(function(){
        $('.menu-items').slideDown(400, function(){
          $(this).click(function() {
            $('.menu-items').slideUp(400)
          });
        });
      });
    });
    $(window).resize(function() {
      var windowsize = $(window).width();
      if (windowsize > 480) {
        $(".menu-items").css("display","inline-block");
      } else if (windowsize <= 480) {
        $(".menu-items").css("display","none");
      }
    });﻿
    return (
        <nav className="nav-menu">
          <div id="logo">
            <span className="menu"><i className="fa fa-bars" ></i></span>
            <Link to='/'>
              <img src="app/images/purple-lotus-flower.png" alt="logo" />
            </Link>
          </div>
          <div className="menu-items">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact-us'>Contact Us</Link></li>
            </ul>
          </div>
      </nav>
    )
  }
}
