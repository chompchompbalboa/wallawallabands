import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'
import _ from 'lodash'

import alphabet from 'src/react/site/helpers/alphabet'

import getBands from 'src/graphql/queries/getBands.gql'
import getFeaturedBands from 'src/graphql/queries/getFeaturedBands.gql'

import BandsContent from 'src/react/site/lib/BandsContent'
import Content from 'src/react/site/containers/Content'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'
import Header from 'src/react/site/lib/BandsHeader'
import Layout from 'src/react/site/layouts/Default'
import Loading from 'src/react/site/lib/loading/LoadingDefault'

@compose(
  graphql(getBands, {name: "allBands"}),
  graphql(getFeaturedBands, {name: "featuredBands"})
)
export default class Bands extends Component {

  constructor(props) {
    super(props)
    this.groupAndSortBands = this.groupAndSortBands.bind(this)
  }

  groupAndSortBands(bands) {
    // Initialize as {"A": {}, "B": {}, "C": {}...}
    let groupedAndSorted = alphabet
    // Group bands by the first letter of their name
    const grouped = _.groupBy(bands, (band) => {return band.name.substring(0,1)})
    // Sort each group into alphabetical order and add to groupedAndSorted
    for (let letter in grouped) {
      let group = grouped[letter]
      groupedAndSorted[letter] = _.sortBy(group, ['name'])
    }
    return groupedAndSorted
  }

  render () {
		const {
      allBands,
      featuredBands,
			...rest
		} = this.props

		if(allBands.loading || featuredBands.loading) {
			return (
        <Layout>
          <Content visible={false}>
            <Loading />
          </Content>
        </Layout>
      )
		}
		else if(typeof allBands !== "undefined" && typeof featuredBands !== "undefined") {
      const groupedAndSortedBands = this.groupAndSortBands(allBands.allBands)
			return (
				<Layout>
					<Content visible>
						<Header bands={groupedAndSortedBands}/>
            <BandsContent bands={groupedAndSortedBands} featuredBands={featuredBands.getFeaturedBands}/>
					</Content>
				</Layout>
			)
		}
		return (
			<ErrorHandler code="UNABLE_TO_LOAD_BANDS_LIST"/>
		)
  }
}
