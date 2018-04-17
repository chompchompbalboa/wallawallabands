//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import smallLogo from 'static/img/logo_small.png'

import { desktop, tabletLandscape } from 'src/styles/breakpoints'
import { background, primary } from 'src/styles/colors'
import { menu, xNoCircle } from 'src/styles/icons'
import { padding } from 'src/styles/layout'

import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Menu extends Component {

  state = {
    mobileMenuVisible: false
  }

  toggleMobileMenu = () => {
    const nextMobileMenuVisible = !this.state.mobileMenuVisible
    this.setState({
      mobileMenuVisible: nextMobileMenuVisible
    })
  }

  render() {
    const {
      mobileMenuVisible
    } = this.state

    return (
			<Container>
        <LinksBorderTop />
        <LinksContainer>
          <HomeLink to="/">
            <SmallLogo src={smallLogo} />
          </HomeLink>
          <DesktopLinks>
            <PageLink to="/about">About</PageLink>
            <PageLink to="/donate">Donate</PageLink>
          </DesktopLinks>
          <MobileMenuIcon
            onClick={this.toggleMobileMenu}>
            <Icon
              icon={mobileMenuVisible ? xNoCircle : menu}/>
          </MobileMenuIcon>
        </LinksContainer>
        <LinksBorderBottom />
        <MobileMenu
          visible={mobileMenuVisible}>
          <MobileMenuLink
            to="">
            Bands
          </MobileMenuLink>
          <MobileMenuLink
            to="/about">
            About
          </MobileMenuLink>
          <MobileMenuLink
            to="/donate">
            Donate
          </MobileMenuLink>
        </MobileMenu>
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(9vh + 5px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinksBorderTop = styled.div`
  z-index: 1;
  position: fixed;
  background-color: white;
  top: calc(-15vh + 1px);
  width: 100vw;
  height: 15vh;
`

const LinksContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 0 ${padding};
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  @media ${tabletLandscape} {
    width: calc(95% - ${padding});
  }
  @media ${desktop} {
    width: calc(75% - ${padding});
  }
`

const LinksBorderBottom = styled.div`
  z-index: 1;
  width: 100vw;
  height: 5px;
  background-color: ${primary};
`

const DesktopLinks = styled.div`
  display: none;
  @media ${tabletLandscape} {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const HomeLink = styled(Link)`
  color: ${primary};
  text-decoration: none;
`

const SmallLogo = styled.img`
  margin: 1.5vh 0;
  height: 4.5vh;
`

const PageLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .05em;
`

const MobileMenuIcon = styled.div`
  @media ${tabletLandscape} {
    display: none;
  }
`

const MobileMenu = styled.div`
  z-index: 0;
  position: fixed;
  top: ${props => props.visible ? '9vh' : '-20vh'};
  left: 0;
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: top 0.5s;
  font-size: 18px;
  background-color: ${background};
  border-bottom: 3px solid black;
  @media ${tabletLandscape} {
    font-size: 22px;
  }
  @media ${tabletLandscape} {
    display: none;
  }
`

const MobileMenuLink = PageLink.extend`
  margin: 1vh 0;
  font-family: Raleway, sans-serif;
`
