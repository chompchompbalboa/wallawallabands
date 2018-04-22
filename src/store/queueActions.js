
export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE'
  }
}

export function startAlbumFromSong(album, song) {
  alert('startAlbumFromSong')
  return {
    type: 'START_ALBUM_FROM_SONG',
    album: album,
    song: song
  }
}

export function nextSong(queue) {
  alert('nextSong')
  return {
    type: 'NEXT_SONG',
    active: queue.active,
    previouslyPlayed: queue.previouslyPlayed,
    upNext: queue.upNext
  }
}

export function previousSong(queue) {
  alert('previousSong')
  return {
    type: 'PREVIOUS_SONG',
    active: queue.active,
    previouslyPlayed: queue.previouslyPlayed,
    upNext: queue.upNext
  }
}
