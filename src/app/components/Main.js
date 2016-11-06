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
          return (<div key={idx}>
                    <h3 className="entry-title">
                      {entry.title}<br /><br />
                    </h3>
                    <p className="entry-article">
                      {entry.posted.month} {entry.posted.day}, {entry.posted.year}<br /><br />
                    </p>
                    <ArticleContent data={entry.article} />
                    <p>Tags: {entry.tags.map((tag,idx) => {
                        return <button key={idx}>{tag}</button>
                      })}</p>
                    <p>&nbsp;</p>
                    <hr />
                    <p>&nbsp;</p>
                  </div>)
        })}
      </div>
    );
  }
}



// {entry.tags.map(function(tag, idx) {
//   return <p key={idx}>{tag}</p>
// })}
