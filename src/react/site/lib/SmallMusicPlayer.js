//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'

import DisplayToggle from 'src/react/site/lib/SmallMusicPlayerDisplayToggle.js'
import Content from 'src/react/site/lib/SmallMusicContent.js'

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
        <DisplayToggle
          contentVisible={contentVisible}
          onClick={this.toggleVisibility}
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
