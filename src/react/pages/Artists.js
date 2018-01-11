import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Layout from 'src/react/layouts/Default'

@connect()
export default class Home extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

  render () {
		const {
			artists
		} = this.props

    return (
      <Layout>
				<Container>
					{artists.map((artist, index) => (
						<Link to={"artist/" + artist.slug}>
							<ArtistLink key={ index }>
								{ artist.name }
							</ArtistLink>
						</Link>
					))}
				</Container>
		  </Layout>
    )
  }
}

const Container = styled.div`
`

const ArtistLink = styled.div`
`

Home.propTypes = {
	artists: PropTypes.array
}

Home.defaultProps = {
	artists: [
		{ name: "Artist 1", slug: "artist-1"},
		{ name: "Artist 2", slug: "artist-2" },
		{ name: "Artist 3", slug: "artist-3" }
	]
}
