//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import PreviousSong from 'src/react/site/lib/ControlsPreviousSong'
import PlayPause from 'src/react/site/lib/ControlsPlayPause'
import NextSong from 'src/react/site/lib/ControlsNextSong'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeMusicPlayerControls extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {} = this.props

    return (
			<Container>
        <ActionsContainer>
          <PreviousSong/>
          <PlayPause/>
          <NextSong/>
        </ActionsContainer>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 50%;
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
