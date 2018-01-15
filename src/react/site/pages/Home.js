import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from 'src/react/site/layouts/Default'

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
