import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import Tile from 'src/react/site/lib/BandTile'

export default class BandTiles extends Component {

  render() {
		const {
      active,
      band
		} = this.props

    return (
			<React.Fragment>
        <Tile
          first={active === "BIO"}
          header="BIO">
          {band.bio}</Tile>
        <Tile
          first={active === "MUSIC"}
          header="MUSIC">
          {band.bio}{band.bio}{band.bio}</Tile>
        <Tile
          first={active === "PHOTOS"}
          header="PHOTOS">
          {band.bio}{band.bio}</Tile>
			</React.Fragment>
    )
  }
}

const Container = styled.div`
`

BandTiles.propTypes = {
}

BandTiles.defaultProps = {
}
