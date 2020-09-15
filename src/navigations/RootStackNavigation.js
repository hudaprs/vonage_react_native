import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Get stack navigator
const Stack = createStackNavigator()

// Navigations
import AuthStackNavigation from '@navigations/AuthStackNavigation'
import HomeStackNavigation from '@navigations/HomeStackNavigation'

// Screens
import SplashScreen from '@screens/single/SplashScreen'

const RootStackNavigation = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <SplashScreen />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          {/* Auth */}
          <Stack.Screen name='Auth' component={AuthStackNavigation} />

          {/* App */}
          <Stack.Screen name='App' component={HomeStackNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default RootStackNavigation
