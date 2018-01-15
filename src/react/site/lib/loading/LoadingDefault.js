import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class LoadingDefault extends Component {

  render () {
		const {
			message
		} = this.props

    return (
      <Container>
        {message}
		  </Container>
    )
  }
}

const Container = styled.div`
`

LoadingDefault.propTypes = {
  message: PropTypes.string
}

LoadingDefault.defaultProps = {
  message: "I'm grabbing the data from Graphcool, thanks for your patience"
}
