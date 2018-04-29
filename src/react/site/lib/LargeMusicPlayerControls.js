//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import PreviousSong from 'src/react/site/lib/ControlsPreviousSong'
import PlayPause from 'src/react/site/lib/ControlsPlayPause'
import NextSong from 'src/react/site/lib/ControlsNextSong'
import Length from 'src/react/site/lib/ControlsLength'
import LengthText from 'src/react/site/lib/ControlsLengthText'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeMusicPlayerControls extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  setPlayedTime = (playedSeconds) => {
    let s = Math.round(playedSeconds)
    return(s-(s%=60))/60+(9<s?':':':0')+s
  }

  render() {
    const {
      active,
      album,
      playedSeconds
    } = this.props
    const playedTime = this.setPlayedTime(playedSeconds)

    return (
			<Container>
        <ActionsContainer>
          <PreviousSong from="LargeMusicPlayer"/>
          <PlayPause from="LargeMusicPlayer"/>
          <NextSong from="LargeMusicPlayer"/>
        </ActionsContainer>
        <LengthContainer>
          <CurrentPlayedLength>{playedTime}</CurrentPlayedLength>
          <Length from="LargeMusicPlayer"/>
          <SongLength>{active.length}</SongLength>
        </LengthContainer>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const LengthContainer = styled.div`
  width: 60%;
  display: flex;
  justifyContent: space-between;
  align-items: center;
`

const CurrentPlayedLength = styled.div`
  margin-right: 0.5vw;
`

const SongLength = styled.div`
  margin-left: 0.5vw;
`
