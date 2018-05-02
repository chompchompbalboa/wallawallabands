import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import Tile from 'src/react/site/lib/BandTile'

export default class BandBio extends Component {

  render() {
		const {
      first,
      bio
		} = this.props

    return (
			<Container header="Bio" first={first}>
        {bio}
			</Container>
    )
  }
}

const Container = styled(Tile)`
  white-space: pre-line;
`

BandBio.propTypes = {
}

BandBio.defaultProps = {
}
