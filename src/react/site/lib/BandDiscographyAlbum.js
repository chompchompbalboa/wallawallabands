//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import styled from 'styled-components'

import { desktop, tabletPortrait } from 'src/styles/breakpoints'
import { primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import albumCover1 from 'static/img/album-covers/1.jpg'

import AlbumCover from 'src/react/site/lib/AlbumCover'
import AlbumTitle from 'src/react/site/lib/AlbumTitle'
import AlbumYear from 'src/react/site/lib/AlbumYear'
import AlbumSongs from 'src/react/site/lib/AlbumSongs'
import DetailsDropdownLink from 'src/react/site/lib/AlbumDetailsDropdownLink'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class BandDiscographyAlbum extends Component {

  static propTypes = {
    album: shape({
      title: string,
      year: string,
      trackCount: number,
      songs: arrayOf(shape({
        title: string,
        length: string,
        playable: bool
  }))})}

  static defaultProps = {
    album: {
      title: "Default Album Title",
      year: "2005",
      trackCount: 12,
      songs: [
        {title: "Default Song 1", length: "3:30", playable: false},
        {title: "Default Song 2", length: "3:31", playable: true}
  ]}}

  state = {
    detailsActive: false
  }

  changeDetailsActive = () => {
    const newDetailsActive = !this.state.detailsActive
    this.setState({
      detailsActive: newDetailsActive
    })
  }

  render() {
		const {
      album: {
        cover,
        title,
        year,
        trackCount,
        songs,
    }} = this.props

    const {
      detailsActive
    } = this.state

    return (
			<Container>
        <AboveFoldContainer>
          <AlbumCover
            src={cover}
            width={"10vh"}
            height={"10vh"}/>
          <TextWrapper>
            <AlbumSummaryText>
              <AlbumYear
                year={year}/>
              <AlbumTitle
                title={title}/>
            </AlbumSummaryText>
            <MoreContainer>
              <More onClick={this.changeDetailsActive}>
                {detailsActive
                  ? '...less'
                  : '...more'}
              </More>
            </MoreContainer>
          </TextWrapper>
        </AboveFoldContainer>
        <BelowFoldContainer active={detailsActive}>
          <AlbumSongs
            songs={songs}/>
        </BelowFoldContainer>
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const transitionTime = '0.25s'
const Container = styled.div`
  width: calc(100% - (2 * calc(${padding} / 2)));
  padding: ${padding} calc(${padding} / 2);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px gray solid;
  transition: all ${transitionTime};
  &:first-child {
    margin-top: -${padding};
  }
  &:last-child {
    border-bottom: none;
    margin-bottom: -${padding};
  }
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AboveFoldContainer = InfoContainer.extend`
  width: 100%;
  display: flex;
  flex-direction: row wrap;
  justify-content: flex-end;
  align-items; center;
`

const BelowFoldContainer = InfoContainer.extend`
  display: ${props => props.active ? 'flex' : 'none'};
`

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const AlbumSummaryText = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${tabletPortrait} {
    width: 70%;
    justify-content: space-between;
  }
`

const MoreContainer = styled.div`
  margin-top: 2vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const More = styled.div`
  color: gray;
  transition: all ${transitionTime};
  @media ${desktop} {
    cursor: pointer;
    &:hover {
      color: ${primary};
    }
  }
`
