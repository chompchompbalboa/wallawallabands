//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'

import CMSText from 'src/react/admin/lib/CMS/CMSText'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSAlbumsAlbumTitle extends Component {

  static propTypes = {
    title: string,
    updateTitle: func
  }

  static defaultProps = {
    title: "Default Title",
    updateTitle: () => console.warn("You need to define an updateTitle function for the CMSAlbumsAlbumTitle component to work correctly")
  }

  onChange = (e) => {
    const { updateTitle } = this.props
    updateTitle(e.target.value)
  }

  render() {
		const {
      title
    } = this.props

    return (
      <CMSText
        name="title"
        value={title}
        placeholder="Title"
        onChange={this.onChange}/>
  )}
}
