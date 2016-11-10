'use strict';

import React from 'react';

import ArticleSass from '../styles/_Content.sass';

export default class ArticleContent extends React.Component {
  render () {
    return(
      <div>
        {this.props.data.map(function(paragraph, idx) {
          return <p key={idx}>{paragraph}<br /><br /></p>
        })}
      </div>
    );
  };
}
