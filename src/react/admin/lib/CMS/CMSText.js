//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { CMSWidth } from 'src/styles/admin/layout'
import { Form, Input } from 'semantic-ui-react'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSText extends Component {

  static propTypes = {
    label: string,
    name: string,
    placeholder: string,
    size: string,
    value: string,
    onChange: func
  }
  static defaultProps = {
    label: null,
    name: "Default CMSText - name",
    placeholder: "Default CMSText - placeholder",
    size: "mini",
    value: "Default CMSText - value",
    onChange: () => {console.warn('You need to define an onChange function for the CMSText component to work properly')}
  }

  render() {
		const {
      label,
      name,
      placeholder,
      size,
      value,
      onChange,
      ...rest
		} = this.props

    return (
      <Form>
        <Input
          label={label}
          name={name}
          placeholder={placeholder}
          size={size}
          value={value}
          onChange={onChange}
        />
      </Form>
    )
  }
}
