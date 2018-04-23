import _ from 'lodash'

const initialState = {
  active: {},
  previouslyPlayed: [],
  upNext: [],
  album: {},
  hasStartedPlayingSong: false
}

export default function reducers(state, action) {

  switch (action.type) {

    case 'SET_INITIAL_STATE': {
      return initialState
    }

    case 'START_ALBUM_FROM_SONG': {
      const {
        album,
        song
      } = action
      const songIndex = _.findIndex(album.songs, {id: song.id})
      const upNext = _.drop(album.songs, songIndex + 1)
      return Object.assign({}, state, {
        active: song,
        upNext: upNext,
        album: album,
        hasStartedPlayingSong: true
      })
    }


    case 'NEXT_SONG': {
      const {
        active,
        previouslyPlayed,
        upNext
      } = action
      let newActive = active
      let newPreviouslyPlayed = previouslyPlayed
      let newUpNext = upNext
      if(upNext.length !== 0) {
        // Move active to previouslyPlayed
        previouslyPlayed.unshift(active)
        newPreviouslyPlayed = previouslyPlayed
        // Move first song in upNext to active
        newActive = _.head(upNext)
        newUpNext = _.drop(upNext)
      }

      return Object.assign({}, state, {
        active: newActive,
        previouslyPlayed: newPreviouslyPlayed,
        upNext: newUpNext
      })
    }

    case 'PREVIOUS_SONG': {
      const {
        active,
        previouslyPlayed,
        upNext
      } = action
      let newActive = active
      let newPreviouslyPlayed = previouslyPlayed
      let newUpNext = upNext
      if(previouslyPlayed.length !== 0) {
        // Move active to upNext
        upNext.unshift(active)
        newUpNext = upNext
        // Move first song in previouslyPlayed to active
        newActive = _.head(previouslyPlayed)
        newPreviouslyPlayed = _.drop(previouslyPlayed)
      }

      return Object.assign({}, state, {
        active: newActive,
        previouslyPlayed: newPreviouslyPlayed,
        upNext: newUpNext
      })
    }

    default: {
      return state
    }
  }
}
