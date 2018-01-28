import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { background } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import FeaturedBand from 'src/react/site/lib/FeaturedBand'
import Tile from 'src/react/site/lib/BandsTile'

import bastille from 'static/img/featured-bands/bastille.jpg'
import blackPistolFire from 'static/img/featured-bands/black-pistol-fire.jpg'
import modestMouse from 'static/img/featured-bands/modest-mouse.jpg'

export default class FeaturedBands extends Component {

  render() {
		const {
      featuredBands
		} = this.props

    return (
			<Container>
        {featuredBands.map((band, index) => {
          return (
            <FeaturedBand
              key={index}
              band={band}
            />
          )
        })}
			</Container>
    )
  }
}

const Container = styled(Tile)`
  display: none;
  @media ${tabletLandscape} {
    padding: 0;
    width: calc(30%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${background};
  }
`

FeaturedBands.propTypes = {
  featuredBands: PropTypes.array
}

FeaturedBands.defaultProps = {
  featuredBands: [
    {blurb: "Click through to read some more about your favorite band", header: "Modest Mouse", img: modestMouse, slug: "modest-mouse"},
    {blurb: "Click through to read some more about your favorite band", header: "Black Pistol Fire", img: blackPistolFire, slug: "black-pistol-fire"},
    {blurb: "Click through to read some more about your favorite band", header: "Bastille", img: bastille, slug: "bastille"},
  ]
}
