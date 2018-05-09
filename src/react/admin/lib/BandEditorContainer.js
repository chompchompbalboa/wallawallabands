//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import _ from 'lodash'

import getBandBySlug from 'src/graphql/queries/getBandBySlug.gql'

import BandEditor from 'src/react/admin/lib/BandEditor'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@graphql(getBandBySlug, {
		options: (ownProps) => ({
			variables: {
        slug: ownProps.slug
      }
})})
export default class BandEditorContainer extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  newBand = {
    id: 0,
    name: "New Band",
    slug: "new-band-" + _.random(1000,9999),
    bio: "Enter in some information about the new band here",
    albums: [],
    photos: [],
    similarBands: []
  }

  render() {
		const {
      bands,
      data,
      slug
    } = this.props

    if(slug === "newBand") {
      return (
        <BandEditor
          band={this.newBand}
          bands={bands}/>
      )
    }
    else if(data.loading) {
      return "Loading"
    }
    else if(data.getBandBySlug !== "undefined") {
      const band = data.getBandBySlug
      return (
  			<BandEditor
					band={band}
          bands={bands}/>
      )
    }
  }
}
