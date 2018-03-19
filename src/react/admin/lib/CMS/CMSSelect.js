//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Dropdown } from 'semantic-ui-react'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSSelect extends Component {

  static propTypes = {
    placeholder: string,
    options: arrayOf(shape({
      text: string,
      value: string
    })),
    handleChange: func
}

  static defaultProps = {
    placeholder: "Select an option",
    options: [
      {text: "Option 1", value: "Option 1"},
      {text: "Option 2", value: "Option 2"},
      {text: "Option 3", value: "Option 3"}
    ],
    handleChange: () => {console.warn("You need to define a handleChange function for CMSSelect to work properly")}
  }

  render() {
		const {
      placeholder,
      options,
      handleChange
		} = this.props

    return (
      <Dropdown
        placeholder="Select Band"
        options={options}
        onChange={handleChange}
        fluid
        search
        selection
      />
    )
  }
}
