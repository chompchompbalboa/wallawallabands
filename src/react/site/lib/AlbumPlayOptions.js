//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import { PlayCircleOutline, PlaylistPlay, PlaylistAdd } from 'material-ui-icons'

import { desktop } from 'src/styles/breakpoints'
import { primary } from 'src/styles/colors'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumPlayOptions extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  handlePlayClick = () => {
    console.log('Play')
  }

  handlePlaylistAddClick = () => {
    console.log('PlaylistAdd')
  }

  render() {
		const {} = this.props

    return (
			<Container>
        <IconContainer onClick={this.handlePlayClick}>
          <PlayCircleOutline />
        </IconContainer>
        <IconContainer onClick={this.handlePlaylistAddClick}>
          <PlaylistAdd />
        </IconContainer>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.7;
`

const IconContainer = styled.div`
  cursor: pointer;
  margin-left: 25%;
  @media ${desktop} {
    &:hover {
      color: ${primary};
    }
  }
`
