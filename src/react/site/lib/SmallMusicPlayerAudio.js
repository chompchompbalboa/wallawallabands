//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { updatePlayed } from 'src/store/audioActions'
import { nextSong } from 'src/store/queueActions'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    playing: state.audio.playing,
    queue: state.queue,
    seekTo: state.audio.seekTo,
    url: state.queue.active.audio
  }),
  dispatch => ({
    updatePlayed: (data) => dispatch(updatePlayed(data)),
    nextSongDispatch: (queue) => dispatch(nextSong(queue))
  })
)
export default class SmallMusicPlayerAudio extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  componentDidUpdate = (prevProps) => {
    console.log(prevProps)
    console.log(this.props)
    console.log(this.player)
    const { seekTo } = this.props
    if(seekTo !== 0.0) {
      this.player.seekTo(parseFloat(seekTo))
    }
  }
  render() {
		const {
      nextSongDispatch,
      queue,
      playing,
      seekTo,
      updatePlayed,
      url
    } = this.props
    return (
			<Container>
        <ReactPlayer
          ref={c => this.player = c}
          controls={false}
          url={url}
          width="0"
          height="0"
          playing={playing}
          onProgress={updatePlayed}
          onEnded={() => nextSongDispatch(queue)}
          progressInterval={1000}
          autoPlay
          config={{
            file: {
              attributes: {
                autoPlay: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, preload:"none"
          }}}}
          />
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
