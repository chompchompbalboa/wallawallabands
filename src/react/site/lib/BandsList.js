import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import _ from 'lodash'

import { text, tileBackground } from 'src/styles/colors'

export default class BandsList extends Component {

  groupAndSortBands(bands) {
    const payload = [];
    // Group bands by the first letter of their name
    const groups = _.groupBy(bands, (band) => {return band.name.substring(0,1)})
    // Sort each group into alphabetical order
    for (let letter in groups) {
      let group = groups[letter]
      payload.push(group = _.sortBy(group, ['name']))
    }
    return payload
  }

  render() {
		const {
      bands
		} = this.props
    const groupedAndSortedBands = this.groupAndSortBands(bands)

    return (
			<Container>
        {
          groupedAndSortedBands.map((group, index) => {
            return (
              <Group key={index}>
                {
                  group.map((band, index) => {
                    return (
                      <StyledLink to={"band/" + band.slug} key={index}>
                        <BandLink>
                          { band.name }
                        </BandLink>
                      </StyledLink>
                  )})
                }
                <Divider />
              </Group>
            )})
        }
			</Container>
    )
  }
}

const Container = styled.div`
  width: calc(100% - 7vw);
  padding: 1.5vh 3.5vw;
  background-color: ${tileBackground};
`

const Group = styled.div`
  margin: 0 0 2vh 0;
`

const Divider = styled.div`
  height: 1px;
  background-color: rgb(150,150,150);
  align-self: center;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const BandLink = styled.div`
  margin: 0 0 2.5vh 0;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${text};
  font-weight: 300
`
