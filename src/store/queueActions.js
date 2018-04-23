
export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE'
  }
}

export function startAlbumFromSong(album, song) {
  return {
    type: 'START_ALBUM_FROM_SONG',
    album: album,
    song: song
  }
}

export function nextSong(queue) {
  return {
    type: 'NEXT_SONG',
    active: queue.active,
    previouslyPlayed: queue.previouslyPlayed,
    upNext: queue.upNext
  }
}

export function previousSong(queue) {
  return {
    type: 'PREVIOUS_SONG',
    active: queue.active,
    previouslyPlayed: queue.previouslyPlayed,
    upNext: queue.upNext
  }
}
