import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import getArtists from 'src/graphql/queries/getArtists.gql'

import Layout from 'src/react/layouts/Default'

@connect()
@graphql(getArtists)
export default class Home extends Component {

  render () {
		const {
			data: {
				loading,
				error,
				allArtists
		}} = this.props

		if (loading) {
			return "GraphQL is loading"}
		if (error) {
			return "GraphQL is loading"}
		else {
			if (typeof allArtists !== "undefined") {
		    return (
		      <Layout>
						<Container>
							{allArtists.map((artist, index) => (
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
  }
}

const Container = styled.div`
`

const ArtistLink = styled.div`
`

Home.propTypes = {
	allArtists: PropTypes.array
}

Home.defaultProps = {
	allArtists: [
		{ name: "Artist 1", slug: "artist-1"},
		{ name: "Artist 2", slug: "artist-2" },
		{ name: "Artist 3", slug: "artist-3" }
	]
}
