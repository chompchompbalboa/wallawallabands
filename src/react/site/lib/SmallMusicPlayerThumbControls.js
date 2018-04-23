//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { pauseAudio, playAudio } from 'store/audioActions'

import { songsInQueue } from 'src/react/site/utils/queue'

import { pauseCircle, playCircle } from 'src/styles/icons'

import Icon from 'src/react/lib/Icon'
import ThumbTile from 'src/react/site/lib/SmallMusicPlayerThumbTile'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    audio: state.audio,
    queue: state.queue
}))
export default class SmallMusicPlayerThumbControls extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  pauseAudioDispatch = () => {
    const { dispatch } = this.props
    dispatch(pauseAudio())
  }

  playAudioDispatch = () => {
    const { dispatch } = this.props
    dispatch(playAudio())
  }

  setCurrent = () => {
    const {
      audio: {
        playing
      },
      queue
    } = this.props
    const defaultSize = 20

    let visible = false,
        icon = playCircle,
        onClick = null,
        size = defaultSize + "px"

    if (playing) {
      visible = true
      icon = pauseCircle
      onClick = this.pauseAudioDispatch
      size = defaultSize * 1.2 + "px"
    }

    if (!playing && songsInQueue(queue)) {
      visible = true
      icon = playCircle
      onClick = this.playAudioDispatch
    }

    return { visible, icon, onClick, size }
  }

  render() {
		const {
      top,
      ...rest
    } = this.props
    const { visible, icon, onClick, size } = this.setCurrent()

    return (
			<ThumbTile
        top={top}
        visible={visible}
        onClick={onClick}
        {...rest}>
        <Icon
          icon={icon}
          color={"white"}
          size={size}/>
      </ThumbTile>
  )}
}
