//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { tabletPortrait } from 'src/styles/breakpoints'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumYear extends Component {

  static propTypes = {
    year: string
  }

  static defaultProps = {
    year: "2000"
  }

  render() {
		const { year } = this.props

    return (
			<Container>
        {year}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  display: none;
  @media ${tabletPortrait} {
    display: flex;
  }
`
