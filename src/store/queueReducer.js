import _ from 'lodash'

const initialState = {
  active: {
    id: 1,
    title: "I Like My Heart Broken",
    length: "3:13", 
    audio: "https://soundcloud.com/famous_dex1/japan"
  },
  previouslyPlayed: [],
  upNext: [
    {id: 2, title: "Drink Me Beautiful", length: "3:33", audio: "https://soundcloud.com/landoncube/lil-skies-ft-landon-cube-red-roses-prod-menoh-beats"},
    {id: 3, title: "Back Into The Woods", length: "2:58", audio: "https://soundcloud.com/rich-the-kid/plug-walk-1"},
    {id: 4, title: "Little Lover", length: "3:36", audio: "https://soundcloud.com/nba-youngboy/through-the-storm"},
    {id: 5, title: "My Apologies", length: "2:17", audio: "https://soundcloud.com/uiceheidd/lucid-dreams-forget-me"},
    {id: 6, title: "Acid Queen", length: "3:09", audio: "https://soundcloud.com/wavey-hefner/esskeetit"},
    {id: 7, title: "Lock Down Lights Out", length: "3:29", audio: "https://soundcloud.com/wnhhlmao/juice-wrld-lucid-dreams-6ix9ine-gummo-billy-rondo-gotti-keke-drake-nice-for-what-famous-dex-japan-lil-uzi-vert-rich-forever-leak-lil-pump-esskeetit-nba-young-boy-diamond-teeth-samurai-through-the-storm-young-thug-anybody-now-up-lil-dicky-freaky-friday"},
    {id: 8, title: "Trouble", length: "2:51", audio: "https://soundcloud.com/octobersveryown/blocboy-jb-look-alive-ft-drake"},
    {id: 9, title: "Jam On District", length: "3:47", audio: "https://soundcloud.com/uiceheidd/all-girls-are-same-999-prod-nick-mira"},
    {id: 10, title: "Rocky Bottom", length: "2:11", audio: "https://soundcloud.com/scumgang6ix9ine/billy"},
    {id: 11, title: "New Orleans", length: "3:23", audio: "https://soundcloud.com/lil-dicky/freaky-friday-feat-chris-brown"},
    {id: 12, title: "Sex Kitten", length: "3:04", audio: "https://soundcloud.com/jahseh-onfroy/fuck-love-feat-trippie-redd"},
    {id: 12, title: "Dubbs", length: "3:27", audio: "https://soundcloud.com/hamzanamira/hamza-namira-dari-ya-alby"},
    {id: 12, title: "Love You Til You Bleed", length: "8:26", audio: "https://soundcloud.com/rich-the-kid/new-freezer-feat-kendrick"}
  ],
  album: {
    id: 1,
    cover: "img/album-covers/theBlast_lockDownLightsOut.jpg",
    title: "Lock Down Lights Out",
    year: "2007",
  },
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
