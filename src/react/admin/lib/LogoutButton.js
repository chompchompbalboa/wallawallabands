//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import Item from 'src/react/admin/lib/SidebarItem'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LogoutButton extends Component {

  render() {
    const { logout } = this.props

    return (
			<Item onClick={logout}>
        Logout
			</Item>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
