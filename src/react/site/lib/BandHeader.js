//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { array, func, object, string } from 'prop-types'
import styled from 'styled-components'

import { padding } from 'src/styles/layout'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BandHeader = ({ active, band, changeActive, tiles }) => (
  <Container>
    <Wrapper>
      <Name>
        {band.name}
      </Name>
      <HeaderLinks>
        {tiles.map((tile, index) =>
          <HeaderLink
            key={index}
            active={(active === tile)}
            onClick={() => changeActive(tile)}>
            {tile}
          </HeaderLink>
        )}
      </HeaderLinks>
    </Wrapper>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
BandHeader.propTypes = {
  active: string,
  band: object,
  changeActive: func,
  tiles: array
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
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

export default BandHeader