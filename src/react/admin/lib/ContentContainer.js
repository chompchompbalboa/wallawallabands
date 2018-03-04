//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import Bands from 'src/react/admin/lib/BandsContainer'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class ContentContainer extends Component {

  static propTypes = {
    active: string
  }
  static defaultProps = {
    active: "BANDS"
  }

  setTask = (activeTask) => {
    switch(activeTask) {
      case 'BANDS':
        return <Bands />
      break;
      default:
        return <Bands />
    }
  }

  render = () => {
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

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 20vw;
  width: calc(80vw - 10vw);
  padding: 4vw 5vw;
`
