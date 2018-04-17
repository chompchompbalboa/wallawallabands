import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from 'src/react/site/lib/Menu'
import MusicPlayer from 'src/react/site/containers/MusicPlayer'

export default class Layout extends Component {

  render () {
		const {
			children
		} = this.props

    return (
      <Container>
        <Menu />
        {children}
        <MusicPlayer />
		  </Container>
    )
  }
}

const Container = styled.div`
  padding-top: calc(9vh + 5px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
