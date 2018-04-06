import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletPortrait } from 'src/styles/breakpoints'
import { padding } from 'src/styles/layout'

import Tile from 'src/react/site/lib/BandTile'

export default class BandPhotos extends Component {

  render() {
		const {
      first,
      photos
		} = this.props

    return (
			<Container header="Photos" first={first}>
        <PhotosContainer>
          {photos.map((photo, index) => {
            return (<Photo key={index} src={photo.src}/>)
          })}
        </PhotosContainer>
			</Container>
    )
  }
}

const Container = styled(Tile)`
`

const PhotosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`

const Photo = styled.img`
  width: calc(100% - ${padding});
  margin-bottom: ${padding};
  &:last-child {
    margin-bottom: 0;
  }
`

BandPhotos.propTypes = {
}

BandPhotos.defaultProps = {
}
