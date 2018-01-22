import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import getBands from 'src/graphql/queries/getBands.gql'

import { primary, tileBackground } from 'src/styles/colors'
import { pageHeader } from 'src/styles/fonts'

import BandsList from 'src/react/site/lib/BandsList'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'
import Layout from 'src/react/site/layouts/Default'
import Loading from 'src/react/site/lib/loading/LoadingDefault'

@graphql(getBands)
export default class Bands extends Component {

  render () {
		const {
			data,
			...rest
		} = this.props

		if(data.loading) {
			return (<Loading />)
		}
		else if(typeof data.allBands !== "undefined") {
			return (
				<Layout>
					<Container>
						<Header>BANDS</Header>
						<BandsList bands={data.allBands}/>
					</Container>
				</Layout>
			)
		}
		return (
			<ErrorHandler code="UNABLE_TO_LOAD_BANDS_LIST"/>
		)
  }
}

const Container = styled.div`
	width: 100%;
`

const Header = styled.div`
	margin: 3vh 0;
	padding: 1.5vh 3.5vw;
	width: calc(100% - 7vw);
	background-color: ${tileBackground};
	color: ${primary};
	font-family: ${pageHeader.family};
	font-size: ${pageHeader.size};
	letter-spacing: ${pageHeader.letterSpacing}
`
