//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import TaskWrapper from 'src/react/admin/lib/TaskWrapper'
import Select from 'react-select'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class DeleteBand extends Component {

  render() {
		const {
		} = this.props

    return (
			<TaskWrapper header="Delete Band">
        <Select />
			</TaskWrapper>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
