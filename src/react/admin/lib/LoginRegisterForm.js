import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class LoginRegisterForm extends Component {

  render () {
		const {
      children,
      onSubmit
		} = this.props

    return (
      <Container>
        <Form onSubmit={(e) => onSubmit(e)}>
          {children}
        </Form>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 60%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
