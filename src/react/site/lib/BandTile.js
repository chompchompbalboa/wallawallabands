import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape, desktop } from 'src/styles/breakpoints'
import { background, primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

export default class BandTile extends Component {

  render() {
		const {
      first,
      header,
      className,
      children,
      ...rest
		} = this.props

    return (
			<Container id={header} className={className} first={first}>
        <Header>{header}</Header>
        <Tile>{children}</Tile>
			</Container>
    )
  }
}

const Container = styled.div`
  pointer: default;
  order: ${props => props.first ? '1' : '2'};
  width: 100%;
  margin: calc(${padding} / 2) 0;
  background-color: white;
  border-bottom: 3px solid black;
  @media ${tabletLandscape} {
    width: calc(100% - ${padding});
  }
  &:hover {
    border-bottom: 3px solid ${primary};
  }
  transition: border 0.25s;
`

const Header = styled.div`
  width: calc(100%);
  padding: 1vh ${padding};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 2px solid ${background};
`

const Tile = styled.div`
  width: calc(100% + ${padding});
  padding: ${padding};
`

BandTile.propTypes = {
  first: PropTypes.bool,
  header: PropTypes.string
}

BandTile.defaultProps = {
  first: false,
  header: "Header"
}
