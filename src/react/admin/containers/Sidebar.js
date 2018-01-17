import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import Header from 'src/react/admin/lib/SidebarHeader'
import Task from 'src/react/admin/lib/SidebarTask'
import Logout from 'src/react/admin/containers/LogoutButton'

export default class Sidebar extends Component {

  render() {
		const {
      tasks,
      ...rest
		} = this.props

    return (
			<Container {...rest}>
        <Header />
        {tasks.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            text={task.text}
            {...rest}/>
        ))}
        <Logout />
			</Container>
    )
  }
}

const Container = styled.div`
  width: ${props => props.sidebar.width + 'vw'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(225,225,225,1);
  box-shadow: 0 0 5px rgb(125,125,125);
`

Sidebar.propTypes = {
  tasks: PropTypes.array
}

Sidebar.defaultProps = {
  tasks: [
    {id: "ADD_BAND", text: "Add a new band"},
    {id: "EDIT_BAND", text: "Edit an existing band"},
    {id: "DELETE_BAND", text: "Delete an existing band"}
  ]
}
