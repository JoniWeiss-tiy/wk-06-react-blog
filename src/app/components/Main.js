'use strict';

import React from 'react';

import blogData from './blog-data.json';
import MainSass from './Main.sass';

export default class Main extends React.Component {
  render () {
    return(
        <div className="main">
        <h2>Main section</h2>
        <h3 className="entry-title">
          {blogData[0].title}
        </h3>
        <p className="entry-article">
          {blogData[0].posted.month} {blogData[0].posted.day}, {blogData[0].posted.year}<br />
          {blogData[0].article}
        </p>

        <h3 className="entry-title">
          {blogData[1].title}
        </h3>
        <p className="entry-article">
          {blogData[1].posted.month} {blogData[1].posted.day}, {blogData[1].posted.year}<br />
          {blogData[1].article}
        </p>

        <h3 className="entry-title">
          {blogData[2].title}
        </h3>
        <p className="entry-article">
          {blogData[2].posted.month} {blogData[2].posted.day}, {blogData[2].posted.year}<br />
          {blogData[2].article}
        </p>
      </div>
    );
  }
}
