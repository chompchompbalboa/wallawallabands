//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { background } from 'src/styles/colors'

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
			<Container
        visible={visible}>
        SmallMusicContent
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.visible ? '0' : '100vw'};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235,235,235);
  transition: all 0.25s;
  background-color: ${background}
`
