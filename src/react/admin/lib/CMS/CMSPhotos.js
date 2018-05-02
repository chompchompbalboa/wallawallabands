//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

import { CMSWidth } from 'src/styles/admin/layout'

import { Button } from 'semantic-ui-react'
import ExistingPhoto from 'src/react/admin/lib/CMS/CMSPhotosExistingPhoto'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSPhotos extends Component {

  static propTypes = {
    photos: arrayOf(shape({
      id: number,
      src: string,
      height: number,
      width: number
  }))}

  static defaultProps = {
    photos: [
      {id: 0, src: "default-1.jpg", height: 800, width: 1200}
    ]
  }

  onUrlChange = (e) => {
    const { photos, updatePhotos } = this.props
    let newPhotos = []
    photos.map(photo => {
      let newPhoto = {}
      newPhoto.id = photo.id
      newPhoto.src = (Number(e.target.name) === photo.id ? e.target.value : photo.src)
      newPhoto.width = photo.width
      newPhoto.height = photo.height
      newPhotos.push(newPhoto)
    })
    updatePhotos(newPhotos)
  }

  render() {
		const {
      photos,
      addPhoto,
      deletePhoto,
      updatePhotos
    } = this.props

    return (
			<Container>
        <ExistingPhotosWrapper>
          {photos.map((photo, index) => {
            return (
              <ExistingPhoto
                key={index}
                id={photo.id}
                src={photo.src}
                onDelete={deletePhoto}
                onUrlChange={this.onUrlChange}/>
          )})}
          <AddNewButton
            onClick={() => addPhoto()}
            size="mini"
            style={{width: '10vw', marginTop: '2vh'}}>
            Add New Photo
          </AddNewButton>
        </ExistingPhotosWrapper>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components + Dropzone base style
//------------------------------------------------------------------------------

const Container = styled.div`
  width: ${CMSWidth};
`

const ExistingPhotosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AddNewButton = styled(Button)`
`
