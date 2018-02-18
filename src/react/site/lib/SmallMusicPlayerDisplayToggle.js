//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

import { musicNote, xCircle } from 'src/styles/icons'

import Icon from 'src/react/lib/Icon'
import ThumbTile from 'src/react/site/lib/SmallMusicPlayerThumbTile'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerDisplayToggle extends Component {

  static propTypes = {
    contentVisible: bool
  }

  static defaultProps = {
    contentVisible: false
  }

  render() {
		const {
      contentVisible,
      top,
      ...rest
    } = this.props

    return (
			<ThumbTile
        top={top}
        {...rest}>
        <Icon
          icon={contentVisible ? xCircle : musicNote}
          color={"white"}
          size={"20px"}/>
      </ThumbTile>
  )}
}
