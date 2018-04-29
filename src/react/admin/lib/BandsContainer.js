//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'

import getBands from 'src/graphql/queries/getBands.gql'

import BandEditor from 'src/react/admin/lib/BandEditorContainer'
import ChooseBand from 'src/react/admin/lib/ChooseBand'
import TaskWrapper from 'src/react/admin/lib/TaskWrapper'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@compose(
  graphql(getBands, {name: "getBands"})
)
export default class Bands extends Component {

  state = {
    activeBandSlug: null
  }

  static propTypes = {}
  static defaultProps = {}

  setActiveBand = (slug) => {
    console.log(slug)
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
          <ChooseBand bands={bands} setActiveBand={this.setActiveBand}/>
          <BandEditor slug={slug}/>
  			</TaskWrapper>
      )
    }
  }
}
