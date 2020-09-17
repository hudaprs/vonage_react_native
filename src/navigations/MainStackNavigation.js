import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Get stack navigator
const Stack = createStackNavigator()

// Screens
import HomeScreen from '@screens/home/HomeScreen'

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MainStackNavigation
