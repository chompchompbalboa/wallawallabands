//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import styled from 'styled-components'

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
        id: number,
        title: string,
        length: string,
        playable: string
  }))}))}

  static defaultProps = {
    albums: [
      {
      id: 1,
      cover: "img/album-covers/theBlast_lockDownLightsOut.jpg",
      title: "Lock Down Lights Out",
      year: "2007",
      songs: [
        {id: 1, title: "I Like My Heart Broken", length: "3:13", audio: "audio/the-blast/lock-down-lights-out/01 I Like My Heart Broken.mp3"},
        {id: 2, title: "Drink Me Beautiful", length: "3:33", audio: "audio/the-blast/lock-down-lights-out/02 Drink Me Beautiful.mp3"},
        {id: 3, title: "Back Into The Woods", length: "2:58", audio: "audio/the-blast/lock-down-lights-out/03 Back Into The Woods.mp3"},
        {id: 4, title: "Little Lover", length: "3:36", audio: "audio/the-blast/lock-down-lights-out/04 Little Lover.mp3"},
        {id: 5, title: "My Apologies", length: "2:17", audio: "audio/the-blast/lock-down-lights-out/05 My Apologies.mp3"},
        {id: 6, title: "Acid Queen", length: "3:09", audio: "audio/the-blast/lock-down-lights-out/06 Acid Queen.mp3"},
        {id: 7, title: "Lock Down Lights Out", length: "3:29", audio: "audio/the-blast/lock-down-lights-out/07 Lock Down Lights Out.mp3"},
        {id: 8, title: "Trouble", length: "2:51", audio: "audio/the-blast/lock-down-lights-out/08 Trouble.mp3"},
        {id: 9, title: "Jam On District", length: "3:47", audio: "audio/the-blast/lock-down-lights-out/09 Jam On District.mp3"},
        {id: 10, title: "Rocky Bottom", length: "2:11", audio: "audio/the-blast/lock-down-lights-out/10 Rock Bottom.mp3"},
        {id: 11, title: "New Orleans", length: "3:23", audio: "audio/the-blast/lock-down-lights-out/11 New Orleans.mp3"},
        {id: 12, title: "Sex Kitten", length: "3:04", audio: "audio/the-blast/lock-down-lights-out/12 Sex Kitten.mp3"},
        {id: 12, title: "Dubbs", length: "3:27", audio: "audio/the-blast/lock-down-lights-out/13 Dubbs.mp3"},
        {id: 12, title: "Love You Til You Bleed", length: "8:26", audio: "audio/the-blast/lock-down-lights-out/14 Love You Til You Bleed.mp3"}a
  ]}]}

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
