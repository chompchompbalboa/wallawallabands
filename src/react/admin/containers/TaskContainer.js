import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import AddBand from 'src/react/admin/lib/AddBand'
import EditBand from 'src/react/admin/lib/EditBand'
import DeleteBand from 'src/react/admin/lib/DeleteBand'

export default class TaskContainer extends Component {

  constructor(props) {
    super(props)
  }

  setTask(activeTask) {
    switch(activeTask) {
      case 'ADD_BAND':
        return <AddBand />
      break;
      case 'EDIT_BAND':
        return <EditBand />
      break;
      case 'DELETE_BAND':
        return <DeleteBand />
      break;
      default:
        return <AddBand />
    }
  }

  render() {
		const {
      activeTask,
      ...rest
		} = this.props
    const task = this.setTask(activeTask)

    return (
			<Container {...rest}>
        {task}
			</Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.sidebar.width + 'vw'};
  width: ${props => (100 - props.sidebar.width) + 'vw'};
`

TaskContainer.propTypes = {
  activeTask: PropTypes.string
}

TaskContainer.defaultProps = {
  activeTask: "ADD_BAND"
}
