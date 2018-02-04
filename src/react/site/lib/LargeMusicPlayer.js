//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeMusicPlayer extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {} = this.props

    return (
			<Container>
        LargeMusicPlayer
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  display: none;
  @media ${tabletLandscape} {
    display: flex;
  }
`
