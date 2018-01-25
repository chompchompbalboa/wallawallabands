import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { background } from 'src/styles/colors'

import Tile from 'src/react/site/lib/BandsTile'

export default class FeaturedBands extends Component {

  render() {
		const {
		} = this.props

    return (
			<Container>
        FeaturedBands
			</Container>
    )
  }
}

const Container = styled(Tile)`
  display: none;
  @media ${tabletLandscape} {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${background};
  }
`

FeaturedBands.propTypes = {
}

FeaturedBands.defaultProps = {
}
