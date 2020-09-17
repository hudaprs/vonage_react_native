import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, ActivityIndicator } from 'react-native'

// Components
import { DefaultText } from '@components'

// Styles
import { buttons, colors } from '@styles/styles'

/**
 * @desc    Render button with custom style
 *
 * @param   {func}      onPress
 * @param   {object}    style
 * @param   {boolean}   bottom
 * @param   {boolean}   loading
 */
const DefaultButton = ({ children, style, onPress, bottom, loading }) => {
  // Place button in bottom
  const buttonPlacement = bottom ? null : null

  return (
    <TouchableOpacity
      style={[
        buttons.button,
        buttons.buttonBlock,
        loading ? buttons.buttonDisable : null,
        style,
        buttonPlacement
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={colors.supernova} />
      ) : (
        <DefaultText style={buttons.buttonText}> {children}</DefaultText>
      )}
    </TouchableOpacity>
  )
}

DefaultButton.propTypes = {
  onPress: PropTypes.func,
  loading: PropTypes.bool
}

DefaultButton.defaultProps = {
  loading: false
}

export default DefaultButton
