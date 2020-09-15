import React from 'react'
import { View, Text } from 'react-native'

// Styles
import { globalStyles } from '@styles/styles'

// SVG
import SplashSVG from '@images/splash/splash.svg'

const SplashScreen = () => {
  return (
    <View style={[globalStyles.container, globalStyles.allCenter]}>
      <SplashSVG />
    </View>
  )
}

export default SplashScreen
