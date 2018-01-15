import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import getBand from 'src/graphql/queries/getBand.gql'

import Layout from 'src/react/site/layouts/Default'
import Loading from 'src/react/site/lib/loading/LoadingDefault'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'

@graphql(getBand, {
		options: (ownProps) => ({
			variables: {
				slug: ownProps.match.params.slug
}})})
export default class Band extends Component {

	_artist(data) {
		const {
			loading,
			Band
		} = data

		if (loading) {
			return (<Loading />)}
		else {
			if(typeof Band !== "undefined") {
				return Band.name
			}
		}
		return (
			<ErrorHandler code="UNABLE_TO_LOAD_ARTIST"/>
		)
	}

  render () {
		const {
			data
		} = this.props
		const artist = this._artist(data)

    return (
      <Layout>
				<Container>
					{ artist }
				</Container>
		  </Layout>
    )
	}
}

const Container = styled.div`
`

Band.propTypes = {
	name: PropTypes.string
}

Band.defaultProps = {
	name: "Modest Mouse"
}
