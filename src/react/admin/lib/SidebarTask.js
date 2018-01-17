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
  padding: 1.5vh 0.5vw;
  width: calc(100% - 1vw);
  cursor: ${props => props.active ? 'default' : 'pointer'};
  background-color: ${props => props.active ? 'rgb(226, 35, 26)' : 'transparent'};
  border-right: ${props => props.active ? '2px solid rgb(226, 35, 26)' : 'none'};
  box-shadow: ${props => props.active ? '1px 1px 15px 1px rgb(100,100,100)' : 'none'};
  color: ${props => props.active ? 'white' : 'black'};
  &:hover {
    color: ${props => props.active ? 'white' : 'rgb(226, 35, 26)'};
  }
  transition: background-color 0.05s, color 0.05s, box-shadow 0.05s, border-right 0.05s;
`

SidebarTask.propTypes = {
}

SidebarTask.defaultProps = {
}
