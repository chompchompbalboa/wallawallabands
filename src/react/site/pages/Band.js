import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import getBandBySlug from 'src/graphql/queries/getBandBySlug.gql'

import { colors } from 'src/styles/colors'

import Layout from 'src/react/site/layouts/Default'
import Loading from 'src/react/site/lib/loading/LoadingDefault'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'
import Tile from 'src/react/site/lib/BandTile'

@graphql(getBandBySlug, {
		options: (ownProps) => ({
			variables: {
				slug: ownProps.match.params.slug
}})})
export default class Band extends Component {

	constructor(props) {
		super(props)
		this.state = {
			active: "BIO"
		}
	}

	changeActive(newActive) {
		this.setState({
			active: newActive
		})
	}

  render () {
		const {
			data,
		} = this.props

		if(data.loading) {
			return <Loading />
		}
		else if(typeof data.getBandBySlug !== "undefined") {
			const band = data.getBandBySlug
			const { active } = this.state
			const tiles = [
				"BIO",
				"PHOTOS",
				"MUSIC"
			]

			return (
				<Layout>
					<Container>
						<Header>
							<Name>{band.name}</Name>
							<HeaderLinks>
								{tiles.map((tile, index) =>
										<HeaderLink
											key={index}
											active={(active === tile)}
											onClick={()=>this.changeActive(tile)}>
											{tile}</HeaderLink>
								)}
							</HeaderLinks>
						</Header>
						<Tiles>
							<Tile
								first={active === "BIO"}
								header="BIO">
								{band.bio}</Tile>
							<Tile
								first={active === "PHOTOS"}
								header="PHOTOS">
								{band.bio}{band.bio}{band.bio}</Tile>
							<Tile
								first={active === "MUSIC"}
								header="MUSIC">
								{band.bio}{band.bio}</Tile>
						</Tiles>
					</Container>
				</Layout>
			)
		}
		return (
			<ErrorHandler code="UNABLE_TO_LOAD_BAND" />
		)
	}
}

const Container = styled.div`
`

const Header = styled.div`
	padding: 0 3.5vw;
	width: calc(100vw - 7vw);
	background-color: ${colors.secondary};
	color: white;
`

const Name = styled.h1`
	width: 100%;
	padding: 3vh 0 0 0;
	font-family: Oswald;
`

const HeaderLinks = styled.div`
	width: 100%;
	padding: 1vh 0 1.5vh 0;
	display: flex;
	align-items: center;
`

const HeaderLink = styled.p`
	margin: 0 5vw 0 0;
	border-bottom: ${props => props.active ? '1px solid white' : 'none'};
`

const Tiles = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
