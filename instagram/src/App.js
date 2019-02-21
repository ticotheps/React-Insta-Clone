import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import InstaFeed from './components/InstaFeed/InstaFeed';
import dummyData from './dummyData';
import PropTypes from 'prop-types';
import './App.css';


class App extends Component {
  constructor() {
    console.log("constructor is running");
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log("CDM is running!");

    this.setState({ 
      posts: dummyData
    });

    console.log(dummyData);
    console.log(this.state.posts);
  }

  render() {
    console.log("render fires");
    console.log(this.state.posts);
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

