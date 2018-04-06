//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import styled from 'styled-components'

import CMSText from 'src/react/admin/lib/CMS/CMSText'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSSong extends Component {

  static propTypes = {
    song: arrayOf(shape({
      id: number,
      title: string,
      length: string,
      audio: string
  }))}

  static defaultProps = {
    song: {
      id: 1,
      title: "I Like My Heart Broken",
      length: "3:13",
      audio: "audio/the-blast/lock-down-lights-out/01 I Like My Heart Broken.mp3"
  }}

  render() {
		const {
      song: {
        title,
        length,
        audio
    }} = this.props

    return (
			<Container>
        <CMSText
          name="title"/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
