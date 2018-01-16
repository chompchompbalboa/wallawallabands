import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class SidebarTask extends Component {

  render() {
		const {
      activeTask,
      id,
      setActiveTask,
      text
		} = this.props
    const active = (activeTask === id)

    return (
			<Container active={active} onClick={() => setActiveTask(id)}>
        {text}
			</Container>
    )
  }
}

const Container = styled.div`
  cursor: ${props => props.active ? 'default' : 'pointer'};
  color: ${props => props.active ? 'red' : 'black'};
  :hover
`

SidebarTask.propTypes = {
}

SidebarTask.defaultProps = {
}
