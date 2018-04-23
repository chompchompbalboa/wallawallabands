//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { padding } from 'src/styles/layout'

import Active from 'src/react/site/lib/SmallMusicPlayerQueueActive'
import PreviouslyPlayed from 'src/react/site/lib/SmallMusicPlayerQueuePreviouslyPlayed'
import UpNext from 'src/react/site/lib/SmallMusicPlayerQueueUpNext'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    audio: state.audio,
    active: state.queue.active,
    previouslyPlayed: state.queue.previouslyPlayed,
    album: state.queue.album,
    upNext: state.queue.upNext
}))
export default class SmallMusicPlayerQueue extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      audio,
      active,
      previouslyPlayed,
      album,
      upNext
    } = this.props

    return (
			<Container>
        <Active active={active} album={album}/>
        <UpNext upNext={upNext}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-top: calc(9vh + 5px);
  width: 100%;
  height: calc(100vh - (9vh + 5px));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
