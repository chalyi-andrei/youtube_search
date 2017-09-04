import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import btn from '../../play.png';

export default class MovieList extends Component {
  render() {
    const list = this.props.store.list;

    return (
        <div className='video-wrap'>
          {
            list.map(function(item, index) {
              const sublink = list[index]['videoId'].replace(/^.+\/embed\//,'');

              return (
                <div className='video' key={index}>
                  <Link to={`/movie/${sublink}`}>
                    <img width='560' height='325' src={item.thumbnail}/>
                      <div className='btn-play'>
                        <img height='90' src={btn}/>
                      </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
    )
  }
}
