import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { primary, tileBackground } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

export default class BandsTile extends Component {

  render() {
		const {
      children,
      className
		} = this.props

    return (
			<Container className={className}>
        {children}
			</Container>
    )
  }
}

const Container = styled.div`
  padding: 1.5vh ${padding};
	background-color: ${tileBackground};
	font-family: Raleway;
`
