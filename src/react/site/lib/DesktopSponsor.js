//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { background } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import Tile from 'src/react/site/lib/BandsTile'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class DesktopSponsor extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {} = this.props

    return (
			<Container>
        <Header>Sponsored By:</Header>
        <Logo
          src="/img/sponsors/music_together_walla_walla.png"></Logo>
        <Blurb>Music and movement classes for babies, toddlers, preschoolers, and the grown ups who love them, in the Walla Walla area</Blurb>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(Tile)`
  display: none;
  @media ${tabletLandscape} {
    display: block;
    width: 100%;
    margin-bottom: ${padding};
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }
`

const Header = styled.div`
  width: 100%;
  padding: 1vh 2vh;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 2px solid ${background};
`

const Logo = styled.img`
  padding: 2vh;
  width: 100%;
  height: auto;
`

const Blurb = styled.div`
  padding: 0 2vh calc(2vh / 2) 2vh;
`
