//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import styled from 'styled-components'

import CMSText from 'src/react/admin/lib/CMS/CMSText'
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
    onUrlChange: () => console.warn("You need to define an onUrlChange function for CMSPhotosExistingPhoto to work correctly")
  }

  render() {
		const {
      id,
      src,
      onUrlChange
    } = this.props
    const altSource = "/img/image-not-found.png"

    return (
      <Container>
        <Photo 
          innerRef={(c) => this.photo = c}
          src={src}
          onError={() => {this.photo.src = altSource}}/>
        <CMSText
          label="URL"
          name={id + ""}
          value={src}
          placeholder="URL"
          onChange={onUrlChange}/>
      </Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 2vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items; flex-end;
`

const Photo = styled.img`
  width: auto;
  height: 22vh;
  margin-right: 2vh; 
`
