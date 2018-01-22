import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import smallLogo from 'static/img/logo_small.png'

import { primary } from 'src/styles/colors'

export default class Menu extends Component {

  render() {
    return (
			<Container>
        <HomeLink to="/">
          <SmallLogo src={smallLogo} />
        </HomeLink>
			</Container>
    )
  }
}

const Container = styled.div`
  padding: 0 0 0 2vw;
  width: 98vw;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 5px solid ${primary};
`

const HomeLink = styled(Link)`
  color: ${primary};
  text-decoration: none;
`

const SmallLogo = styled.img`
  margin: 1.5vh 0;
  height: 4.5vh;
`
