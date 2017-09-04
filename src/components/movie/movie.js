import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';
import '../../App.css';

class Movie extends Component {
  render() {
    const pathName = this.props.testStore.router.location.pathname;
    const videoId = pathName.replace(/^.+\//,'');
    const fullId = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Youtube search</h2>
          <Link to='/' className='link'> HOME </Link>
        </div>
        <div className='video-wrap'>
        <iframe className="iframe"
          src={fullId}
          width="700"
          height="445">
        </iframe>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
  })
)(Movie)
