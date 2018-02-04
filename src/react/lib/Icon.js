//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import { musicNote } from 'src/styles/icons'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Icon extends Component {

  static propTypes = {
    icon: string,
    color: string,
    size: number
  }

  static defaultProps = {
    icon: musicNote,
    color: "black",
    size: 24
  }

  render() {
		const { icon, color, size } = this.props
    const styles = {
      svg: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      path: {
        fill: color,
      },
    }

    return (
			<svg
        style={styles.svg}
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 1024 1024"
        >
        <path
          style={styles.path}
          d={icon}
        ></path>
			</svg>
  )}
}