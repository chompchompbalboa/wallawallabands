import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

@connect()
export default class Layout extends Component {

  render () {
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

const Menu = styled.div`
`
