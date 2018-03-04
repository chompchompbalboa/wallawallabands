//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSSelect extends Component {

  static propTypes = {
    options: arrayOf(shape({
      text: string,
      value: string
    })),
    handleChange: func
}

  static defaultProps = {
    options: [
      {text: "Option 1", value: "Option 1"},
      {text: "Option 2", value: "Option 2"},
      {text: "Option 3", value: "Option 3"}
    ],
    handleChange: () => {console.warn("You need to define a handleChange function for CMSSelect to work properly")}
  }

  render() {
		const {
      handleChange,
      options
		} = this.props

    return (
      <Select
      type="text"
      list="options"
      onInput={handleChange}>
        {options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}>
              {option.text}
            </option>
        )})}
      </Select>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Select = styled.select`
  margin: 1.5vh 0;
  width: 25em;
  height: 2em;
  font-size: 1.5em;
`
