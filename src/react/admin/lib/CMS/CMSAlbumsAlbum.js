//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, number, string, shape} from 'prop-types'
import styled from 'styled-components'

import Cover from 'src/react/admin/lib/CMS/CMSAlbumsAlbumCover'
import Songs from 'src/react/admin/lib/CMS/CMSAlbumsAlbumSongs'
import Title from 'src/react/admin/lib/CMS/CMSAlbumsAlbumTitle'
import Year from 'src/react/admin/lib/CMS/CMSAlbumsAlbumYear'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSAlbumsAlbum extends Component {

  static propTypes = {
    album: shape({
      id: number,
      cover: string,
      title: string,
      year: string,
      songs: arrayOf(shape({
        id: number,
        title: string,
        length: string,
        playable: string
    }))}),
    updateAlbum: func
  }

  static defaultProps = {
    album: {
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
    ]},
    updateAlbum: () => console.warn("You need to define an updateAlbum function for the CMSAlbumsAlbum component to work correctly")
  }

  updateTitle = (newTitle) => {
    const { album, index, updateAlbum } = this.props
    let newAlbum = Object.assign({}, album)
    newAlbum.title = newTitle
    updateAlbum(newAlbum, index)
  }

  updateYear = (newYear) => {
    const { album, index, updateAlbum } = this.props
    let newAlbum = Object.assign({}, album)
    newAlbum.year = newYear
    updateAlbum(newAlbum, index)
  }

  render() {
		const {
      index,
      album: {
        cover,
        title,
        year,
        songs
      }
    } = this.props

    return (
			<Container>
        <Header>{title}</Header>
        <AlbumInfoContainer>
          <CoverPhoto
            src={cover}/>
          <AlbumInfoContainerInputs>
            <Cover 
              cover={cover}/>
            <Title
              title={title}
              updateTitle={this.updateTitle}/>
            <Year
              year={year}
              updateYear={this.updateYear}/>
          </AlbumInfoContainerInputs>
        </AlbumInfoContainer>
        <Songs
          songs={songs}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  margin: 2vh 0;
`

const AlbumInfoContainer = styled.div`
  width: 100%;
  display: flex;
`

const AlbumInfoContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CoverPhoto = styled.img`
  width: auto;
  height: 22vh;
  margin-right: 2vh; 
`
