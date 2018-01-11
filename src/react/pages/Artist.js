import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Layout from 'src/react/layouts/Default'

@connect()
export default class Artist extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

  render () {
		const {
			name
		} = this.props

    return (
      <Layout>
				<Container>
					{ name }
				</Container>
		  </Layout>
    )
  }
}

const Container = styled.div`
`

Artist.propTypes = {
	name: PropTypes.string
}

Artist.defaultProps = {
	name: "Modest Mouse"
}
