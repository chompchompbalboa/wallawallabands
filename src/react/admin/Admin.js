//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Dashboard from 'src/react/admin/pages/Dashboard'
import Login from 'src/react/admin/lib/Login'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Admin extends Component {

  state = {
    loggedIn: true,
    password: "",
    ssr: true
  }

  componentDidMount = () => {
    this.setState({
      ssr: false
    })
  }

  changePassword = (e) => {
    const correctPassword = "bandsBigz18"
    const loggedIn = (e.target.value === correctPassword ? true : false)
    const password = (e.target.value === correctPassword ? "" : e.target.value)
    this.setState({
      loggedIn: loggedIn,
      password: password
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      password: ""
    })
  }

  render = () => {
		const { 
      loggedIn, 
      password, 
      ssr 
    } = this.state

    if(ssr) {
      return "Loading"
    }

    if(!loggedIn) {
      return (
        <Login changePassword={this.changePassword} password={password}/>
      )
    }
    return (
      <Container>
        <Helmet>
          <title>Walla Walla Bands - Admin</title>
        </Helmet>
        <Dashboard
          logout={this.logout}/>
      </Container>
    )
  }
}

const Container = styled.div``
