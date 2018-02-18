//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, func } from 'prop-types'
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
    playing: bool,
    pauseAudio: func,
    playAudio: func
  }

  static defaultProps = {
    playing: false,
    pauseAudio: null,
    playAudio: null
  }

  render() {
		const {
      playing,
      pauseAudio,
      playAudio
    } = this.props

    return (
			<Container onClick={playing ? pauseAudio : playAudio}>
        <Icon
          icon={playing ? pause : play}
          color={"black"}
          size={controlsIconSize}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
