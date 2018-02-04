import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import getBandBySlug from 'src/graphql/queries/getBandBySlug.gql'

import { tabletLandscape } from 'src/styles/breakpoints'
import { secondary } from 'src/styles/colors'

import Header from 'src/react/site/lib/BandHeader'
import BandContent from 'src/react/site/lib/BandContent'
import Content from 'src/react/site/containers/Content'
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

	changeActive = (newActive) => {
		this.setState({
			active: newActive
		})
	}

  render () {
		const {
			data,
		} = this.props

		if(data.loading) {
			return (
        <Layout>
          <Content visible={false}>
            <Loading />
          </Content>
        </Layout>
			)
		}
		else if(typeof data.getBandBySlug !== "undefined") {
			const band = data.getBandBySlug
			const { active } = this.state
			const tiles = [
				"BIO",
				"DISCOGRAPHY",
				"PHOTOS"
			]

			return (
				<Layout>
					<Content visible>
						<Header
							active={active}
							band={band}
							changeActive={this.changeActive}
							tiles={tiles}/>
						<BandContent
							active={active}
							band={band}
							tiles={tiles}
							/>
					</Content>
				</Layout>
			)
		}
		return (
			<ErrorHandler code="UNABLE_TO_LOAD_BAND" />
		)
	}
}
