import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class loginOrRegister extends Component {

  handleLoginTabClick(loginOrRegister) {
    const {
      changeLoginOrRegister
    } = this.props

    if(loginOrRegister = "register") {
      changeLoginOrRegister("login")}
  }

  handleRegisterTabClick(loginOrRegister) {
    const {
      changeLoginOrRegister
    } = this.props
    
    if(loginOrRegister = "login") {
      changeLoginOrRegister("register")}
  }

  render () {
		const {
      loginOrRegister
		} = this.props

    return (
			<Container>
        <Tab
          active={loginOrRegister === "login"}
          onClick={(loginOrRegister) => this.handleLoginTabClick(loginOrRegister)}>
          Login
        </Tab>
        <Tab
          active={loginOrRegister === "register"}
          onClick={(loginOrRegister) => this.handleRegisterTabClick(loginOrRegister)}>
          Register
        </Tab>
			</Container>
    )
  }
}

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Tab = styled.div`
  cursor: ${props => props.active ? 'default' : 'pointer'};
  width: 50%;
  height: 2em;
  background-color: ${props => props.active ? 'gray' : 'white'};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`
