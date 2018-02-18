//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { playAudio } from 'store/audioActions'
import { clearQueue, startAlbumFromSong } from 'store/queueActions'

import { desktop } from 'src/styles/breakpoints'
import { primary } from 'src/styles/colors'
import { playCircle, playlistAdd } from 'src/styles/icons'

import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect()
export default class AlbumPlayOptions extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  handlePlayClick = () => {
    const { dispatch, album, song } = this.props
    dispatch(
      startAlbumFromSong(album, song))
    dispatch(
      playAudio()
  )}

  handlePlaylistAddClick = () => {
    const { dispatch } = this.props
    dispatch(clearQueue())
  }

  render() {
		const {
      album,
      song
    } = this.props
    const playable = !(song.audio === null)


    return (
			<Container>
        <IconContainer
          playable={playable}
          onClick={playable ? this.handlePlayClick : null}>
          <Icon
            icon={playCircle}
            color={"black"}
            size={"20px"}/>
        </IconContainer>
        <IconContainer
          playable={playable}
          onClick={playable ? this.handlePlaylistAddClick: null}>
          <Icon
            icon={playlistAdd}
            color={"black"}
            size={"20px"}/>
        </IconContainer>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 30%;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.7;
`

const IconContainer = styled.div`
  display: ${props => props.playable ? 'inline' : 'none'};
  cursor: pointer;
  margin-left: 25%;
  @media ${desktop} {
    &:hover {
      color: ${primary};
    }
  }
`
