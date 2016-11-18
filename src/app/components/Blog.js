import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

import * as firebase from 'firebase';

let blogData = [];
let monthList = [];
let tagList = [];

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: blogData,
      monthList: monthList,
      tagList: tagList,
      searchStr: '',
      searchType: '',
      searchValue: ''
    };
  }

  componentWillMount (){
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


    fbObjRef.on("child_added", function (snapshot) {
      blogData.push(snapshot.val());
      monthList.push(snapshot.val().posted[1]);
      tagList.push(snapshot.val().tags);
    })
    console.log("blogData: ", blogData);
    console.log("monthList: ", monthList);
    console.log("tagList: ", tagList);

    this.setState({
      data: blogData,
      monthList: monthList,
      tagList: tagList
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
    console.log("str: ", str);
    this.setState({
      searchStr: str
    });
  }


  render() {
    return (
      <div className="content">
        <div id="htmlObject"></div>
        <Sidebar
          data={this.state.data}
          monthList={this.state.monthList}
          tagList={this.state.tagList}
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
