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
export default class BandsMobileSponsor extends Component {

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
          src="/img/sponsors/Vrex-Banner.png"></Logo>
        <Blurb>Walla Walla’s only dinosaur themed independent rock n roll music machine</Blurb>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(Tile)`
  width: 100%;
  margin-bottom: ${padding};
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  @media ${tabletLandscape} {
    display: none;
  }
`

const Header = styled.div`
  width: 100%;
  padding: 1vh ${padding};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 2px solid ${background};
`

const Logo = styled.img`
  padding: ${padding};
  width: 100%;
  height: auto;
`

const Blurb = styled.div`
  padding: 0 ${padding} calc(${padding} / 2) ${padding};
  text-align: justify;
`
