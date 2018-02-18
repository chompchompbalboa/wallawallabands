//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { seekTo } from 'src/store/audioActions'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    played: state.audio.played
  }),
  dispatch => ({
    seekTo: (percentage) => dispatch(seekTo(percentage))
  })
)
export default class ControlsLength extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  setWidth = (played) => {
    return ((played * 100) + "%")
  }

  seekTo = (e) => {
    const { seekTo } = this.props
    const rect = this.container.getBoundingClientRect()
    const width = rect.right - rect.left
    const clickLocation = e.clientX - rect.left
    const percentage = (clickLocation / width)
    seekTo(percentage)
  }

  render() {
		const {
      played
    } = this.props
    const width = this.setWidth(played)

    return (
			<Container
        innerRef={(c) => {this.container = c}}
        onClick={(e) => this.seekTo(e)}>
        <Length width={width}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgb(165,165,165)
`

const Length = styled.div.attrs({
  style: ({width}) => ({width})
})`
  height: 100%;
  background-color: black;
`
