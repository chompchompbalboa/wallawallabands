//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import Controls from 'src/react/site/lib/SmallMusicPlayerQueueControls'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerQueueActive extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      active,
      album
    } = this.props
    const albumCover = (typeof album.cover === "undefined" ? '' : album.cover)
    const albumTitle = (typeof album.title === "undefined" ? '' : album.title)
    const bandName = (typeof album.band === "undefined" ? '' : album.band)
    const songTitle = (typeof active.title === "undefined" ? 'Choose a song to play!' : active.title)

    return (
			<Container>
        <AlbumCover src={albumCover}/>
        <SongTitle>{songTitle}</SongTitle>
        <AlbumTitle>{bandName} - {albumTitle}</AlbumTitle>
        <Controls />
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SongTitle = styled.div`
  margin-top: 2vh;
  font-size: 16px;
`

const AlbumTitle = styled.div`
  margin-bottom: 2vh;
  font-size: 18px;
  font-weight: bold;
`

const AlbumCover = styled.img`
  height: 60%;
  width: auto;
`
