//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

import { primary, text } from 'src/styles/colors'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumSongs extends Component {

  static propTypes = {
    active: bool
  }

  static defaultProps = {
    active: false
  }

  render() {
		const { active, onClick, ...rest } = this.props

    return (
			<Container>
        <ClickWrapper active={active} onClick={onClick}>
          +
        </ClickWrapper>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${text};
`

const ClickWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  transform: ${props => props.active ? 'rotate(-45deg)' : 'none'};
  font-weight: 300;
  font-size: ${props => props.active ? '2.25em' : '1.75em'};
  transition: font-size 0.25s, transform 0.25s;
`
