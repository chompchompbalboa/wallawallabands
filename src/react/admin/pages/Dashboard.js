//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import Sidebar from 'src/react/admin/lib/Sidebar'
import Content from 'src/react/admin/lib/ContentContainer'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Dashboard extends Component {

  state = {
    activeTask: "BANDS"
  }

  static propTypes = {}
  static defaultProps = {}

  setActiveTask = (newTask) => {
    this.setState({
      activeTask: newTask
    })
  }

  render = () => {
    const { logout } = this.props
		const { activeTask } = this.state

    return (
			<Container>
        <Sidebar
          activeTask={activeTask}
          logout={logout}
          setActiveTask={this.setActiveTask}/>
        <Content
          activeTask={activeTask}/>
      </Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------

const Container = styled.div`
`
