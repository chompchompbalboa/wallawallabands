//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { pauseAudio, playAudio } from 'store/audioActions'
import { nextSong as nextSongAction } from 'src/store/queueActions'

import { nextSong as nextSongIcon } from 'src/styles/icons'
import { controlsIconSize } from 'src/styles/layout'

import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    queue: state.queue
  }),
  dispatch => ({
    nextSongDispatch: (queue) => dispatch(nextSongAction(queue)),
    playSong: () => dispatch(playAudio()),
    pauseSong: () => dispatch(pauseAudio())
  })
)
export default class ControlsNextSong extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  handleClick = () => {
    const { nextSongDispatch, pauseSong, playSong, queue } = this.props
    nextSongDispatch(queue)
  }

  render() {
		const {
      nextSongDispatch,
      queue
    } = this.props

    return (
			<Container onClick={this.handleClick}>
        <Icon
          icon={nextSongIcon}
          color={"black"}
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
