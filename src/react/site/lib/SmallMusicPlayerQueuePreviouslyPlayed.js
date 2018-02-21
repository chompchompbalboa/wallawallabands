//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import QueueContainer from 'src/react/site/lib/SmallMusicPlayerQueueContainer'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerQueuePreviouslyPlayed extends Component {

  static propTypes = {
    previouslyPlayed: arrayOf(shape({
      title: string
    }))
  }

  static defaultProps = {
    previouslyPlayed: []
  }

  render() {
		const {
      previouslyPlayed
    } = this.props
    const previouslyPlayedCopy = previouslyPlayed.slice(0)
    const reversePreviouslyPlayed = _.reverse(previouslyPlayedCopy)

    return (
			<Container>
        {
          reversePreviouslyPlayed.map((song, index) => {
            return (
              <Song key={index}>
                {song.title}
              </Song>
            )
          })
        }
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(QueueContainer)`
`

const Song = styled.div`
`
