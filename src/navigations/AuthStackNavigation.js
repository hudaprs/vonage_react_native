import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Get stack navigator
const Stack = createStackNavigator()

// Screens
import SignUpScreen from '@screens/auth/SignUpScreen'
import VerificationSuccessScreen from '@screens/auth/VerificationSuccessScreen'
import VerificationScreen from '@screens/auth/VerificationScreen'

// Components
import { DefaultHeader } from '@components'

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorStyle}>
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          headerTitle: () => <DefaultHeader title='Sign Up' />
        }}
      />
      <Stack.Screen
        name='Verification'
        component={VerificationScreen}
        options={{
          title: 'Verification',
          headerTitle: () => <DefaultHeader title='Verification' />
        }}
      />
      <Stack.Screen
        name='VerificationSuccess'
        component={VerificationSuccessScreen}
        options={{
          title: 'VerificationSuccess',
          headerLeft: null,
          headerTitle: () => <DefaultHeader />
        }}
      />
    </Stack.Navigator>
  )
}

const stackNavigatorStyle = {
  headerStyle: {
    backgroundColor: '#fff',
    elevation: 0
  }
}

export default AuthStackNavigation
