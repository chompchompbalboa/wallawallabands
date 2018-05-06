//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { primary } from 'src/styles/colors'

import { Button } from 'semantic-ui-react'
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
      activeBandSlug,
      bands,
      addBand,
      deleteBand
    } = this.props
    const options = this.convertBandsToOptions(bands)
    
    return (
			<Container>
        <CMSSelect
          placeholder="Select Band"
          defaultValue={options[0].value}
          value={activeBandSlug}
          options={options}
          handleChange={this.handleSelectChange}/>
        <AddBand
          onClick={addBand}
          size="mini"
          style={{width: '15vw', marginLeft: '1vh'}}>
          Add New Band
        </AddBand>
        <DeleteBand
          onClick={deleteBand}
          size="mini"
          style={{width: '12vw', marginLeft: '1vh', backgroundColor: primary, color: "white"}}>
          Delete Band
        </DeleteBand>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddBand = styled(Button)``

const DeleteBand = styled(Button)``
