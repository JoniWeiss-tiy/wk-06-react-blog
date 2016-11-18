'use strict';

let APP_WIDTH=self.innerWidth;

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import App from './components/App';

const app = document.getElementById('app');

render(<App />, app);
