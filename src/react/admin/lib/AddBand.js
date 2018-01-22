import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import TaskWrapper from 'src/react/admin/lib/TaskWrapper'
import CMSText from 'src/react/admin/lib/CMS/CMSText'
import CMSSaveButton from 'src/react/admin/lib/CMS/CMSSaveButton'

export default class AddBand extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveBand() {
    const {
      name
    } = this.state
  }

  render() {
		const {
      name
		} = this.state

    return (
			<TaskWrapper header="Add Band">
        <CMSText
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => this.onChange(e)}/>
        <CMSSaveButton
          onClick={() => this.saveBand()}
          />
			</TaskWrapper>
    )
  }
}

AddBand.propTypes = {
}

AddBand.defaultProps = {
}
