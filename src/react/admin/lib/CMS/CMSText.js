import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class CMSText extends Component {

  render() {
		const {
      ...rest
		} = this.props

    return (
			<Input
        {...rest}/>
    )
  }
}

const Input = styled.input`
  margin: 1.5vh 0;
  width: 25em;
  height: 2em;
  font-size: 1.5em;
`

CMSText.propTypes = {
}

CMSText.defaultProps = {
}
