import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import _ from 'lodash'

import alphabet from 'src/react/site/helpers/alphabet'

import getBands from 'src/graphql/queries/getBands.gql'

import BandsContent from 'src/react/site/lib/BandsContent'
import Content from 'src/react/site/containers/Content'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'
import Header from 'src/react/site/lib/BandsHeader'
import Layout from 'src/react/site/layouts/Default'
import Loading from 'src/react/site/lib/loading/LoadingDefault'

@graphql(getBands)
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
			data,
			...rest
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
		else if(typeof data.allBands !== "undefined") {
      const groupedAndSortedBands = this.groupAndSortBands(data.allBands)
			return (
				<Layout>
					<Content visible>
						<Header bands={groupedAndSortedBands}/>
            <BandsContent bands={groupedAndSortedBands}/>
					</Content>
				</Layout>
			)
		}
		return (
			<ErrorHandler code="UNABLE_TO_LOAD_BANDS_LIST"/>
		)
  }
}
