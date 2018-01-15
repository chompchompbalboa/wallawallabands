import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Layout from 'src/react/admin/layouts/Default'

@connect()
export default class Dashboard extends Component {

  render () {
		const {
		} = this.props

    return (
			<Layout>
        Dashboard
			</Layout>
    )
  }
}

const Container = styled.div`
`

Dashboard.propTypes = {
}

Dashboard.defaultProps = {
}
