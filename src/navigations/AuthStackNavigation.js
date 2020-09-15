import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Get stack navigator
const Stack = createStackNavigator()

// Screens
import LoginScreen from '@screens/auth/LoginScreen'

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
