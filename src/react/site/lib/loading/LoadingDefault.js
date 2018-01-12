import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Artists extends Component {

  render () {
		const {
			message
		} = this.props

    return (
      <Container>
        {message}
		  </Container>
    )
  }
}

const Container = styled.div`
`
