import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Layout from 'src/react/layouts/Default'
import MusicPlayer from 'src/react/components/MusicPlayer'

@connect()
export default class Artists extends Component {

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
