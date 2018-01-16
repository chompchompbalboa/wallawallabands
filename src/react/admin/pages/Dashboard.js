import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import Layout from 'src/react/admin/layouts/Default'

import Sidebar from 'src/react/admin/containers/Sidebar'
import Task from 'src/react/admin/containers/TaskContainer'

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTask: "ADD_BAND"
    }
    this.setActiveTask = this.setActiveTask.bind(this)
  }

  setActiveTask(newTask) {
    this.setState({
      activeTask: newTask
    })
  }


  render () {
    const {
      ...rest
    } = this.props
		const {
      activeTask
		} = this.state


    return (
			<Layout>
        <Sidebar
          activeTask={activeTask}
          setActiveTask={this.setActiveTask}
          {...rest}/>
        <Task
          activeTask={activeTask}
          {...rest}/>
			</Layout>
    )
  }
}

const Container = styled.div`
`

Dashboard.propTypes = {
  sidebar: PropTypes.shape({
    width: PropTypes.number
  })
}

Dashboard.defaultProps = {
  sidebar: {
    width: 15
  }
}
