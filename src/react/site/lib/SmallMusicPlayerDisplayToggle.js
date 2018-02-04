//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

import Icon from 'src/react/lib/Icon'
import { musicNote, xCircle } from 'src/styles/icons'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class SmallMusicPlayerDisplayToggle extends Component {

  static propTypes = {
    contentVisible: bool
  }

  static defaultProps = {
    contentVisible: false
  }

  render() {
		const { contentVisible, ...rest } = this.props

    return (
			<Container {...rest}>
        <Icon
          icon={contentVisible ? xCircle : musicNote}
          color={"white"}
          size={20}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 80vh;
  right: 0;
  height: 7vh;
  width: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
`
