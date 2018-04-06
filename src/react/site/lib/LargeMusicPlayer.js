//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'

import LargeMusicPlayerControls from 'src/react/site/lib/LargeMusicPlayerControls'
import LargeMusicPlayerSongDetails from 'src/react/site/lib/LargeMusicPlayerSongDetails'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    active: state.queue.active
}))
export default class LargeMusicPlayer extends Component {

  state = {
    visible: false
  }

  static propTypes = {
  }

  static defaultProps = {
  }

  componentWillReceiveProps = (nextProps) => {
    if (Object.keys(nextProps.active).length > 0) {
      this.setState({
        visible: true
      })
    }
  }

  render() {
		const {} = this.props
    const { visible } = this.state

    return (
			<Container visible={visible}>
        <LargeMusicPlayerControls />
        <LargeMusicPlayerSongDetails />
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  display: none;
  @media ${tabletLandscape} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: ${props => props.visible ? '0' : '-10vh'};
    left: 0;
    width: 100vw;
    height: 10vh;
    background-color: rgba(50,50,50,0.85);
    transition: top 0.5s;
  }
`
