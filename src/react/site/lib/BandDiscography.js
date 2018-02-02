//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import albumCover1 from 'static/img/album-covers/1.jpg'

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
      songs: arrayOf(shape({
        title: string
  }))}))}

  static defaultProps = {
    albums: [
      {
      cover: albumCover1,
      name: "Default Album",
      songs: [
        {title: "Default Song"}
  ]}]}

  render() {
		const { albums, first } = this.props
    console.log(albums)

    return (
			<Container header="Discography" first={first}>
        {albums.map((album, index) => {
          let { songs } = album
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
