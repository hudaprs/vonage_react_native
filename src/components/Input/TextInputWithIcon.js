import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'

// Styles
import { globalStyles, colors } from '@styles/styles'

// SVG
import UserSVG from '@images/auth/user.svg'
import MailSVG from '@images/auth/mail.svg'
import PhoneSVG from '@images/auth/phone.svg'
import PasswordSVG from '@images/auth/password.svg'
import EyeOffSVG from '@images/auth/eyeoff.svg'
import EyeOnSVG from '@images/auth/eyeon.svg'

const TextInputWithIcon = ({
  placeholder,
  name,
  onChangeText,
  isPassword,
  value
}) => {
  // Set the icon
  let Icon
  if (name === 'name') {
    Icon = UserSVG
  } else if (name === 'email') {
    Icon = MailSVG
  } else if (name === 'phone') {
    Icon = PhoneSVG
  } else if (name === 'password' || name === 'passwordConfirmation') {
    Icon = PasswordSVG
  } else {
    Icon = UserSVG
  }

  return (
    <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
      <Icon style={styles.inputIcon} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        value={value}
        onChangeText={value => onChangeText(name, value)}
        secureTextEntry={isPassword}
      />
    </View>
  )
}

// Default Props
TextInputWithIcon.propTypes = {
  isPassword: false
}

TextInputWithIcon.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChangeText: PropTypes.func,
  isPassword: PropTypes.bool
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    width: '100%',
    paddingLeft: 30
  },
  inputIcon: {
    position: 'absolute'
  }
})

export default TextInputWithIcon
