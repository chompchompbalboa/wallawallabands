import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import getBands from 'src/graphql/queries/getBands.gql'

import Layout from 'src/react/site/layouts/Default'

import Loading from 'src/react/site/lib/loading/LoadingDefault'

@graphql(getBands)
export default class Home extends Component {

	_artistsList(data) {
		const {
			loading,
			allBands
		} = data

		if (loading) {
			return <Loading />}
		else {
			if (typeof allBands !== "undefined") {
		    return (
					allBands.map((artist, index) => (
						<Link to={"artist/" + artist.slug} key={ index }>
							<ArtistLink>
								{ artist.name }
							</ArtistLink>
						</Link>
		)))}}
		return (
			"I'm sorry, I'm having a hard time fetching the artists list from the database"
		)
	}

  render () {
		const {
			data
		} = this.props
		const artistsList = this._artistsList(data)

		return (
			<Layout>
				<Container>
					{artistsList}
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
	data: PropTypes.shape({
		allBands: PropTypes.array
})}

Home.defaultProps = {
	data: {
		allBands: [
			{ name: "Artist 1", slug: "artist-1"},
			{ name: "Artist 2", slug: "artist-2" },
			{ name: "Artist 3", slug: "artist-3" }
		]
}}
