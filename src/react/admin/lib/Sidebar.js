//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import Header from 'src/react/admin/lib/SidebarHeader'
import Item from 'src/react/admin/lib/SidebarItem'
import Logout from 'src/react/admin/lib/LogoutButton'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Sidebar extends Component {

  render = () => {
    const { activeTask , ...rest} = this.props
    return (
			<Container {...rest}>
        <Header />
        <Item
          active={activeTask === "BANDS"}
          id="BANDS">
          Bands
        </Item>
        <Logout />
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(225,225,225,1);
  box-shadow: 0 0 5px rgb(125,125,125);
`
