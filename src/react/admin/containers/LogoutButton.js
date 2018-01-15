import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

export default class LogoutButton extends Component {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }

  render() {
		const {
		} = this.props

    return (
			<Container onClick={(e) => this.handleLogout(e)}>
        Logout
			</Container>
    )
  }
}

const Container = styled.div`
  cursor: pointer;
`

LogoutButton.propTypes = {
}

LogoutButton.defaultProps = {
}
