import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class UnderConstruction extends Component {

  render() {
		const {
		} = this.props

    return (
			<Container>
        COMING SOON
			</Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`

UnderConstruction.propTypes = {
}

UnderConstruction.defaultProps = {
}
