import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

@connect()
export default class Dashboard extends Component {

  render () {
		const {
		} = this.props

    return (
			<Container>
        Dashboard
			</Container>
    )
  }
}

const Container = styled.div`
`

Dashboard.propTypes = {
}

Dashboard.defaultProps = {
}
