import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

@connect()
export default class MusicPlayer extends Component {

  render () {
		const {
		} = this.props

    return (
			<Container>
        Component
			</Container>
    )
  }
}

const Container = styled.div`
`

MusicPlayer.propTypes = {
}

MusicPlayer.defaultProps = {
}
