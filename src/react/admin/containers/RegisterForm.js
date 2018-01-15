import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { Redirect } from 'react-router'
import styled from 'styled-components'

import signupUser from 'src/graphql/mutations/signupUser.gql'

import Form from 'src/react/admin/lib/LoginRegisterForm'
import Input from 'src/react/admin/lib/LoginRegisterInput'

@compose(
  graphql(signupUser, {name: 'signupUser'})
)
export default class RegisterForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
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
      name,
      email,
      password
    } = this.state

    try {
      const user = await this.props.signupUser({variables: {email, password, name}})
      localStorage.setItem('graphcoolToken', user.data.signupUser.token)
      return (
        <Redirect to="/admin" />
      )
    } catch(e) {
      console.error('An error occurred during registration', e)
      return (
        <Redirect to="/admin" />
      )
    }
  }

  render () {
    const {
      name,
      email,
      password
    } = this.state

    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Input
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={this.onChange}/>
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
          value="Register"/>
      </Form>
    )
  }
}
