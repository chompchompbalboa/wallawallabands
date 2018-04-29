//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import styled from 'styled-components'

import CMSAlbumsAlbum from 'src/react/admin/lib/CMS/CMSAlbumsAlbum'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSAlbums extends Component {

  state = {
    albums: this.props.albums
  }

  static propTypes = {
    albums: arrayOf(shape({
      id: number,
      cover: string,
      title: string,
      year: string,
      songs: arrayOf(shape({
        id: number,
        title: string,
        length: string,
        playable: string
    }))})),
    updateAlbums: func
  }

  static defaultProps = {
    albums: [
      {
      id: 1,
      cover: "img/album-covers/theBlast_lockDownLightsOut.jpg",
      title: "Lock Down Lights Out",
      year: "2007",
      songs: [
        {id: 1, trackNumber: 1, title: "I Like My Heart Broken", length: "3:13", audio: "audio/the-blast/lock-down-lights-out/01 I Like My Heart Broken.mp3"},
        {id: 2, trackNumber: 2, title: "Drink Me Beautiful", length: "3:33", audio: "audio/the-blast/lock-down-lights-out/02 Drink Me Beautiful.mp3"},
        {id: 3, trackNumber: 3, title: "Back Into The Woods", length: "2:58", audio: "audio/the-blast/lock-down-lights-out/03 Back Into The Woods.mp3"},
        {id: 4, trackNumber: 4, title: "Little Lover", length: "3:36", audio: "audio/the-blast/lock-down-lights-out/04 Little Lover.mp3"},
        {id: 5, trackNumber: 5, title: "My Apologies", length: "2:17", audio: "audio/the-blast/lock-down-lights-out/05 My Apologies.mp3"},
        {id: 6, trackNumber: 6, title: "Acid Queen", length: "3:09", audio: "audio/the-blast/lock-down-lights-out/06 Acid Queen.mp3"},
        {id: 7, trackNumber: 7, title: "Lock Down Lights Out", length: "3:29", audio: "audio/the-blast/lock-down-lights-out/07 Lock Down Lights Out.mp3"},
        {id: 8, trackNumber: 8, title: "Trouble", length: "2:51", audio: "audio/the-blast/lock-down-lights-out/08 Trouble.mp3"},
        {id: 9, trackNumber: 9, title: "Jam On District", length: "3:47", audio: "audio/the-blast/lock-down-lights-out/09 Jam On District.mp3"},
        {id: 10, trackNumber: 10, title: "Rocky Bottom", length: "2:11", audio: "audio/the-blast/lock-down-lights-out/10 Rock Bottom.mp3"},
        {id: 11, trackNumber: 11, title: "New Orleans", length: "3:23", audio: "audio/the-blast/lock-down-lights-out/11 New Orleans.mp3"},
        {id: 12, trackNumber: 12, title: "Sex Kitten", length: "3:04", audio: "audio/the-blast/lock-down-lights-out/12 Sex Kitten.mp3"},
        {id: 12, trackNumber: 13, title: "Dubbs", length: "3:27", audio: "audio/the-blast/lock-down-lights-out/13 Dubbs.mp3"},
        {id: 12, trackNumber: 14, title: "Love You Til You Bleed", length: "8:26", audio: "audio/the-blast/lock-down-lights-out/14 Love You Til You Bleed.mp3"}
    ]}],
    updateAlbums: () => console.warn("You need to define an updateAlbums function for the CMSAlbums component to work correctly")
  }

  updateAlbum = (album, index) => {
    const { albums, updateAlbums } = this.props
    let newAlbums = albums.slice()
    newAlbums[index] = album
    updateAlbums(newAlbums)
  }

  render() {
		const {
      albums
		} = this.props

    return (
      <Container>
        {albums.map((album, index) => {
          return (
            <CMSAlbumsAlbum
              key={index}
              index={index}
              album={album}
              updateAlbum={this.updateAlbum}/>
        )})}
      </Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
`
