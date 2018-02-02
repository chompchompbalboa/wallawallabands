import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { desktop } from 'src/styles/breakpoints'
import { secondary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

export default class Dashboard extends Component {

  render() {
		const {
      active,
      band,
      changeActive,
      tiles
		} = this.props

    return (
			<Container>
        <Wrapper>
          <Name>{band.name}</Name>
          <HeaderLinks>
            {tiles.map((tile, index) =>
              <HeaderLink
                key={index}
                active={(active === tile)}
                onClick={() => changeActive(tile)}>
                {tile}</HeaderLink>
            )}
          </HeaderLinks>
        </Wrapper>
			</Container>
    )
  }
}

const Container = styled.div`
	width: 100%;
`

const Wrapper = styled.div`
  margin: 0 0 calc(${padding} / 2) calc(${padding} / 2);
`

const Name = styled.h1`
	font-family: Oswald;
`

const HeaderLinks = styled.div`
	padding: 1vh 0 1.5vh 0;
	display: flex;
	align-items: center;
  font-weight: 300;
`

const HeaderLink = styled.p`
  cursor: pointer;
	margin: 0 5vw 0 0;
	border-bottom: ${props => props.active ? '1px solid black' : 'none'};
`

Dashboard.propTypes = {
}

Dashboard.defaultProps = {
}
