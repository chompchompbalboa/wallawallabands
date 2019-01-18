//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { background } from 'src/styles/colors'

import DesktopSponsor from 'src/react/site/lib/DesktopSponsor'
import FeaturedBand from 'src/react/site/lib/FeaturedBand'
import BandsTile from 'src/react/site/lib/BandsTile'

import bastille from 'static/img/featured-bands/bastille.jpg'
import blackPistolFire from 'static/img/featured-bands/black-pistol-fire.jpg'
import modestMouse from 'static/img/featured-bands/modest-mouse.jpg'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const FeaturedBands = ({ featuredBands }) => (
  <Container>
    <DesktopSponsor />
    {featuredBands.map((band, index) => (
      <FeaturedBand
        key={index}
        band={band}/>
    ))}
  </Container>
)

//------------------------------------------------------------------------------
// Props
//------------------------------------------------------------------------------
FeaturedBands.propTypes = {
  featuredBands: arrayOf(shape({
    blurb: string,
    header: string,
    img: string,
    slug: string
  }))
}

FeaturedBands.defaultProps = {
  featuredBands: [
    {
      blurb: "Click through to read some more about your favorite band", 
      header: "Modest Mouse", 
      img: modestMouse, 
      slug: "modest-mouse"
    },
    {
      blurb: "Click through to read some more about your favorite band", 
      header: "Black Pistol Fire", 
      img: blackPistolFire, 
      slug: "black-pistol-fire"
    },
    {
      blurb: "Click through to read some more about your favorite band", 
      header: "Bastille", 
      img: bastille, 
      slug: "bastille"
    }
  ]
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(BandsTile)`
  display: none;
  @media ${tabletLandscape} {
    padding: 0;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${background};
  }
`

export default FeaturedBands