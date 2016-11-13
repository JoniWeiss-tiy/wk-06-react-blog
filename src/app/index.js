'use strict';

let APP_WIDTH=self.innerWidth;

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import App from './components/App';

const app = document.getElementById('app');

render(<App />, app);

// Navigation menu responsiveness
// for small screens
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#drop-menu-content'),
    $menulink = $('.drop-menu');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});
