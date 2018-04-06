//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import CMSPhoto from 'src/react/admin/lib/CMS/CMSPhoto'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSAlbumsAlbumCover extends Component {

  static propTypes = {
    cover: string
  }

  static defaultProps = {
    cover: "/default-1.jpg"
  }

  render() {
		const {
      cover
    } = this.props

    return (
			<Container>
        <CMSPhoto
          src={cover}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
