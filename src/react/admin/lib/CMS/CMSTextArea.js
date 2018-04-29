//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { CMSWidth } from 'src/styles/admin/layout'
import { Form, TextArea } from 'semantic-ui-react'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSTextArea extends Component {

  static propTypes = {
    name: string,
    placeholder: string,
    value: string,
    onChange: func
  }
  static defaultProps = {
    name: "Default CMSTextArea - name",
    placeholder: "Default CMSTextArea - placeholder",
    value: "Default CMSTextArea - value",
    onChange: () => {console.warn('You need to define an onChange function for the CMSTextArea component to work properly')}
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
      <Form>
  			<TextArea
          autoHeight
          name={name}
          value={value}
          onChange={onChange}
          style={{width: CMSWidth, fontSize: "14px"}}/>
      </Form>
    )
  }
}
