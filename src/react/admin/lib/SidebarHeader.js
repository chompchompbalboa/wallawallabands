import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

export default class Dashboard extends Component {

  render() {
		const {
		} = this.props

    return (
			<Container>
        SidebarHeader
			</Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 20vh;
`

Dashboard.propTypes = {
}

Dashboard.defaultProps = {
}
