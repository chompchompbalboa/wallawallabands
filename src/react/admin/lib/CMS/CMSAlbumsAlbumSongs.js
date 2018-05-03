//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { primary } from 'src/styles/colors'

import CMSText from 'src/react/admin/lib/CMS/CMSText'
import Icon from 'src/react/lib/Icon'
import { xNoCircle } from '../../../../styles/icons';

import { Button } from 'semantic-ui-react'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSAlbumsAlbumSongs extends Component {

  static propTypes = {
    songs: arrayOf(shape({
      id: number,
      title: string,
      length: string,
      audio: string
    }))
  }

  static defaultProps = {
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
  ]}

  addSong = () => {
    const { songs, updateSongs } = this.props
    let nextTrackNumber
    try {
      nextTrackNumber = _.maxBy(songs, (song) => {return song.trackNumber})['trackNumber'] + 1
    }
    catch(e) {
      nextTrackNumber = 1
    }
    let newSongs = songs.slice()
    newSongs.push({
      id: _.random(1000000, 10000000),
      trackNumber: nextTrackNumber,
      title: "New Track",
      length: "3:00",
      audio: ""
    })
    updateSongs(newSongs)
  }

  updateSongs = (e, id, key) => {
    const { songs, updateSongs } = this.props
    let newSongs = []
    songs.map(song => {
      let updatedSong = Object.assign({}, song)
      if(song.id === id) {
        const newValue = (key === 'trackNumber' ? Number(e.target.value) : e.target.value)
        updatedSong[key] = newValue
      }
      newSongs.push(updatedSong)
    })
    updateSongs(newSongs)
  }

  render() {
		const {
      albumId,
      songs,
      deleteAlbum,
      deleteSong
    } = this.props
    const sortedSongs = _.sortBy(songs, ['trackNumber'])

    return (
			<Container>
        <Header>Songs</Header>
        {sortedSongs.map((song, index) => {
            return (
              <Song key={index}>
                <TrackNumberContainer>
                  <CMSText
                    disabled
                    label="#"
                    name="trackNumber"
                    value={song.trackNumber + ""}
                    placeholder="#"
                    onChange={(e) => this.updateSongs(e, song.id, 'trackNumber')}
                    style={{width: '3.5vw'}}/>
                </TrackNumberContainer>
                <TitleContainer>
                  <CMSText
                    label="Title"
                    name="title"
                    value={song.title}
                    placeholder="Title"
                    onChange={(e) => this.updateSongs(e, song.id, 'title')}
                    style={{width: '12vw'}}/>
                </TitleContainer>
                <LengthContainer>
                  <CMSText
                    label="Length"
                    name="length"
                    value={song.length}
                    placeholder="Length"
                    onChange={(e) => this.updateSongs(e, song.id, 'length')}
                    style={{width: '4.5vw'}}/>
                </LengthContainer>
                <URLContainer>
                  <CMSText
                    label="URL"
                    name="url"
                    value={song.audio}
                    placeholder="URL"
                    onChange={(e) => this.updateSongs(e, song.id, 'audio')}
                    style={{width: '18vw'}}/>
                </URLContainer>
                <DeleteContainer
                  onClick={() => deleteSong(song.id)}
                  >
                  <Icon 
                    icon={xNoCircle}/>
                </DeleteContainer>
              </Song>
        )})}
        <ButtonsContainer>
          <AddSong
            onClick={() => this.addSong()}
            size="mini"
            style={{width: '10vw', marginTop: '2vh'}}>
            Add Song
          </AddSong>
          <DeleteAlbum
            onClick={() => deleteAlbum(albumId)}
            size="mini"
            style={{width: '10vw', marginTop: '2vh', backgroundColor: primary, color: 'white'}}>
            Delete Album
          </DeleteAlbum>
        </ButtonsContainer>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Header = styled.h5`
  margin-bottom: 1vh;
`

const Song = styled.div`
  margin: 0.5vh 0;
  width: 100%;
  display: flex;
`

const InputContainer = styled.div`
`

const TrackNumberContainer = InputContainer.extend`
  width: 6.75vw;
`
const TitleContainer = InputContainer.extend`
  width: 17vw;
`

const LengthContainer = InputContainer.extend`
  width: 10.5vw;
`

const URLContainer = InputContainer.extend`
  width: 22vw;
`

const DeleteContainer = InputContainer.extend`
  cursor: pointer;
  width: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonsContainer = styled.div``

const AddSong = styled(Button)`
  margin-right: 2vh;
`

const DeleteAlbum = styled(Button)`
`
