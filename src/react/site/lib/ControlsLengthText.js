//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { seekTo } from 'src/store/audioActions'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    active: state.queue.active,
    playedSeconds: state.audio.playedSeconds
  }),
  dispatch => ({
    seekTo: (percentage) => dispatch(seekTo(percentage))
  })
)
export default class ControlsLength extends Component {

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
      playedSeconds
    } = this.props

    const playedTime = this.setPlayedTime(playedSeconds)

    return (
    <Container>
      <div>{playedTime}</div>
      <div>{active.length}</div>
    </Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 0.5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
