import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Layout from 'src/react/layouts/Default'

@connect()
export default class Home extends Component {

  render () {
    return (
      <Layout>
				<Container>
					Home
				</Container>
		  </Layout>
    )
  }
}

const Container = styled.div`
`
