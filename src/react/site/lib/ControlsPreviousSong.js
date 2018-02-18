//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { previousSong as previousSongAction } from 'src/store/queueActions'

import { previousSong as previousSongIcon } from 'src/styles/icons'
import { controlsIconSize } from 'src/styles/layout'

import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@connect(
  state => ({
    queue: state.queue
  }),
  dispatch => ({
    previousSongDispatch: (queue) => dispatch(previousSongAction(queue))
  })
)
export default class ControlsPreviousSong extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
		const {
      previousSongDispatch,
      queue
    } = this.props

    return (
			<Container onClick={() => previousSongDispatch(queue)}>
        <Icon
          icon={previousSongIcon}
          color={"black"}
          size={controlsIconSize}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
