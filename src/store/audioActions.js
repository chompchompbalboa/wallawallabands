
export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE'
  }
}

export function playAudio() {
  return {
    type: 'PLAY_AUDIO'
  }
}

export function pauseAudio() {
  return {
    type: 'PAUSE_AUDIO'
  }
}

export function updatePlayed(data) {
  return {
    type: 'UPDATE_PLAYED',
    played: data.played
  }
}

export function seekTo(percentage) {
  alert('seekTo')
  return {
    type: 'SEEK_TO',
    seekTo: percentage
  }
}
