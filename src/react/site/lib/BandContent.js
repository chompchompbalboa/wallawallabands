import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import {padding} from 'src/styles/layout'
import { tabletLandscape } from 'src/styles/breakpoints'

import BandBio from 'src/react/site/lib/BandBio'
import BandDiscography from 'src/react/site/lib/BandDiscography'
import BandSidebar from 'src/react/site/lib/BandSidebar'
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
            albums={band.albums}
            bandName={band.name}/>
          <BandPhotos
            first={active === "PHOTOS"}
            photos={band.photos}/>
        </LeftColumn>
        <RightColumn>
          <BandSidebar 
            band={band}/>
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
    width: calc(60% - (${padding} / 2));
  }
`
const RightColumn = Column.extend`
  display: none;
  @media ${tabletLandscape} {
    width: calc(40% - (${padding} / 2));
    display: flex;
  }
`

BandContent.propTypes = {
}

BandContent.defaultProps = {
}
