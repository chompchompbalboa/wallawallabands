import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import SidebarItem from 'src/react/admin/lib/SidebarItem'

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
			<SidebarItem active={active} onClick={() => setActiveTask(id)}>
        {text}
			</SidebarItem>
    )
  }
}

SidebarTask.propTypes = {
}

SidebarTask.defaultProps = {
}
