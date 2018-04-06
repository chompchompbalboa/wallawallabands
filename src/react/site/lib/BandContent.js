import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'

import BandBio from 'src/react/site/lib/BandBio'
import BandDiscography from 'src/react/site/lib/BandDiscography'
import LargeQueue from 'src/react/site/lib/LargeQueue'
import BandPhotos from 'src/react/site/lib/BandPhotos'

export default class BandContent extends Component {

  componentWillUpdate = () => {
  }

  render() {
		const {
      active,
      band
		} = this.props

    return (
			<Container>
        <LeftColumn>
          <BandBio
            first={active === "BIO"}
            bio={band.bio}/>
          <BandDiscography
            first={active === "DISCOGRAPHY"}
            albums={band.albums}/>
          <BandPhotos
            first={active === "PHOTOS"}
            photos={band.photos}/>
        </LeftColumn>
        <RightColumn>
          <LargeQueue />
        </RightColumn>
			</Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-weight: 300;
  letter-spacing: 1.25;
`

const Column = styled.div`
`

const LeftColumn = Column.extend`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${tabletLandscape} {
    width: 60%;
  }
`
const RightColumn = Column.extend`
  display: none;
  @media ${tabletLandscape} {
    width: 40%;
    display: flex;
  }
`

BandContent.propTypes = {
}

BandContent.defaultProps = {
}
