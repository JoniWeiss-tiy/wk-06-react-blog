'use strict';

import React from 'react';

import ArticleContent from './ArticleContent';

import MainSass from './_Main.sass';

export default class Main extends React.Component {
  render () {
    return(
      <div className="main">
        <h2>Main section</h2>
        {this.props.data.map((entry, idx) => {
          console.log(entry.title);
          return (<div key={idx}>
                    <h3 className="entry-title">
                      {entry.title}
                    </h3>
                    <p className="entry-article">
                      {entry.posted.month} {entry.posted.day}, {entry.posted.year}<br />
                    </p>
                    <ArticleContent data={entry.article} />
                  </div>)
        })}
      </div>
    );
  }
}
