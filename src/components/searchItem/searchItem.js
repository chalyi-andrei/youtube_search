import React, { Component } from 'react';
import '../../App.css';

export default class SearchItem extends Component {
  search(e) {
    e.preventDefault();

    const countVideo = 10;
    const searchInput = this.SearchInput;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id
      &q=${this.SearchInput.value}&maxResults=${countVideo}&type=video&key=AIzaSyACA9RHCcBxM5hSw55A6mfNiBXF8OcqiLU`;

    fetch(url)
        .then(response => response.text())
        .then(contents => {
          const object = JSON.parse(contents);
          const getMovie = this.props.getMovie;
          const videoArray = [];

          object.items.forEach(function(item, index) {
           const videoId = `https://www.youtube.com/embed/${item.id.videoId}`;
           const thumbnail = item.snippet.thumbnails.high.url;

           videoArray.push({videoId, thumbnail});
          });

          getMovie(videoArray);
          searchInput.value = '';
        });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.search(e)}>
          <input type='text' className='search-input' ref={(input) => { this.SearchInput = input }}/>
          <button className='search-btn'>search</button>
        </form>
      </div>
    )
  }
}
