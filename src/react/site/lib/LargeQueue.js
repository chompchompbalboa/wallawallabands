//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

import { padding } from 'src/styles/layout'

import Active from 'src/react/site/lib/LargeQueueActive'
import PreviouslyPlayed from 'src/react/site/lib/LargeQueuePreviouslyPlayed'
import Tile from 'src/react/site/lib/BandTile'
import UpNext from 'src/react/site/lib/LargeQueueUpNext'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    active: state.queue.active,
    previouslyPlayed: state.queue.previouslyPlayed,
    upNext: state.queue.upNext,
    musicPlayerActive: state.queue.hasStartedPlayingSong
}))
export default class LargeQueue extends Component {

  static propTypes = {
    first: bool,
    musicPlayerActive: bool
  }

  static defaultProps = {
    first: false,
    musicPlayerActive: false
  }

  render() {
		const {
      first,
      active,
      previouslyPlayed,
      upNext,
      musicPlayerActive
		} = this.props

    return (
			<Container
        header="Music"
        first={false}
        musicPlayerActive={musicPlayerActive}>
        <PreviouslyPlayed previouslyPlayed={previouslyPlayed}/>
        <Active active={active}/>
        <UpNext upNext={upNext}/>
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(Tile)`
  position: sticky;
  top: ${props => props.musicPlayerActive ? 'calc(10vh + (' + padding + ' / 2))' : 'calc(' + padding + ' / 2)'};
  height: 40vh;
  transition: top 0.5s;
`
