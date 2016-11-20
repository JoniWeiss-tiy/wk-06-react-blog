import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

import * as firebase from 'firebase';

import _ from 'lodash';

let blogData = [],
    monthArr = [],
    tagArr = [];

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: blogData,
      monthArr: [],
      tagArr: [],
      searchStr: '',
      searchType: '',
      searchValue: ''
    };
  }

  componentDidMount (){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyChSy1WLxdHeYsroAvYElXsOYvkLyEufZE",
      authDomain: "joni-weiss-blog.firebaseapp.com",
      databaseURL: "https://joni-weiss-blog.firebaseio.com",
      storageBucket: "joni-weiss-blog.appspot.com",
      messagingSenderId: "1015106403880"
    };
    firebase.initializeApp(config);

    const fbObjRef = firebase.database().ref().child('blogData');

    // Add DB Objects to
    fbObjRef.on("child_added", function (snapshot) {
      const snapVal = snapshot.val();
      blogData.push(snapVal);
      monthArr.push(snapVal.posted[1]);
      snapVal.tags.forEach(function(tag) {
        tagArr.push(tag);
      });
    })

    this.setState({
      data: blogData,
      monthArr: monthArr,
      tagArr: tagArr
    });
  }

  componentWillUnmount () {
    this.fbObjRef.off();
  }

  setBlogData(stype, sval) {
    let arr = [];
    blogData.map(function(obj) {
      if (obj.stype.includes(sval)) {
        arr.push(obj);
      }
    })
    return arr;
  }

  onSetSearch (stype, sval) {
    this.setState({
      searchType: stype,
      searchValue: sval,
      data: this.setBlogData(stype, sval)
    });
  }

  onSetSearchStr (str) {
    this.setState({
      searchStr: str
    });
  }

  render() {
    return (
      <div className="content">
        <div id="htmlObject"></div>
        <p>{this.state.monthArr}</p>
        <Sidebar
          data={this.state.data}
          monthArr={this.state.monthArr}
          tagArr={this.state.tagArr}
          setSearchStr={this.onSetSearchStr.bind(this)}
          defaultSearchStr={this.state.searchStr}
          defaultSearchType={this.state.searchType}
          defaultSearchValue={this.state.searchValue}
          setSearch={this.onSetSearch.bind(this)} />
        <Content
          data={this.state.data}
          searchStr={this.state.searchStr}
          searchType={this.state.searchType}
          searchValue={this.state.searchValue}/>
      </div>
    );
  }
}
