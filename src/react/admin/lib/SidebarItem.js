//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { primary } from 'src/styles/colors'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SidebarItem extends Component {

  render() {
		const {
      active,
      children,
      ...rest
		} = this.props

    return (
			<Container active={active} {...rest}>
        {children}
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  padding: 1.5vh 0.5vw;
  width: 100%;
  cursor: ${props => props.active ? 'default' : 'pointer'};
  background-color: ${props => props.active ? primary : 'transparent'};
  border-right: ${props => props.active ? '2px solid ' + primary : 'none'};
  box-shadow: ${props => props.active ? '1px 1px 15px 1px rgb(100,100,100)' : 'none'};
  color: ${props => props.active ? 'white' : 'black'};
  &:hover {
    color: ${props => props.active ? 'white' : primary};
  }
  transition: background-color 0.05s, color 0.05s, box-shadow 0.05s, border-right 0.05s;
`
