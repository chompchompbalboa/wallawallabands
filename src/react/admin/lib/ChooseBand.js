//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import CMSSelect from 'src/react/admin/lib/CMS/CMSSelect'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class ChooseBand extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  convertBandsToOptions = (bands) => {
    return bands.map((band, index) => {
      return {text: band.name, value: band.slug}
    })
  }

  handleSelectChange = (e, data) => {
    const { setActiveBand } = this.props
    setActiveBand(data.value)
  }

  render() {
		const {
      bands
    } = this.props
    const options = this.convertBandsToOptions(bands)
    
    return (
			<Container>
        <CMSSelect
          placeholder="Select Band"
          defaultValue={options[0].value}
          options={options}
          handleChange={this.handleSelectChange}/>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
`
