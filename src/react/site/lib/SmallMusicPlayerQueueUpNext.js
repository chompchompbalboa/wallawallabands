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
        <Header>Up next:</Header>
        {upNext.map((song, index) => {
          if (index < 4) {
            return (
              <Song key={index}>
                {song.title}
              </Song>
        )}})}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
margin-top: 5%;
width: 100%;
height: 20%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

const Header = styled.div`
font-size: 16px;
font-weight: bold;
`

const Song = styled.div`
font-size: 14px;
`
