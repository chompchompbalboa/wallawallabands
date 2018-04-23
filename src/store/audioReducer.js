const initialState = {
  playing: false,
  played: 0.0,
  playedSeconds: 0.0,
  seekTo: 0.0
}

export default function reducers(state, action) {

  switch (action.type) {
    case 'SET_INITIAL_STATE': {
      return initialState
    }

    case 'PLAY_AUDIO': {
      return Object.assign({}, state, {
        playing: true,
        seekTo: 0.0
    })}

    case 'PAUSE_AUDIO': {
      return Object.assign({}, state, {
        playing: false,
        seekTo: 0.0
    })}

    case 'UPDATE_PLAYED': {
      return Object.assign({}, state, {
        played: action.played,
        playedSeconds: action.playedSeconds,
        seekTo: 0.0
    })}

    case 'SEEK_TO': {
      return Object.assign({}, state, {
        seekTo: action.seekTo
    })}

    default:
    return state
  }
}
