import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Layout from 'src/react/layouts/Default'

@connect()
export default class Admin extends Component {

  render () {
		const {
		} = this.props

    return (
      <Layout>
  			<Container>
          Admin
  			</Container>
      </Layout>
    )
  }
}

const Container = styled.div`
`

Admin.propTypes = {
}

Admin.defaultProps = {
}
