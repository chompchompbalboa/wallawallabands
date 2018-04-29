//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { desktop } from 'src/styles/breakpoints'
import { primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import PlayOptions from 'src/react/site/lib/AlbumPlayOptions'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumSongs extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    const { album, songs } = this.props
    const sortedSongs = _.sortBy(songs, ['trackNumber'])

    return (
			<Container>
        {sortedSongs.map((song, index) =>{
          return (
            <Song key={index}>
              <Track>{index + 1}.</Track>
              <Title>{song.title}</Title>
              <Length>{song.length}</Length>
              <PlayOptions
                album={album}
                song={song}/>
            </Song>)
        })}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-top: ${padding};
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Song = styled.div`
  margin: calc(${padding} / 5) 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SongDetail = styled.div`
  display: flex;
  align-items: center;
`

const Track = SongDetail.extend`
  width: 5%;
  justify-content: flex-start;
`

const Title = SongDetail.extend`
  width: 50%;
  justify-content: flex-start;
`

const Length = SongDetail.extend`
  width: 5%;
  justify-content: flex-end;
`
