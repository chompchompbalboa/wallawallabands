import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { phone, tabletPortrait, tabletLandscape, desktop, retina } from 'src/styles/breakpoints'

import logo from 'static/img/logo.png'

export default class UnderConstruction extends Component {

  render() {
		const {
		} = this.props

    return (
			<Container>
        <Logo src={logo}/>
        COMING SOON
			</Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: white;
  @media ${retina} {
    font-size: 45px;
  }
`

const Logo = styled.img`
  width: 70vw;
  margin-bottom: 3vh;
  @media ${tabletPortrait} {
    width: 40vw;
  }
  @media ${tabletLandscape} {
    width: 25vw;
  }
  @media ${desktop} {
    width: 20vw;
  }
  @media ${retina} {
    width: 15vw;
  }
`

UnderConstruction.propTypes = {
}

UnderConstruction.defaultProps = {
}
