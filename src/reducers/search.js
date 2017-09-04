import FIND__MOVIE from '../const/search';

const initialState = {
  list: [
    {
      videoId: 'https://www.youtube.com/embed/5dsGWM5XGdg',
      thumbnail: 'https://i.ytimg.com/vi/tntOCGkgt98/hqdefault.jpg'
    },
    {
      videoId: 'https://www.youtube.com/embed/tntOCGkgt98',
      thumbnail: 'https://i.ytimg.com/vi/5dsGWM5XGdg/hqdefault.jpg'
    }
  ]
};

export default function search(state = initialState, action) {
  if (action.type === FIND__MOVIE) {
    return {
      list: action.payload
    }
    /*
      it's not typical actions, becose we must orewrite all videos.
      Usually we use somthing like this:
        return [
          ...state,
          action.payload
        ]
    */
  }
  return state;
}
