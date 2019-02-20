import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import InstaFeed from './components/InstaFeed/InstaFeed';
import dummyData from './dummyData';
import PropTypes from 'prop-types';
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

App.propTypes = {
  dummyData: PropTypes.arrayOf(
      PropTypes.shape({
          username: PropTypes.string.isRequired,
          thumnailUrl: PropTypes.string,
          likes: PropTypes.number,
          timestamp: PropTypes.string,
          comments: PropTypes.arrayOf(
              PropTypes.shape({
                  username: PropTypes.string.isRequired,
                  text: PropTypes.string
              })
          )
      })
  )
}

export default App;

