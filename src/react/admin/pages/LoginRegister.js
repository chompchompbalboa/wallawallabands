import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import LoginOrRegister from 'src/react/admin/lib/LoginOrRegister'
import LoginForm from 'src/react/admin/lib/LoginForm'
import RegisterForm from 'src/react/admin/lib/RegisterForm'

export default class LoginRegister extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginOrRegister: "login"
    }
    this.changeLoginOrRegister = this.changeLoginOrRegister.bind(this)
  }

  changeLoginOrRegister(nextValue) {
    this.setState({
      loginOrRegister: nextValue
    })
  }

  render () {
    const {
      loginOrRegister
    } = this.state

    return (
      <Container>
        <Wrapper>
          <LoginOrRegister loginOrRegister={loginOrRegister} changeLoginOrRegister={this.changeLoginOrRegister}/>
          {loginOrRegister === "register" ? <RegisterForm/> : <LoginForm/>}
        </Wrapper>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 40vw;
  height: 40vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
