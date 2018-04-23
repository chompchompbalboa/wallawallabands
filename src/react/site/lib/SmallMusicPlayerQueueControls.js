//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PreviousSong from 'src/react/site/lib/ControlsPreviousSong'
import PlayPause from 'src/react/site/lib/ControlsPlayPause'
import NextSong from 'src/react/site/lib/ControlsNextSong'
import Length from 'src/react/site/lib/ControlsLength'
import LengthText from 'src/react/site/lib/ControlsLengthText'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerQueueControls extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
    } = this.props

    return (
			<Container>
        <ActionsContainer>
          <PreviousSong/>
          <PlayPause/>
          <NextSong/>
        </ActionsContainer>
        <LengthContainer>
          <Length/>
          <LengthText />
        </LengthContainer>
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

const ActionsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LengthContainer = styled.div`
  margin-top: 2vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
