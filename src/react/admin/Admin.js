//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'

import Dashboard from 'src/react/admin/pages/Dashboard'
import LoginRegister from 'src/react/admin/pages/LoginRegister'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Admin extends Component {

  state = {
    ssr: true
  }

  static defaultProps = {}
  static propTypes = {}

  componentDidMount = () => {
    this.setState({
      ssr: false
    })
  }

  isLoggedIn = () => {
    return true
  }

  render = () => {
		const { ssr } = this.state
    const loggedIn = this.isLoggedIn()

    if(ssr) {
      return "Loading"
    }

    if(!loggedIn) {
      return (
        <LoginRegister />
      )
    }
    return (
      <Dashboard />
    )
  }
}
