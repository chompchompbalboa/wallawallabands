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
      upNext
    } = this.props

    return (
			<Container>
        <PreviouslyPlayed previouslyPlayed={previouslyPlayed}/>
        <Active active={active}/>
        <UpNext upNext={upNext}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: calc(100% - (2 * ${padding}));
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
