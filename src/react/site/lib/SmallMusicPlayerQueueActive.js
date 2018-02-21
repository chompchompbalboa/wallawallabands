//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import Controls from 'src/react/site/lib/SmallMusicPlayerQueueControls'
import QueueContainer from 'src/react/site/lib/SmallMusicPlayerQueueContainer'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerQueueActive extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      active: {
        title
    }} = this.props
    const text = (typeof title === "undefined" ? 'Choose a song to play!' : title)

    return (
			<Container>
        <Active>{title}</Active>
        <Controls />
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(QueueContainer)`
`

const Active = styled.div`
`
