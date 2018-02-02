import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { padding } from 'src/styles/layout'

import Tile from 'src/react/site/lib/BandTile'

export default class BandMusic extends Component {

  render() {
		const {
      first
		} = this.props

    return (
			<Container
        header="Music"
        first={false}>
        BandMusic
			</Container>
    )
  }
}

const Container = styled(Tile)`
  position: sticky;
  top: calc(${padding} / 2);
  height: 40vh;
`

BandMusic.propTypes = {
}

BandMusic.defaultProps = {
}
