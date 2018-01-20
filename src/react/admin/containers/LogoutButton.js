import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import SidebarItem from 'src/react/admin/lib/SidebarItem'

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
			<SidebarItem onClick={(e) => this.handleLogout(e)}>
        Logout
			</SidebarItem>
    )
  }
}

LogoutButton.propTypes = {
}

LogoutButton.defaultProps = {
}
