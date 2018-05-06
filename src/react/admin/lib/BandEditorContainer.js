//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import getBandBySlug from 'src/graphql/queries/getBandBySlug.gql'

import BandEditor from 'src/react/admin/lib/BandEditor'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@graphql(getBandBySlug, {
		options: (ownProps) => ({
			variables: {
				slug: ownProps.slug
}})})
export default class BandEditorContainer extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      bands,
      data
    } = this.props

    if(data.loading) {
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
