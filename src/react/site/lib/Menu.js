import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import smallLogo from 'static/img/logo_small.png'

import { primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

export default class Menu extends Component {

  render() {
    return (
			<Container>
        <LinksContainer>
          <HomeLink to="/">
            <SmallLogo src={smallLogo} />
          </HomeLink>
          <DesktopLinks>
            <PageLink to="/about">About</PageLink>
            <PageLink to="/donate">Donate</PageLink>
          </DesktopLinks>
        </LinksContainer>
			</Container>
    )
  }
}

const Container = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${primary};
`

const LinksContainer = styled.div`
  width: calc(70% - ${padding});
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DesktopLinks = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomeLink = styled(Link)`
  color: ${primary};
  text-decoration: none;
`

const PageLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .05em
`

const SmallLogo = styled.img`
  margin: 1.5vh 0;
  height: 4.5vh;
`
