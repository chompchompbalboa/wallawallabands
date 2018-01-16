import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class TaskContainer extends Component {

  render() {
		const {
      activeTask,
      ...rest
		} = this.props

    return (
			<Container {...rest}>
        {activeTask}
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
  sidebar: PropTypes.shape({
    width: PropTypes.number
  })
}

TaskContainer.defaultProps = {
  sidebar: {
    width: 15
  }
}
