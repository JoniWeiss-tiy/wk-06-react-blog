'use strict';

import React from 'react';

import ArticleContent from './ArticleContent';

export default class Content extends React.Component {
  render () {
    return(
      <div className="blog-content">
        <h2>Content section</h2>
        {this.props.data.map((entry, idx) => {
          return (<div key={idx}>
                    <h3 className="entry-title">
                      {entry.title}<br /><br />
                    </h3>
                    <p className="entry-article">
                      {entry.posted.map((val, idx) => {
                        return <span key={idx}>{val} </span>
                        })}<br /><br />
                    </p>
                    <ArticleContent data={entry.article} />
                    <p>Tags: {entry.tags.map((tag,idx) => {
                        return <span key={idx}>[{tag}] </span>
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
