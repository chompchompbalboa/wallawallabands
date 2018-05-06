//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import styled from 'styled-components'

import { xNoCircle } from '../../../../styles/icons';

import { Button } from 'semantic-ui-react'
import CMSSelect from 'src/react/admin/lib/CMS/CMSSelect'
import Icon from 'src/react/lib/Icon'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class CMSSimilarBands extends Component {

  static propTypes = {
    similarBands: arrayOf(shape({
      id: number,
      name: string
    })),
    updateSimilarBands: func
  }

  static defaultProps = {
    similarBands: [
      {id: 1, name: "The Blast"},
      {id: 2, name: "6 Shots To Midnight"}
    ],
    updateSimilarBands: () => {console.warn("You need to define an updateSimilarBands function for CMSSimilarBands to work properly")}
  }

  addSimilarBand = () => {
    const { bands, similarBands, updateSimilarBands } = this.props;
    let newSimilarBands = similarBands.slice()
    newSimilarBands.push({
      id: bands[0].id,
      name: bands[0].name,
      bio: bands[0].bio,
      slug: bands[0].slug,
    })
    updateSimilarBands(newSimilarBands)
  }

  convertBandsToOptions = (bands) => {
    return bands.map((band, index) => {
      return {text: band.name, value: band.id + ""}
    })
  }

  deleteSimilarBand = (selectIndex) => {
    const { bands, similarBands, updateSimilarBands } = this.props
    let newSimilarBands = []
    similarBands.map((similarBand, index) => {
      let newSimilarBand = Object.assign({}, similarBand)
      console.log(selectIndex === index)
      console.log(index)
      if(index !== selectIndex) {
        console.log('ok')
        newSimilarBands.push(newSimilarBand)
      }
    })
    updateSimilarBands(newSimilarBands)
  }

  updateSimilarBands = (data, selectIndex) => {
    const { bands, similarBands, updateSimilarBands } = this.props
    let newSimilarBands = []
    similarBands.map((similarBand, index) => {
      let newSimilarBand = Object.assign({}, similarBand)
      if(index === selectIndex) {
        let band = _.find(bands, {'id': Number(data.value)})
        newSimilarBand.id = band.id
        newSimilarBand.name = band.name
        newSimilarBand.bio = band.bio
        newSimilarBand.slug = band.slug
      }
      newSimilarBands.push(newSimilarBand)
    })
    updateSimilarBands(newSimilarBands)
  }

  render() {
		const {
      bands,
      similarBands
    } = this.props
    const options = this.convertBandsToOptions(bands)

    return (
			<Container>
        {similarBands.map((band, index) => {
          return (
            <SimilarBandContainer key={index}>
              <CMSSelect
                value={band.id + ""}
                options={options}
                handleChange={(e, data) => this.updateSimilarBands(data, index)}
                style={{marginTop: "1vh"}}
                />
                <DeleteContainer
                  onClick={() => this.deleteSimilarBand(index)}
                  >
                  <Icon 
                    icon={xNoCircle}/>
                </DeleteContainer>
            </SimilarBandContainer>
          )
        })}
        <AddSimilarBand
          onClick={() => this.addSimilarBand()}
          size="mini"
          style={{width: '12vw', marginTop: '2vh'}}>
          Add Similar Band
        </AddSimilarBand>
			</Container>
  )}
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
`

const SimilarBandContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DeleteContainer = styled.div`
  cursor: pointer;
  margin-left: 1.5vh;
`

const AddSimilarBand = styled(Button)``
