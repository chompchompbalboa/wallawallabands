//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { shape, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeMusicPlayerSongDetails extends Component {

  static propTypes = {
    active: shape({
      title: string
    }),
    album: shape({
      band: string,
      cover: string
    })
  }

  static defaultProps = {
    active: {
      title: "Default Song"
    },
    album: {
      band: "Default Band",
      cover: "img/default.jpeg"
    }
  }

  render() {
		const {
      active,
      album
    } = this.props

    return (
			<Container>
        <AlbumCover src={album.cover} />
        <SongTitle>{album.band} - {active.title}</SongTitle>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  height: 100%;
  width: 50%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const AlbumCover = styled.img`
  height: 100%;
  width: auto;
  margin-right: 2vw;
`

const SongTitle = styled.div`
`