import React from 'react'
import { View } from 'react-native'

// Styles
import { globalStyles } from '@styles/styles'

const Container = ({ children }) => {
  return <View style={globalStyles.container}>{children}</View>
}

export default Container
