//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { background } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import MusicPlayerAudio from 'src/react/site/lib/MusicPlayerAudio'
import SmallMusicPlayerQueue from 'src/react/site/lib/SmallMusicPlayerQueue'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicContent extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const { visible } = this.props

    return (
			<Container visible={visible}>
        <MusicPlayerAudio />
        <SmallMusicPlayerQueue />
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 ${padding};
  position: fixed;
  top: 0;
  left: ${props => props.visible ? '0' : '100vw'};
  width: 100vw;
  height: 100vh;
  background-color: rgb(235,235,235);
  transition: all 0.25s;
  background-color: ${background}
`
