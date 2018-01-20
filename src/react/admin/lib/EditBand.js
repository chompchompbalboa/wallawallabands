import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import TaskWrapper from 'src/react/admin/lib/TaskWrapper'

export default class EditBand extends Component {

  render() {
		const {
		} = this.props

    return (
			<TaskWrapper header="Edit Band">
			</TaskWrapper>
    )
  }
}

EditBand.propTypes = {
}

EditBand.defaultProps = {
}
