//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { } from 'prop-types'
import styled from 'styled-components'


import SmallMusicPlayer from 'src/react/site/lib/SmallMusicPlayer'
import LargeMusicPlayer from 'src/react/site/lib/LargeMusicPlayer'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect()
export default class Dashboard extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {} = this.props

    return (
			<Container>
        <SmallMusicPlayer />
        <LargeMusicPlayer />
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
