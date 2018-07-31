//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, bool, number, shape, string } from 'prop-types'
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

import { Checkbox } from 'semantic-ui-react'
import CMSAlbums from 'src/react/admin/lib/CMS/CMSAlbums'
import CMSPhotos from 'src/react/admin/lib/CMS/CMSPhotos'
import CMSSaveButton from 'src/react/admin/lib/CMS/CMSSaveButton'
import CMSSimilarBands from 'src/react/admin/lib/CMS/CMSSimilarBands'
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
		name: this.props.band.name,
		albums: this.props.band.albums,
    bio: this.props.band.bio,
    coverImage: this.props.band.coverImage,
    featured: this.props.band.featured,
		photos: this.props.band.photos,
		similarBands: this.props.band.similarBands,
		slug: this.props.band.slug
	}

  static propTypes = {
		band: shape({
			id: number,
			name: string,
			albums: array,
      bio: string,
      coverImage: string,
      featured: bool,
			photos: array,
			similarBands: array,
			slug: string
	})}

  static defaultProps = {
		band: {
			id: 1,
			name: "Default Band",
			albums: [],
      bio: "Default BandEditor - bio",
      coverImage: "",
      featured: true,
			photos: [],
			similarBands: [],
			slug: "default-slug"
		}
  }

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			id: nextProps.band.id,
			name: nextProps.band.name,
			albums: nextProps.band.albums,
      bio: nextProps.band.bio,
      coverImage: nextProps.band.coverImage,
      featured: nextProps.band.featured,
			photos: nextProps.band.photos,
			similarBands: nextProps.band.similarBands,
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
  
  updateCoverImage = (src) => {
    this.setState({
      coverImage: src
    })
  }
  
  updateFeatured = () => {
    const nextFeatured = !this.state.featured
    this.setState({
      featured: nextFeatured
    })
  }

	updatePhotos = (photos) => {
		this.setState({
			photos: photos
		})
	}

	updateSimilarBands = (similarBands) => {
		this.setState({
			similarBands: similarBands
		})
  }

	saveBand = () => {
		const { editBand } = this.props
		const { albums, id, name, bio, coverImage, featured, photos, similarBands, slug } = this.state
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
		// Remove __typename and unneeded info from similarBands object
		const filteredSimilarBands = similarBands.map(similarBand => {
			return {
				similarBandId: similarBand.id
			}
		})
		editBand({
			variables: {
				id: id,
				name: name,
        bio: bio,
        coverImage: coverImage,
        featured: featured,
				slug: slug,
				photos: filteredPhotos,
				albums: filteredAlbums,
				similarBands: filteredSimilarBands
			}
		}).then(({data}) => {
			this.setState({
				id: data.editBand.id,
				name: data.editBand.name,
				albums: data.editBand.albums,
				bio: data.editBand.bio,
				coverImage: data.editBand.coverImage,
				featured: data.editBand.featured,
				photos: data.editBand.photos,
				similarBands: data.editBand.similarBands,
				slug: data.editBand.slug
			})
		})
	}

	deletePhoto = (id) => {
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
			bands
		} = this.props
		const {
			id,
			name,
			albums,
      bio,
      coverImage,
      featured,
			photos,
			similarBands,
			slug
		} = this.state
		const findBands = _.filter(bands, {name: name})
    const nameInBands = findBands.length > 0

    return (
			<Container>
				{(id === 0 || !nameInBands) &&
				<EditorSection>
					<EditorSectionHeader>Name</EditorSectionHeader>
					<EditorSectionContent>
						<CMSText
							label="Name"
							name="name"
							value={name}
							placeholder="Name"
							onChange={this.onChange}/>
					</EditorSectionContent>
				</EditorSection>
				}
				<EditorSection>
					<EditorSectionHeader>Slug</EditorSectionHeader>
					<EditorSectionContent>
						<CMSText
							label="http://wallawallabands.com/band/"
							name="slug"
							value={slug}
							placeholder="Slug"
							onChange={this.onChange}/>
            <VerticalContainer>
              <StyledCheckbox
                label="Featured Band"
                checked={featured}
                onChange={this.updateFeatured}/>
              <VisitLink 
                href={"http://wallawallabands.com/band/" + slug}
                target="_blank">
                Go to page
              </VisitLink>
            </VerticalContainer>
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
              coverImage={coverImage}
							photos={photos}
							addPhoto={this.addPhoto}
              deletePhoto={this.deletePhoto}
              updateCoverImage={this.updateCoverImage}
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
				<EditorSection>
					<EditorSectionHeader>Similar Bands</EditorSectionHeader>
					<EditorSectionContent>
						<CMSSimilarBands 
							bands={bands}
							similarBands={similarBands}
							updateSimilarBands={this.updateSimilarBands}/>
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

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const VisitLink = styled.a`
	cursor: pointer;
	color: black;
	&:hover {
		color: black;
		opacity: 0.75;
	}
`

const StyledCheckbox = styled(Checkbox)`
  position: relative;
  top: -3vh;
`
