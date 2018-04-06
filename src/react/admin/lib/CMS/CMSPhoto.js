//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSPhoto extends Component {

  static propTypes = {
    src: string,
    width: string
  }

  static defaultProps = {
    src: "default-1.jpg",
    width: "10vw"
  }

  render() {
		const {
      src,
      width
    } = this.props

    return (
      <Container
        containerWidth={width}
        onClick={() => this.hiddenInput.click()}>
			  <Photo
          src={src}/>
        <HiddenInput
          innerRef={c => this.hiddenInput = c}
          type="file"/>
      </Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  width: ${props => props.containerWidth};
`

const Photo = styled.img`
  top: 0;
  left: 0;
  width: 100%
`

const HiddenInput = styled.input`
  display: none;
`
