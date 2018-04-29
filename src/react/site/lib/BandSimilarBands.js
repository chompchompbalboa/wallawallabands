//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import Tile from 'src/react/site/lib/BandTile'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class BandSimilarBands extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  getBands = (similarBands) => {
    const lastIndex = Number(Object.keys(similarBands)[Object.keys(similarBands).length - 1])
    return similarBands.map((band, index) => {
      return (
        <React.Fragment key={index}>
          <SimilarBand to={"/band/" + band.slug}>
            <SimilarBandHeader>
              <SimilarBandName>{band.name}</SimilarBandName>
              <SimilarBandReadMore>...read more >></SimilarBandReadMore>
            </SimilarBandHeader>
            <SimilarBandBlurb>{this.getBlurb(band.bio)}</SimilarBandBlurb>
          </SimilarBand>
          {index === lastIndex ? null : <Divider />}
        </React.Fragment>

      )
    })
  }

  getBlurb = (bio) => {
    return (
      _.truncate(bio, {
      'length': 200,
      'separator': ' '
    }))
  }

  render() {
		const {
      similarBands
    } = this.props
    const bands = this.getBands(similarBands)

    return (
			<Container header="Some similar bands">
        {bands}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(Tile)`
  width: 100%;
`

const SimilarBand = styled(Link)`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: black;
`

const SimilarBandHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  ${SimilarBand}:hover & {
    color: ${primary}
  }
`

const SimilarBandName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1vh;
`

const SimilarBandReadMore = styled.div`
  opacity: 0;
  transition: all 0.3s;
  color: black;
  ${SimilarBand}:hover & {
    opacity: 0.7;
  }
`

const SimilarBandBlurb = styled.div`
  font-size: 14px;
  text-align: justify;
  color: black;
`

const Divider = styled.div`
  height: 1px;
  width: 50%;
  margin: 2vh 0;
  background-color: gray;
`

