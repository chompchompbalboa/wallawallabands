import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape } from 'src/styles/breakpoints'
import { background } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

export default class Content extends Component {

  render() {
		const { visible, children } = this.props

    return (
			<Container visible={visible}>
        {children}
			</Container>
    )
  }
}

const Container = styled.div`
  padding: ${padding};
	width: calc(100% - 6vh);
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 1s;
  display: flex;
  flex-flow: row wrap;
`

Content.propTypes = {
  visible: PropTypes.bool
}

Content.defaultProps = {
  visible: true
}
