import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class EditBand extends Component {

  render() {
		const {
		} = this.props

    return (
			<Container>
        Edit band
			</Container>
    )
  }
}

const Container = styled.div`
`

EditBand.propTypes = {
}

EditBand.defaultProps = {
}
