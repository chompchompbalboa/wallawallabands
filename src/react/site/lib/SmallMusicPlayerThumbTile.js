//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, string } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerThumbTile extends Component {

  static propTypes = {
    top: string,
    visible: bool
  }

  static defaultProps = {
    top: "63vh",
    visible: true
  }

  render() {
		const {
      top,
      visible,
      children,
      ...rest
    } = this.props

    return (
			<Container
        top={top}
        visible={visible}
        {...rest}>
        {children}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.visible ? 'calc(100vw - 7vh)' : '100vh'};
  height: 7vh;
  width: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
  transition: left 0.25s;
`
