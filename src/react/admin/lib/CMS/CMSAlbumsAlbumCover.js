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
    updateCover: () => console.warn("You need to define an updateCover function for CMSAlbumsAlbumCover to work correctly")
  }

  onChange = (e) => {
    const { updateCover } = this.props
    updateCover(e.target.value)
  }

  render() {
		const {
      cover
    } = this.props

    return (
			<Container>
        <CMSText
          label="Cover Image URL"
          name="coverImage"
          value={cover}
          placeholder="Cover Image URL"
          onChange={this.onChange}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-bottom: 2vh;
`
