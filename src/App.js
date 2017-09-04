import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from './components/searchItem/searchItem';
import MovieList from './components/movieList/movieList';
import logo from './logo.jpg';
import './App.css';
import FIND__MOVIE from './const/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Youtube search</h2>
          <SearchItem store={ this.props.testStore.search} getMovie={this.props.findMovie}/>
        </div>
        <MovieList store={this.props.testStore.search}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testStore: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    findMovie: (video) => {
      dispatch({'type': FIND__MOVIE, payload: video});
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
