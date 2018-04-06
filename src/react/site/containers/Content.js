import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import { tabletPortrait, abletLandscape, desktop } from 'src/styles/breakpoints'
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
	width: 100%;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 1s;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  @media ${tabletPortrait} {
    width: calc(95% - (2 * ${padding}));
  }
  @media ${desktop} {
    width: calc(75% - (2 * ${padding}));
  }
`

Content.propTypes = {
  visible: PropTypes.bool
}

Content.defaultProps = {
  visible: true
}
