import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'

export default class LoginRegister extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const {
      changePassword,
      password 
    } = this.props
    return (
      <Container>
        <Input 
          placeholder="Enter Password"
          value={password}
          onChange={changePassword}/>
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
