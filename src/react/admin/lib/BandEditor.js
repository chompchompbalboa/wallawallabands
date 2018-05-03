//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, number, shape, string } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import _ from 'lodash'

import setAlbumFolder from 'src/utils/setAlbumFolder'
import setPhotoFolder from 'src/utils/setPhotoFolder'

import deleteAlbum from 'src/graphql/mutations/deleteAlbum.gql'
import deletePhoto from 'src/graphql/mutations/deletePhoto.gql'
import deleteSong from 'src/graphql/mutations/deleteSong.gql'
import editBand from 'src/graphql/mutations/editBand.gql'

import CMSAlbums from 'src/react/admin/lib/CMS/CMSAlbums'
import CMSPhotos from 'src/react/admin/lib/CMS/CMSPhotos'
import CMSSaveButton from 'src/react/admin/lib/CMS/CMSSaveButton'
import CMSText from 'src/react/admin/lib/CMS/CMSText'
import CMSTextArea from 'src/react/admin/lib/CMS/CMSTextArea'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@compose(
	graphql(editBand, {name: "editBand"}),
	graphql(deleteAlbum, {name: "deleteAlbum"}),
	graphql(deletePhoto, {name: "deletePhoto"}),
	graphql(deleteSong, {name: "deleteSong"})
)
export default class BandEditor extends Component {

	state = {
		id: this.props.band.id,
		albums: this.props.band.albums,
		bio: this.props.band.bio,
		photos: this.props.band.photos,
		slug: this.props.band.slug
	}

  static propTypes = {
		band: shape({
			id: number,
			albums: array,
			bio: string,
			photos: array,
			slug: string
	})}

  static defaultProps = {
		band: {
			id: 1,
			albums: [],
			bio: "Default BandEditor - bio",
			photos: [],
			slug: "default-slug"
		}
  }

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			id: nextProps.band.id,
			albums: nextProps.band.albums,
			bio: nextProps.band.bio,
			photos: nextProps.band.photos,
			slug: nextProps.band.slug
	})}

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  })}

	updateAlbums = (albums) => {
		this.setState({
			albums: albums
		})
	}

	updatePhotos = (photos) => {
		this.setState({
			photos: photos
		})
	}

	saveBand = () => {
		const { editBand } = this.props
		const { albums, id, bio, photos, slug } = this.state
		// Remove __typename from photos objects to conform to the GraphQL schema
		const filteredPhotos = photos.map(photo => {
			return {
				id: photo.id,
				src: photo.src,
				width: photo.width,
				height: photo.height
			}
		})
		// Remove __typename from photos objects to conform to the GraphQL schema
		const filteredAlbums = albums.map(album => {
			return {
				id: album.id,
				cover: album.cover,
				title: album.title,
				year: album.year,
				songs: album.songs.map(song => {
					return {
						id: song.id,
						trackNumber: song.trackNumber,
						title: song.title,
						length: song.length,
						audio: song.audio
					}
				})
			}
		})
		editBand({
			variables: {
				id: id,
				bio: bio,
				slug: slug,
				photos: filteredPhotos,
				albums: filteredAlbums
			}
		}).then(({data}) => {
			this.setState({
				id: data.editBand.id,
				albums: data.editBand.albums,
				bio: data.editBand.bio,
				photos: data.editBand.photos,
				slug: data.editBand.slug
			})
		})
	}

	deleteExistingPhoto = (id) => {
		const { deletePhoto } = this.props
		const { photos } = this.state
		if(id >= 1000000) {
			let newPhotos = _.filter(photos, (photo) => {return photo.id < 1000000})
			this.setState({
				photos: newPhotos
			})
		}
		else {
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
	}

	deleteSong = (id) => {
		const { deleteSong } = this.props
		const { albums } = this.state
		if (id >= 1000000) {
			let newAlbums = []
			albums.map(album => {
				let newSongs = _.filter(album.songs, (song) => {return song.id !== id})
				const sortedSongs = _.sortBy(newSongs, ['trackNumber']).map((song, index) => {
					return {
						id: song.id,
						title: song.title,
						trackNumber: index + 1,
						length: song.length,
						audio: song.audio
					}
				})
				newAlbums.push({
					id: album.id,
					cover: album.cover,
					title: album.title,
					year: album.year,
					songs: sortedSongs
				})
			})
			this.setState({
				albums: newAlbums
			})
		}
		else {
			deleteSong({
				variables: {
					id: id
				}
			}).then(({data}) => {
				this.setState({
					album: data.deleteSong.album
				})
			})
		}
	}

	deleteAlbum = (id) => {
		const { deleteAlbum } = this.props
		const { albums } = this.state
		if(id >= 1000000) {
			let newAlbums = _.filter(albums, (album) => {return album.id < 1000000})
			this.setState({
				albums: newAlbums
			})
		}
		else {
			deleteAlbum({
				variables: {
					id: id
				}
			}).then(({data}) => {
				this.setState({
					albums: data.deleteAlbum.albums
				})
			})
		}
	}

	addPhoto = () => {
		const { photos } = this.state
		let newPhotos = []
		photos.map(photo => {
			newPhotos.push({
				id: photo.id,
				src: photo.src,
				height: photo.height,
				width: photo.width
			})
		})
		newPhotos.push({
			id: _.random(1000000, 10000000),
			src: "",
			width: 0,
			height: 0
		})
		this.setState({
			photos: newPhotos
		})
	}

  render = () => {
		const {
			albums,
			bio,
			photos,
			slug
    } = this.state

    return (
			<Container>
				<EditorSection>
					<EditorSectionHeader>Slug</EditorSectionHeader>
					<EditorSectionContent>
						<CMSText
							label="http://wallawallabands.com/band/"
							name="slug"
							value={slug}
							placeholder="slug"
							onChange={this.onChange}/>
						<VisitLink 
							href={"http://wallawallabands.com/band/" + slug}
							target="_blank">
							Go to page
						</VisitLink>
					</EditorSectionContent>
				</EditorSection>
				<EditorSection>
					<EditorSectionHeader>Bio</EditorSectionHeader>
					<EditorSectionContent>
						<CMSTextArea
							name="bio"
							value={bio}
							placeholder="Bio"
							onChange={this.onChange}/>
					</EditorSectionContent>
				</EditorSection>
				<EditorSection>
					<EditorSectionHeader>Photos</EditorSectionHeader>
					<EditorSectionContent>
						<CMSPhotos
							photos={photos}
							addPhoto={this.addPhoto}
							deletePhoto={this.deleteExistingPhoto}
							updatePhotos={this.updatePhotos}/>
					</EditorSectionContent>
				</EditorSection>
				<EditorSection>
					<EditorSectionHeader>Albums</EditorSectionHeader>
					<EditorSectionContent>
						<CMSAlbums 
							albums={albums}
							deleteAlbum={this.deleteAlbum}
							deleteSong={this.deleteSong}
							updateAlbums={this.updateAlbums}/>
					</EditorSectionContent>
				</EditorSection>
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

const EditorSection = styled.div`
	width: 100%;
	margin: 1vh 0;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 1vh;
`

const EditorSectionHeader = styled.h4`
	margin-bottom: 1vh;
`

const EditorSectionContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const VisitLink = styled.a`
	cursor: pointer;
	color: black;
	&:hover {
		color: black;
		opacity: 0.75;
	}
`
