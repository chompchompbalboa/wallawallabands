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

  handleLogout = () => {
    console.log('logout')
  }

  render() {

    return (
			<Item onClick={(e) => this.handleLogout(e)}>
        Logout
			</Item>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
