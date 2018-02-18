//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'

import Content from 'src/react/site/lib/SmallMusicPlayerContent.js'
import ThumbTiles from 'src/react/site/lib/SmallMusicPlayerThumbTiles.js'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayer extends Component {

  state = {
    contentVisible: false
  }

  static propTypes = {
  }

  static defaultProps = {
  }

  toggleVisibility = () => {
    const newContentVisible = !this.state.contentVisible
    this.setState({
      contentVisible: newContentVisible
    })
  }

  render() {
		const {} = this.props
    const { contentVisible } = this.state

    return (
			<Container>
        <ThumbTiles
          contentVisible={contentVisible}
          toggleVisibility={this.toggleVisibility}
          />
        <Content
          visible={contentVisible}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  @media ${tabletLandscape} {
    display: none;
  }
`
