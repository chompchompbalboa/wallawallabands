//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { CMSWidth } from 'src/styles/admin/layout'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSText extends Component {

  static propTypes = {
    name: string,
    placeholder: string,
    value: string,
    onChange: func
  }
  static defaultProps = {
    name: "Default CMSText - name",
    placeholder: "Default CMSText - placeholder",
    value: "Default CMSText - value",
    onChange: () => {console.warn('You need to define an onChange function for the CMSText component to work properly')}
  }

  render() {
		const {
      name,
      placeholder,
      value,
      onChange,
      ...rest
		} = this.props

    return (
			<Input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}/>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Input = styled.input`
  margin: 1.5vh 0;
  width: ${CMSWidth};
  height: 2em;
  font-size: 1.5em;
`
