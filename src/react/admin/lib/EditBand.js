import React, { Component } from 'react'
import { } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'

import getBands from 'src/graphql/queries/getBands.gql'

import BandEditor from 'src/react/admin/lib/BandEditorContainer'
import ChooseBand from 'src/react/admin/lib/ChooseBand'
import TaskWrapper from 'src/react/admin/lib/TaskWrapper'

const HEADER = "Edit Band"

@compose(
  graphql(getBands, {name: "getBands"}),
)
export default class EditBand extends Component {

  state = {
    activeBandSlug: null
  }

  static propTypes = {}
  static defaultProps = {}

  setActiveBand = (slug) => {
    this.setState({
      activeBandSlug: slug
    })
  }

  render() {
		const {
      getBands
		} = this.props

    if(getBands.loading) {
      return (
        <TaskWrapper header={HEADER} />
      )
    }
    else {
      const bands = getBands.allBands
      const { activeBandSlug } = this.state
      return (
  			<TaskWrapper header={HEADER}>
          <ChooseBand bands={bands} setActiveBand={this.setActiveBand}/>
          {activeBandSlug === null ? "" : <BandEditor slug={activeBandSlug}/>}
  			</TaskWrapper>
      )
    }
  }
}
