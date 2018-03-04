//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import styled from 'styled-components'

import DeleteButton from 'src/react/lib/DeleteButton'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSPhotosExistingPhoto extends Component {

  static propTypes = {
    id: number,
    src: string,
    onDelete: func
  }

  static defaultProps = {
    id: 0,
    src: "default-1.jpg",
    onDelete: () => console.warn("You need to define an onDelete function for CMSPhotosExistingPhoto to work correctly")
  }

  render() {
		const {
      id,
      src,
      onDelete
    } = this.props

    return (
      <Container>
        <DeleteButton
          onClick={() => onDelete(id)}
          size={4}/>
			  <Photo
          src={src}/>
      </Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 30%;
`

const Photo = styled.img`
  top: 0;
  left: 0;
  width: 100%
`
