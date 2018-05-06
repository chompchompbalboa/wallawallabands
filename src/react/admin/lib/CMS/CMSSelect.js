//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, object, shape, string } from 'prop-types'
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
    handleChange: func,
    style: object
}

  static defaultProps = {
    placeholder: "Select an option",
    options: [
      {text: "Option 1", value: "Option 1"},
      {text: "Option 2", value: "Option 2"},
      {text: "Option 3", value: "Option 3"}
    ],
    handleChange: () => {console.warn("You need to define a handleChange function for CMSSelect to work properly")},
    style: {}
  }

  render() {
		const {
      value,
      placeholder,
      options,
      handleChange,
      style
    } = this.props

    return (
      <Dropdown
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={handleChange}
        fluid
        search
        selection
        style={style}
      />
    )
  }
}
