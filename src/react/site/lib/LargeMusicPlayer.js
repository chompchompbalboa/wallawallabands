//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { tabletLandscape, desktop } from 'src/styles/breakpoints'
import { padding } from 'src/styles/layout'

import LargeMusicPlayerControls from 'src/react/site/lib/LargeMusicPlayerControls'
import LargeMusicPlayerSongDetails from 'src/react/site/lib/LargeMusicPlayerSongDetails'
import MusicPlayerAudio from 'src/react/site/lib/MusicPlayerAudio'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    active: state.queue.active,
    album: state.queue.album,
    playedSeconds: state.audio.playedSeconds
}))
export default class LargeMusicPlayer extends Component {

  state = {
    visible: true
  }

  static propTypes = {
  }

  static defaultProps = {
  }

  componentWillReceiveProps = (nextProps) => {
    if (Object.keys(nextProps.active).length > 0) {
      this.setState({
        visible: true
      })
    }
  }

  render() {
		const {
      active,
      album,
      playedSeconds
    } = this.props
    const { 
      visible 
    } = this.state

    return (
			<Container visible={visible}>
        <ContentContainer>
          <LargeMusicPlayerSongDetails 
            active={active}
            album={album}/>
          <LargeMusicPlayerControls  
            active={active}
            album={album}
            playedSeconds={playedSeconds}/>
          <MusicPlayerAudio />
        </ContentContainer>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  display: none;
  @media ${tabletLandscape} {
    position: fixed;
    top: ${props => props.visible ? '93vh' : '100vh'};
    left: 0;
    width: 100vw;
    height: 17vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(50,50,50,0.8);
    transition: top 0.5s;
    color: white;
  }
`

const ContentContainer = styled.div`
  height: 7vh;
  width: calc(95% - ${padding});
  padding: 0 ${padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${desktop} {
    width: calc(75% - ${padding});
  }
`
