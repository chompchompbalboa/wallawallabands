//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'
import _ from 'lodash'

import deleteBand from 'src/graphql/mutations/deleteBand.gql'
import getBands from 'src/graphql/queries/getBands.gql'

import BandEditor from 'src/react/admin/lib/BandEditorContainer'
import ChooseBand from 'src/react/admin/lib/ChooseBand'
import TaskWrapper from 'src/react/admin/lib/TaskWrapper'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@compose(
  graphql(getBands, 
    {
      name: "getBands",
      options: {fetchPolicy: "network-only", ssr: true}
    }),
  graphql(deleteBand, {name: "deleteBand"})
)
export default class Bands extends Component {

  state = {
    activeBandSlug: null
  }

  static propTypes = {}
  static defaultProps = {}

  addBand = () => {
    this.setState({
      activeBandSlug: "newBand"
    })
  }

  deleteBand = () => {
    const { deleteBand, getBands } = this.props
    const { activeBandSlug } = this.state
    const bands = getBands.allBands
    const slug = (activeBandSlug === null ? bands[0].slug : activeBandSlug)
    const activeBand = _.find(bands, {slug: slug})
    deleteBand({
      variables: {
        id: activeBand.id
      }
    }).then(response => {
      const { data: {deleteBand: { success }}} = response
      if(success) {
        this.setState({
          activeBandSlug: bands[0].slug
        })
      }
    })
  }

  setActiveBand = (slug) => {
    this.setState({
      activeBandSlug: slug
    })
  }

  render = () => {
		const {
      getBands
		} = this.props

    if(getBands.loading) {
      return (
        <TaskWrapper header="Bands" />
      )
    }
    else {
      const bands = getBands.allBands
      const { activeBandSlug } = this.state
      const slug = (activeBandSlug === null ? bands[0].slug : activeBandSlug)
      return (
  			<TaskWrapper header="Bands">
          <ChooseBand 
            activeBandSlug={slug}
            bands={bands} 
            addBand={this.addBand}
            deleteBand={this.deleteBand}
            setActiveBand={this.setActiveBand}/>
          <BandEditor 
            bands={bands} 
            slug={slug}/>
  			</TaskWrapper>
      )
    }
  }
}
