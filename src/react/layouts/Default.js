import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Layout from 'src/react/layouts/Default'

@connect()
export default class Artists extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

  render () {
		const {
			children
		} = this.props

    return (
      <Container>
        <Menu>
					<Link to="/">Home</Link>
					<Link to="/artists">Artists</Link>
				</Menu>
				{ children }
		  </Container>
    )
  }
}

const Container = styled.div`
`

const Menu = styled.div`
`
