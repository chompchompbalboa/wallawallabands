import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { primary, gray } from 'src/styles/colors'

export default class CMSSaveButton extends Component {

  render() {
		const {
		} = this.props

    return (
			<Container>
        SAVE
			</Container>
    )
  }
}

const Container = styled.button`
  width: 10vw;
  padding: 0.9em;
  background-color: ${primary};
  color: white;
  box-shadow: none;
  border-radius: 5px;
  font-size: 14px;
`

CMSSaveButton.propTypes = {
}

CMSSaveButton.defaultProps = {
}
