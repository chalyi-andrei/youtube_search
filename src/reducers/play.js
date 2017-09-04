const initialState = [];

export default function play(state = initialState, action) {
  if (action.type === 'PLAY__VIDEO') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
