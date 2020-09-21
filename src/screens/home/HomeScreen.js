import React from 'react'

// Components
import { Container, DefaultText } from '@components'

// Styles
import { fonts } from '@styles/styles'

const HomeScreen = () => {
  return (
    <Container>
      <DefaultText style={fonts.xl}>Home</DefaultText>
    </Container>
  )
}

export default HomeScreen
