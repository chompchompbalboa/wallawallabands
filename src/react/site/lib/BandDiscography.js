//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, bool, shape, string } from 'prop-types'
import styled from 'styled-components'

import albumCover1 from 'static/img/album-covers/1.jpg'
import albumCover2 from 'static/img/album-covers/2.jpg'

import { padding } from 'src/styles/layout'

import Album from 'src/react/site/lib/BandDiscographyAlbum'
import Tile from 'src/react/site/lib/BandTile'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class BandDiscography extends Component {

  static propTypes = {
    albums: arrayOf(shape({
      cover: string,
      title: string,
      year: string,
      songs: arrayOf(shape({
        title: string,
        length: string,
        playable: bool
  }))}))}

  static defaultProps = {
    albums: [
      {
      cover: albumCover1,
      title: "Default Album 1",
      year: "2010",
      songs: [
        {title: "Default Song 1", length: "3:30", playable: false},
        {title: "Default Song 2", length: "3:31", playable: false}]},
      {
      cover: albumCover2,
      title: "Default Album 2",
      year: "2011",
      songs: [
        {title: "Default Song 1", length: "3:32", playable: true},
        {title: "Default Song 2", length: "3:33", playable: false}]},
  ]}

  render() {
		const { albums, first } = this.props

    return (
			<Container header="Discography" first={first}>
        {albums.map((album, index) => {
          return (
            <Album
              key={index}
              album={album}/>
          )
        })
        }
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled(Tile)`
`
