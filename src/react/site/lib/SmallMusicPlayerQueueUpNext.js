//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import QueueContainer from 'src/react/site/lib/SmallMusicPlayerQueueContainer'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerQueueUpNext extends Component {

  static propTypes = {
    upNext: arrayOf(shape({
      title: string
    }))
  }

  static defaultProps = {
    upNext: []
  }

  render() {
		const {
      upNext
    } = this.props

    return (
			<Container>
        {upNext.map((song, index) => {
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
const Container = styled(QueueContainer)`
`

const Song = styled.div`
`
