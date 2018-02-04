//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { number } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumTrackCount extends Component {

  static propTypes = {
    trackCount: number
  }

  static defaultProps = {
    trackCount: 12
  }

  render() {
		const { trackCount } = this.props

    return (
			<Container>
        {trackCount}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
