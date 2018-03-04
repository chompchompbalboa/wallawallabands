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

  handleSelectChange = (e) => {
    const { setActiveBand } = this.props
    setActiveBand(e.target.value)
  }

  render() {
		const {
      bands
    } = this.props
    const options = this.convertBandsToOptions(bands)

    return (
			<Container>
        <CMSSelect
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
