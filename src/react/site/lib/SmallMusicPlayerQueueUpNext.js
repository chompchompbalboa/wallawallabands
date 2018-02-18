//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

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
        {upNext.map(song => {
          return song.title
        })}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
