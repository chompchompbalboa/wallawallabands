//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, number, shape, string } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'

import deletePhoto from 'src/graphql/mutations/deletePhoto.gql'
import editBand from 'src/graphql/mutations/editBand.gql'
import multipleUpload from 'src/graphql/mutations/multipleUpload.gql'

import CMSPhotos from 'src/react/admin/lib/CMS/CMSPhotos'
import CMSSaveButton from 'src/react/admin/lib/CMS/CMSSaveButton'
import CMSText from 'src/react/admin/lib/CMS/CMSText'
import CMSTextArea from 'src/react/admin/lib/CMS/CMSTextArea'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@compose(
	graphql(editBand, {name: "editBand"}),
	graphql(deletePhoto, {name: "deletePhoto"}),
	graphql(multipleUpload, {name: "multipleUpload"})
)
export default class BandEditor extends Component {

	state = {
		id: this.props.band.id,
		albums: this.props.band.albums,
		bio: this.props.band.bio,
		photos: this.props.band.photos
	}

  static propTypes = {
		band: shape({
			id: number,
			albums: array,
			bio: string,
			photos: array
	})}

  static defaultProps = {
		band: {
			id: 1,
			albums: [],
			bio: "Default BandEditor - bio",
			photos: []
		}
  }

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			id: nextProps.band.id,
			bio: nextProps.band.bio
	})}

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  })}

	saveBand = () => {
		const { editBand } = this.props
		const { id, bio } = this.state
		editBand({
			variables: {
				id: id,
				bio: bio
			}
		}).then(({data}) => {
			console.log('received editBand data', data)
		})
	}

	deleteExistingPhoto = (id) => {
		const { deletePhoto } = this.props
		deletePhoto({
			variables: {
				id: id
			}
		}).then(({data}) => {
			this.setState({
				photos: data.deletePhoto.photos
			})
		})
	}

	saveNewPhoto = (e) => {
		const { target: { validity, files }} = e
		const { multipleUpload } = this.props
		console.log(files)
		multipleUpload({
			variables: { files }
		}).then(({data}) => {
			console.log('saveNewPhoto', data)
		})
	}

  render = () => {
		const {
			albums,
			bio,
			photos
    } = this.state

    return (
			<Container>
        <CMSTextArea
          name="bio"
          value={bio}
          placeholder="Bio"
          onChange={(e) => this.onChange(e)}/>
				<CMSPhotos
					photos={photos}
					deleteExistingPhoto={this.deleteExistingPhoto}
					saveNewPhoto={this.saveNewPhoto}/>
        <CMSSaveButton
          onClick={() => this.saveBand()}/>
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
