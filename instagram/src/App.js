import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import InstaFeed from './components/InstaFeed/InstaFeed';
import dummyData from './dummyData';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <InstaFeed />
        <PostContainer />
      </div>
    );
  }
}

export default App;
