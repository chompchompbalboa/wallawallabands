//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeQueueActive extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      active: { title }
    } = this.props
    const text = (typeof title === "undefined" ? 'Choose a song to play!' : title)

    return (
			<Container>
        <Active>{text}</Active>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`

const Active = styled.div``
