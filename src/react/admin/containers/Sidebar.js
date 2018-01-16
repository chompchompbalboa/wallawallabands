import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import SidebarTask from 'src/react/admin/lib/SidebarTask'
import Logout from 'src/react/admin/containers/LogoutButton'

export default class Sidebar extends Component {

  render() {
		const {
      tasks,
      ...rest
		} = this.props

    return (
			<Container {...rest}>
        {tasks.map((task, index) => (
          <SidebarTask
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
  background-color: grey;
`

Sidebar.propTypes = {
  tasks: PropTypes.array,
  sidebar: PropTypes.shape({
    width: PropTypes.number
  })
}

Sidebar.defaultProps = {
  tasks: [
    {id: "ADD_BAND", text: "Add a new band"},
    {id: "EDIT_BAND", text: "Edit an existing band"}
  ],
  sidebar: {
    width: 15
  }
}
