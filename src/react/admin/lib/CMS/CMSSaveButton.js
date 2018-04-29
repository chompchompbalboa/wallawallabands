//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'

import { primary } from 'src/styles/colors'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSSaveButton extends Component {

  static propTypes = {
    onClick: func
  }

  static defaultProps = {
    onClick: () => {console.warn('You need to define an onClick function for the CMSSaveButton to work properly')}
  }

  render() {
		const {
      onClick
		} = this.props

    return (
			<Container
        onClick={onClick}>
        SAVE
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.button`
  cursor: pointer;
  width: 10vw;
  padding: 0.9em;
  background-color: ${primary};
  color: white;
  box-shadow: none;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: none;
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 1px 1px 3px gray;
  }
`
