import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { phone, tabletLandscape } from 'src/styles/breakpoints'
import { primary } from 'src/styles/colors'

import AlphabetLink from 'src/react/site/lib/AlphabetLink'
import Tile from 'src/react/site/lib/BandsTile'

export default class BandsHeader extends Component {

  getLetters(bands) {
    const alphabet = "ABCDEFGHIJKLMNOQRSTUVWXYZ".split("")
    return alphabet.map((letter, index) => {
      const empty = (typeof bands[letter] === "undefined")
      return (
          <AlphabetLink
            key={letter}
            empty={empty}
            letter={letter}/>
      )
    })
  }

  render() {
		const {
      bands
		} = this.props
    const letters = this.getLetters(bands)

    return (
			<Container>
        <Title>BANDS</Title>
        <Alphabet>{letters}</Alphabet>
			</Container>
    )
  }
}

const Container = styled(Tile)`
  width: 100%;
  @media ${tabletLandscape} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 1.5em;
  letter-spacing: 0.05em;
  color: ${primary};
`

const Alphabet = styled.div`
  display: none;
  @media ${tabletLandscape} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
