//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LoadingDefault extends Component {

  static propTypes = {
    src: string
  }

  static defaultProps = {
    src: "icons/loading.svg"
  }

  render () {
		const {
			src
		} = this.props

    return (
      <Container>
		  </Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingGif = styled.img`
  width: 15vh;
  height: 15vh;
`
