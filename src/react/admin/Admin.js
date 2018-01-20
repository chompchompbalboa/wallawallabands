import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'

import loggedInUser from 'src/graphql/queries/loggedInUser.gql'

import Dashboard from 'src/react/admin/pages/Dashboard'
import LoginRegister from 'src/react/admin/pages/LoginRegister'

export default class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ssr: true
    }
  }

  componentDidMount() {
    this.setState({
      ssr: false
    })
  }

  _loggedIn() {
    if(typeof localStorage !== "undefined" && localStorage.getItem("graphcoolToken") === null) {
      return false
    }
    return true
  }

  render () {
		const {
      ssr
		} = this.state
    const loggedIn = this._loggedIn()

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
