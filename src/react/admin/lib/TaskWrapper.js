import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class TaskWrapper extends Component {

  render() {
		const {
      header,
      children
		} = this.props

    return (
			<Container>
        <Header>{header}</Header>
        {children}
			</Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
`

TaskWrapper.propTypes = {
  header: PropTypes.string
}

TaskWrapper.defaultProps = {
  header: "Add Band"
}
