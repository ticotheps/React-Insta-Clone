import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import InstaFeed from './components/InstaFeed/InstaFeed';
import dummyData from './dummyData';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <InstaFeed posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

