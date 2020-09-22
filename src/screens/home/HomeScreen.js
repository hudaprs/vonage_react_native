import React from 'react'

// Components
import { Container, DefaultText } from '@components'

// Styles
import { fonts, margins } from '@styles/styles'

const HomeScreen = () => {
  return (
    <Container>
      <DefaultText style={[fonts.xl, margins.mb4]}>Home</DefaultText>
    </Container>
  )
}

export default HomeScreen
