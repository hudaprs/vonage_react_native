import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Get stack navigator
const Stack = createStackNavigator()

// Navigations
import AuthStackNavigation from '@navigations/AuthStackNavigation'
import HomeStackNavigation from '@navigations/HomeStackNavigation'

const RootStackNavigation = () => {
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

export default RootStackNavigation
