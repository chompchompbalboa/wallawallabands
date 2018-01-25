import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import _ from 'lodash'

import { tabletLandscape } from 'src/styles/breakpoints'
import { text, tileBackground } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import Tile from 'src/react/site/lib/BandsTile'

export default class BandsList extends Component {

  getList(bands) {
    const letters = "ABCDEFGHIJKLMNOQRSTUVWXYZ".split("")
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

  render() {
		const {
      bands
		} = this.props
    const list = this.getList(bands)

    return (
			<Container>
        {list}
			</Container>
    )
  }
}

const Container = styled(Tile)`
  width: 100%;
  @media ${tabletLandscape} {
    width: auto;
    flex-grow: 2.5;
    margin-right: ${padding}
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
  font-weight: 300
`
