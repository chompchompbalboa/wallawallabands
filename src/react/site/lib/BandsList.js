//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { tabletLandscape, desktop } from 'src/styles/breakpoints'
import { text } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import BandsTile from 'src/react/site/lib/BandsTile'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BandsList = ({ bands }) => {

  const bandsList = () => {
    const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const lastIndex = Object.keys(bands)[Object.keys(bands).length - 1]
    return letters.map((letter, index) => {
      let group = (typeof bands[letter] !== "undefined" ? bands[letter] : null)
      if(group) {
        return (
          <Group key={index} id={letters[index]}>
            <Links>
              {group.map((band, index) => {
                  return (
                    <StyledLink to={"band/" + band.slug} key={index}>
                      <BandLink>
                        { band.name }
                      </BandLink>
                    </StyledLink>
              )})}
            </Links>
            {letter === lastIndex ? null : <Divider />}
          </Group>
    )}})
  }

  return (
    <Container>
      {bandsList()}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
BandsList.propTypes = {
  bands: object
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(BandsTile)`
  width: 100%;
  @media ${tabletLandscape} {
    width: calc(70% - ${padding});
  }
`

const Links = styled.div``

const Group = styled.div`
  padding-top: 1.25vh
`

const Divider = styled.div`
  margin-top: 1.25vh;
  height: 1px;
  background-color: rgb(150,150,150);
  align-self: center;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const BandLink = styled.div`
  padding: 1.25vh 0;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${text};
  font-weight: 300;
  @media ${desktop} {
    font-size: 14px;
  }
`

export default BandsList