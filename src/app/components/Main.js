'use strict';

import React from 'react';

import ArticleContent from './ArticleContent';

import MainSass from './_Main.sass';

export default class Main extends React.Component {
  render () {
    return(
      <div className="main">
        <h2>Main section</h2>
        <h3 className="entry-title">
          {this.props.data[0].title}
        </h3>
        <p className="entry-article">
          {this.props.data[0].posted.month} {this.props.data[0].posted.day}, {this.props.data[0].posted.year}<br />
        </p>
        <ArticleContent data={this.props.data[0].article} />

        <h3 className="entry-title">
          {this.props.data[1].title}
        </h3>
        <p className="entry-article">
          {this.props.data[1].posted.month} {this.props.data[1].posted.day}, {this.props.data[1].posted.year}<br />
        </p>
        <ArticleContent data={this.props.data[1].article} />

        <h3 className="entry-title">
          {this.props.data[2].title}
        </h3>
        <p className="entry-article">
          {this.props.data[2].posted.month} {this.props.data[2].posted.day}, {this.props.data[2].posted.year}<br />
        </p>
        <ArticleContent data={this.props.data[2].article} />
      </div>
    );
  }
}
