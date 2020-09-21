import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

// Components
import { Container, DefaultText, DefaultButton } from '@components'

// Styles
import { fonts, margins } from '@styles/styles'

// Redux
import { connect } from 'react-redux'
import { LOGOUT_REQUESTED } from '@reduxActions/authActions'

const HomeScreen = ({ logout }) => {
  const onLogout = () => {
    logout()
  }

  return (
    <Container>
      <DefaultText style={[fonts.xl, margins.mb4]}>Home</DefaultText>
      {/* <DefaultButton onPress={onLogout}>Logout</DefaultButton> */}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: LOGOUT_REQUESTED })
})

export default connect(null, mapDispatchToProps)(HomeScreen)
