//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, string } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { background } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import DesktopSponsor from 'src/react/site/lib/DesktopSponsor'
import FeaturedBand from 'src/react/site/lib/FeaturedBand'
import Tile from 'src/react/site/lib/BandsTile'

import bastille from 'static/img/featured-bands/bastille.jpg'
import blackPistolFire from 'static/img/featured-bands/black-pistol-fire.jpg'
import modestMouse from 'static/img/featured-bands/modest-mouse.jpg'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class FeaturedBands extends Component {

  static propTypes = {
    featuredBands: array,
    from: string
  }

  static defaultProps = {
    featuredBands: [
      {blurb: "Click through to read some more about your favorite band", header: "Modest Mouse", img: modestMouse, slug: "modest-mouse"},
      {blurb: "Click through to read some more about your favorite band", header: "Black Pistol Fire", img: blackPistolFire, slug: "black-pistol-fire"},
      {blurb: "Click through to read some more about your favorite band", header: "Bastille", img: bastille, slug: "bastille"},
    ],
    from: "Band"
  }

  render() {
		const {
      featuredBands,
      from
		} = this.props

    return (
			<Container>
        <DesktopSponsor />
        {from === "Band"
          &&
          featuredBands.map((band, index) => {
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

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
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