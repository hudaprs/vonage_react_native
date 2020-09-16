import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

// Components
import { DefaultText } from '@components'

// Styles
import { buttons } from '@styles/styles'

/**
 * @desc    Render button with custom style
 *
 * @param   {func} onPress
 */
const DefaultButton = ({ children, style, onPress, bottom }) => {
  // Place button in bottom
  const buttonPlacement = bottom
    ? {
        position: 'absolute',
        bottom: 0
      }
    : null

  return (
    <TouchableOpacity
      style={[buttons.button, buttons.buttonBlock, style, buttonPlacement]}
      onPress={onPress}
    >
      <DefaultText style={buttons.buttonText}>{children}</DefaultText>
    </TouchableOpacity>
  )
}

DefaultButton.propTypes = {
  onPress: PropTypes.func
}

export default DefaultButton
