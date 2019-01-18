//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const LoadingDefault = () => (
  <Container />
)

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LoadingDefault