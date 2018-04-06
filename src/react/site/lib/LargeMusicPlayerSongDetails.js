//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    active: state.queue.active,
}))
export default class LargeMusicPlayerSongDetails extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      active
    } = this.props

    return (
			<Container>
        {active.title}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 50%;
  user-select: none;
`
