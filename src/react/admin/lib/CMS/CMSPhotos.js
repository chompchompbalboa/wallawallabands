//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

import { CMSWidth } from 'src/styles/admin/layout'

import ExistingPhoto from 'src/react/admin/lib/CMS/CMSPhotosExistingPhoto'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSPhotos extends Component {

  static propTypes = {
    deleteExistingPhoto: func,
    photos: arrayOf(shape({
      id: number,
      src: string,
      height: number,
      width: number
    })),
    saveNewPhoto: func
  }

  static defaultProps = {
    deleteExistingPhoto: () => console.warn("You need to define deleteExistingPhoto for CMSPhotos to work correctly"),
    photos: [
      {id: 0, src: "default-1.jpg", height: 800, width: 1200}
    ],
    saveNewPhoto: () => console.warn("You need to define saveNewPhoto for CMSPhotos to work correctly")
  }

  render() {
		const {
      photos,
      deleteExistingPhoto,
      saveNewPhoto
    } = this.props

    return (
			<Container>
        <input type="file" multiple required onChange={saveNewPhoto} />
        <ExistingPhotosWrapper>
          {photos.map((photo, index) => {
            return (
              <ExistingPhoto
                key={index}
                id={photo.id}
                src={photo.src}
                onDelete={deleteExistingPhoto}/>
          )})}
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
  justify-content: space-between;
  align-items: flex-start;
`

const StyledDropzone = styled(Dropzone)`
  width: 100%;
  min-height: 20vh;
  border: 1px solid black;
`
