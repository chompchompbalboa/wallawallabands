//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeQueuePreviouslyPlayed extends Component {

  static propTypes = {
    previouslyPlayed: arrayOf(shape({
      title: string
    }))
  }

  static defaultProps = {
    previouslyPlayed: [
      {title: "Default Song in LargeQueuePreviouslyPlayed"}
    ]
  }

  render() {
		const {
      previouslyPlayed
    } = this.props
    const previouslyPlayedCopy = previouslyPlayed.slice(0)
    const reversePreviouslyPlayed = _.reverse(previouslyPlayedCopy)

    return (
			<Container>
        {reversePreviouslyPlayed.map((song, index) => {
          return (
            <Song key={index}>
              {song.title}
            </Song>
        )})}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`

const Song = styled.div`
`
