//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import DisplayToggle from 'src/react/site/lib/SmallMusicPlayerDisplayToggle.js'
import ThumbControls from 'src/react/site/lib/SmallMusicPlayerThumbControls.js'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerThumbTiles extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      contentVisible,
      toggleVisibility
    } = this.props

    return (
			<React.Fragment>
        <ThumbControls
          top="63vh"/>
        <DisplayToggle
          top="70vh"
          contentVisible={contentVisible}
          onClick={toggleVisibility}/>
			</React.Fragment>
  )}
}
