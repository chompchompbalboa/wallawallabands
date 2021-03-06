//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, func, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { pauseAudio, playAudio } from 'src/store/audioActions'

import { play, pause } from 'src/styles/icons'
import { controlsIconSize } from 'src/styles/layout'

import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    playing: state.audio.playing
  }),
  dispatch => ({
    pauseAudio: () => dispatch(pauseAudio()),
    playAudio: () => dispatch(playAudio())
  })
)
export default class ControlsPlayPause extends Component {

  static propTypes = {
    from: string,
    playing: bool,
    pauseAudio: func,
    playAudio: func
  }

  static defaultProps = {
    from: "SmallMusicPlayer",
    playing: false,
    pauseAudio: null,
    playAudio: null
  }

  render() {
		const {
      from,
      pauseAudio,
      playAudio,
      playing
    } = this.props

    return (
			<Container onClick={playing ? pauseAudio : playAudio}>
        <Icon
          icon={playing ? pause : play}
          color={from === "LargeMusicPlayer" ? "white" : "black"}
          size={controlsIconSize}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
`
