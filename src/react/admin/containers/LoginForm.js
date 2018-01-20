import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { Redirect } from 'react-router'
import styled from 'styled-components'

import authenticateUser from 'src/graphql/mutations/authenticateUser.gql'

import Form from 'src/react/admin/lib/LoginRegisterForm'
import Input from 'src/react/admin/lib/LoginRegisterInput'

@compose(
  graphql(authenticateUser, {name: 'authenticateUser'})
)
export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const {
      email,
      password
    } = this.state
    const {
      authenticateUser
    } = this.props

    const response = await this.props.authenticateUser({variables: {email, password}})
    localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
    window.location.reload()
  }

  render () {
    const {
      email,
      password
    } = this.state

    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Input
          name="email"
          type="text"
          value={email}
          placeholder="Email"
          onChange={this.onChange}/>
        <Input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.onChange}/>
        <input
          type="submit"
          value="Login"/>
      </Form>
    )
  }
}
