//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import _ from 'lodash'

import alphabet from 'src/react/site/helpers/alphabet'

import getBands from 'src/graphql/queries/getBands.gql'
import getFeaturedBands from 'src/graphql/queries/getFeaturedBands.gql'

import BandsContent from 'src/react/site/lib/BandsContent'
import BandsMobileSponsor from 'src/react/site/lib/BandsMobileSponsor'
import Content from 'src/react/site/containers/Content'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'
import Header from 'src/react/site/lib/BandsHeader'
import Layout from 'src/react/site/layouts/Default'
import Loading from 'src/react/site/lib/loading/LoadingDefault'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@compose(
  graphql(getBands, {name: "allBands"}),
  graphql(getFeaturedBands, {name: "featuredBands"})
)
export default class Bands extends Component {

  static propTypes = {
    allBands: object,
    featuredBands: object
  }

  state = {
    hasLoaded: false
  }

  componentDidUpdate = () => {
    const {
      allBands,
      featuredBands
    } = this.props
    const {
      hasLoaded
    } = this.state

    if(!hasLoaded) {
      if(!allBands.loading && !featuredBands.loading) {
        this.setState({
          hasLoaded: true
        })
      }
    }
  }

  groupAndSortBands = (bands) => {
    let groupedAndSorted = alphabet // Initialize as {"A": {}, "B": {}, "C": {}...}
    const grouped = _.groupBy(bands, (band) => {return band.name.substring(0,1)}) // Group bands by the first letter of their name
    _.map(grouped, (group, index) => {
      groupedAndSorted[index] = _.sortBy(group, ['name'])
    }) // Sort each group into alphabetical order and add to groupedAndSorted
    return groupedAndSorted
  }

  render () {
		const {
      allBands,
      featuredBands
    } = this.props
    const {
      hasLoaded
    } = this.state

		if(!hasLoaded) {
			return (
        <Layout>
          <Loading/>
        </Layout>
      )
		}
		else if(typeof allBands !== "undefined" && typeof featuredBands !== "undefined") {
      const groupedAndSortedBands = this.groupAndSortBands(allBands.allBands)
			return (
				<Layout>
          <Content>
            <BandsMobileSponsor/>
            <Header 
              bands={groupedAndSortedBands}/>
            <BandsContent 
              bands={groupedAndSortedBands} 
              featuredBands={featuredBands.getFeaturedBands}/>
					</Content>
				</Layout>
			)
		}
		return (
      <ErrorHandler 
        code="UNABLE_TO_LOAD_BANDS_LIST"/>
		)
  }
}