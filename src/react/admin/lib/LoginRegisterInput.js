import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class LoginRegisterInput extends Component {

  render () {
		const {
      name,
      type,
      value,
      placeholder,
      onChange
		} = this.props

    return (
      <Container>
        <Input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}/>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Header = styled.div`
`

const Input = styled.input`
  margin: 0.25vh 0;
  width: 100%;
`
