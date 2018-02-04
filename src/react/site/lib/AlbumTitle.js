//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class AlbumTitle extends Component {

  static propTypes = {
    title: string
  }

  static defaultProps = {
    title: "Default Album Title"
  }

  render() {
		const { title } = this.props

    return (
			<Container>
        {title}
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`
