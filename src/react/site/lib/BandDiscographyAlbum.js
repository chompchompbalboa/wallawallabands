import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class BandDiscographyAlbum extends Component {

  render() {
		const {
      album: {
        songs
      }
		} = this.props
    //console.log(this.props)

    return (
			<Container>
        {songs.map((song, index) => {
          return song.title
        })}
			</Container>
    )
  }
}

const Container = styled.div`
`

BandDiscographyAlbum.propTypes = {
}

BandDiscographyAlbum.defaultProps = {
}
