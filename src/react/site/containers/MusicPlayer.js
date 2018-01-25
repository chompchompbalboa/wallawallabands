import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class MusicPlayer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
		const { visible } = this.state

    return (
			<Container visible={visible}>
        <TopControls>
          <Toggle visible={visible} onClick={this.toggleVisibility}>
            <ToggleText visible={visible}></ToggleText>
          </Toggle>
        </TopControls>
        <Player>
        </Player>
			</Container>
    )
  }
}

const colors = {
  background: 'gray'
}

const height = {
  container: 50,
  topContainer: 5
}

const Container = styled.div`
  position: fixed;
  top: ${(props) =>
    props.visible
    ? (100 - height.container) + 'vh'
    : (100 - height.topContainer) + 'vh'
  };
  width: 100vw;
  height: ${height.container + 'vh'};
  display: flex;
  flex-direction: column;
  transition: top 0.5s;
`

const TopControls = styled.div`
  width: 100%;
  height: ${height.topContainer + 'vh'};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Control = styled.div`
  padding: 1vh 0 0 0;
  width: 12vw;
  height: calc(100% - 1vh);
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  color: white;
  font-size: 1.5em;
`

const Toggle = Control.extend`
  margin-right: 2vw;
`

const ToggleText = styled.div`
  transform: ${props => props.visible ? 'scale(1,-1)' : 'none'};
  transition: transform 0.5s;
`

const Player = styled.div`
  width: 100%;
  height: ${(height.container - height.topContainer) + 'vh'};
  background-color: ${colors.background}
`

MusicPlayer.propTypes = {
}

MusicPlayer.defaultProps = {
}
