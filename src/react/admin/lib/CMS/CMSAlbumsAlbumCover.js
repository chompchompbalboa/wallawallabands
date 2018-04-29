//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import CMSText from 'src/react/admin/lib/CMS/CMSText'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSAlbumsAlbumCover extends Component {

  static propTypes = {
    cover: string,
    onCoverChange: func
  }

  static defaultProps = {
    cover: "/default-1.jpg",
    onCoverChange: () => console.warn("You need to define an onCoverChange function for CMSAlbumsAlbumCover to work correctly")
  }

  render() {
		const {
      cover,
      onCoverChange
    } = this.props

    return (
			<Container>
        <CMSText
          label="Cover Image URL"
          name="coverImage"
          value={cover}
          placeholder="Cover Image URL"
          onChange={onCoverChange}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-bottom: 2vh;
`
