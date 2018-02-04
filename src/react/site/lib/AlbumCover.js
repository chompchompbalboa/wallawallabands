//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import albumCover1 from 'static/img/album-covers/1.jpg'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumCover extends Component {

  static propTypes = {
    height: string,
    src: string,
    width: string,
  }

  static defaultProps = {
    height: "100%",
    src: albumCover1,
    width: "100%"
  }

  render() {
		const { height, src, width } = this.props

    return (
			<Container height={height} src={src} width={width} />
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
