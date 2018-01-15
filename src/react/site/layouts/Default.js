import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import MusicPlayer from 'src/react/site/containers/MusicPlayer'

@connect()
export default class Layout extends Component {

  render () {
		const {
			children
		} = this.props

    return (
      <Container>
        <Menu>
					<Link to="/">Home</Link>
					<Link to="/artists">Artists</Link>
					<Link to="/admin">Login</Link>
				</Menu>
				{children}
				<MusicPlayer />
		  </Container>
    )
  }
}

const Container = styled.div`
`

const Menu = styled.div`
`
