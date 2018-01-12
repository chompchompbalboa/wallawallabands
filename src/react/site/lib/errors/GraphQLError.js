import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

@connect()
export default class Artists extends Component {

  render () {
		const {
			code
		} = this.props

    return (
      <Container>
        {code}
		  </Container>
    )
  }
}

const Container = styled.div`
`
