import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class BandTile extends Component {

  render() {
		const {
      first,
      header,
      children,
      ...rest
		} = this.props

    return (
			<Container id={header} first={first}>
        <Header>{header}</Header>
        <Tile>{children}</Tile>
			</Container>
    )
  }
}

const Container = styled.div`
  order: ${props => props.first ? '1' : '2'};
  margin-top: 2vh;
  padding: 0 5vw;
  width: calc(100vw - 10vw);
`

const Header = styled.div`
  width: 100%;
  padding: 1vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
  text-transform: uppercase;
`

const Tile = styled.div`
  width: calc(100% - 2.5vh);
  padding: 1.25vh;
  background-color: white;
`

BandTile.propTypes = {
  first: PropTypes.bool,
  header: PropTypes.string
}

BandTile.defaultProps = {
  first: false,
  header: "Header"
}
