import React from 'react'
import { Text } from 'react-native'

// Styles
import { fonts } from '@styles/styles'

/**
 * @desc    Render text with custom style
 */
const DefaultText = ({ children, style, ...props }) => {
  return (
    <Text style={[fonts.default, style]} {...props}>
      {children}
    </Text>
  )
}

export default DefaultText
