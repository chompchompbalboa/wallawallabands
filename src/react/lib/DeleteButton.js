//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number } from 'prop-types'
import styled from 'styled-components'

import { xCircle } from 'src/styles/icons'

import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class DeleteButton extends Component {

  static propTypes = {
    size: number,
    onClick: func
  }

  static defaultProps = {
    size: 4,
    onClick: () => console.warn("You need to define an onClick function for the DeleteButton to work correctly")
  }

  render() {
		const {
      size,
      onClick
    } = this.props

    return (
			<Container
        size={size}
        onClick={onClick}>
        <Icon
          icon={xCircle}
          color="white"
          size="100%"/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  z-index: 100;
  float: right;
  margin-right: ${props => (-props.size / 2) + 'vh'};
  margin-bottom: ${props => (-props.size / 2) + 'vh'};
  top: ${props => (-props.size / 2) + 'vh'};
  right: ${props => (-props.size / 2) + 'vh'};
  width: ${props => props.size + 'vh'};
  height: ${props => props.size + 'vh'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: ${props => (props.size / 2) + 'vh'};
  box-shadow: 0 0 1vh black;
`
