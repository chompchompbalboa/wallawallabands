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
export default class CMSAlbumsAlbumYear extends Component {

  static propTypes = {
    year: string,
    updateYear: func
  }

  static defaultProps = {
    year: "2018",
    updateYear: () => console.warn("You need to define an updateYear function for the CMSAlbumsAlbumYear component to work correctly")
  }

  onChange = (e) => {
    const { updateYear } = this.props
    updateYear(e.target.value)
  }

  render() {
		const {
      year
    } = this.props

    return (
      <CMSText
        name="year"
        value={year}
        placeholder="Year"
        onChange={this.onChange}/>
  )}
}
