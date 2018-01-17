import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class TaskWrapper extends Component {

  render() {
		const {
      children
		} = this.props

    return (
			<Container>
        {children}
			</Container>
    )
  }
}

const Container = styled.div`
`

TaskWrapper.propTypes = {
}

TaskWrapper.defaultProps = {
}
