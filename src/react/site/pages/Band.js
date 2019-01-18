//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import { compose, graphql } from 'react-apollo'

import getBandBySlug from 'src/graphql/queries/getBandBySlug.gql'

import BandHeader from 'src/react/site/lib/BandHeader'
import BandContent from 'src/react/site/lib/BandContent'
import Content from 'src/react/site/containers/Content'
import Layout from 'src/react/site/layouts/Default'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@compose(
  graphql(getBandBySlug, {
      name: "bandData",
      options: (ownProps) => ({
        variables: {
          slug: ownProps.match.params.slug
  }})})
)
export default class Band extends Component {

  static propTypes = {
    bandData: object
  }

  state = {
    active: "BIO"
  }

	componentDidMount = () => {
		window.scrollTo(0,0)
	}

	changeActive = (nextActive) => {
		this.setState({
			active: nextActive
		})
	}

  render () {
		const {
      bandData
    } = this.props

		if(bandData.loading) {
			return null
		}
		else if(typeof bandData.getBandBySlug !== "undefined") {
			const { 
        active 
      } = this.state
			const band = bandData.getBandBySlug
			const tiles = [
				"BIO",
				"DISCOGRAPHY",
				"PHOTOS"
			]

			return (
				<Layout>
					<Content>
						<BandHeader
							active={active}
							band={band}
							changeActive={this.changeActive}
							tiles={tiles}/>
						<BandContent
							active={active}
							band={band}
							tiles={tiles}/>
					</Content>
				</Layout>
			)
		}
		return (
      <ErrorHandler
        code="UNABLE_TO_LOAD_BAND" />
		)
	}
}
