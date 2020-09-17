import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Get stack navigator
const Stack = createStackNavigator()

// Navigations
import { setNavigator } from '@navigations/NavigationRef'
import AuthStackNavigation from '@navigations/AuthStackNavigation'
import MainStackNavigation from '@navigations/MainStackNavigation'

// Screens
import SplashScreen from '@screens/single/SplashScreen'

// Redux
import { connect } from 'react-redux'
import { VERIFY_REQUESTED } from '@reduxActions/authActions'

const RootStackNavigation = ({ verify, auth }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    verify()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <SplashScreen />
  } else {
    return (
      <NavigationContainer ref={navigator => setNavigator(navigator)}>
        <Stack.Navigator headerMode='none'>
          {!auth.loading && auth.nexmo && auth.nexmo.status === 'SUCCESS' ? (
            <Stack.Screen name='App' component={MainStackNavigation} />
          ) : (
            <Stack.Screen name='Auth' component={AuthStackNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  verify: () => dispatch({ type: VERIFY_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(RootStackNavigation)
