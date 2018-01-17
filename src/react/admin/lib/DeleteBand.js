import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import TaskWrapper from 'src/react/admin/lib/TaskWrapper'

export default class AddBand extends Component {

  render() {
		const {
		} = this.props

    return (
			<TaskWrapper>
        Delete band
			</TaskWrapper>
    )
  }
}

const Container = styled.div`
`

AddBand.propTypes = {
}

AddBand.defaultProps = {
}
