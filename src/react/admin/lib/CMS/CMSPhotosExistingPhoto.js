//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import styled from 'styled-components'

import CMSText from 'src/react/admin/lib/CMS/CMSText'
import { Button } from 'semantic-ui-react'
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
    onDelete: () => console.warn("You need to define an onDelete function for CMSPhotosExistingPhoto to work correctly"),
    onUrlChange: () => console.warn("You need to define an onUrlChange function for CMSPhotosExistingPhoto to work correctly")
  }

  render() {
		const {
      id,
      src,
      onDelete,
      onUrlChange
    } = this.props
    const altSource = "/img/image-not-found.png"

    return (
      <Container>
        <Photo 
          innerRef={(c) => this.photo = c}
          src={src}
          onError={() => {this.photo.src = altSource}}/>
        <ActionContainer>
          <CMSText
            label="URL"
            name={id + ""}
            value={src}
            placeholder="URL"
            onChange={onUrlChange}/>
          <DeleteButton
            onClick={() => onDelete(id)}
            size="mini"
            style={{width: '10vw', marginTop: '2vh'}}>
            Delete Photo
          </DeleteButton>
        </ActionContainer>
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

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DeleteButton = styled(Button)`
`
