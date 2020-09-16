import React, { useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

// Components
import { DefaultText, DefaultButton } from '@components'

// Styles
import { globalStyles, colors } from '@styles/styles'

// SVG
import UserSVG from '@images/auth/user.svg'
import MailSVG from '@images/auth/mail.svg'
import PhoneSVG from '@images/auth/phone.svg'
import PasswordSVG from '@images/auth/password.svg'
import EyeOffSVG from '@images/auth/eyeoff.svg'
import EyeOnSVG from '@images/auth/eyeon.svg'

const SignUpScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(
    false
  )

  const onNavigate = () => {
    navigation.navigate('Verification')
  }

  return (
    <View style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <DefaultText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DefaultText>

          <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <UserSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Name'
              underlineColorAndroid='transparent'
            />
          </View>

          <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <MailSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              underlineColorAndroid='transparent'
            />
          </View>

          <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <PhoneSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Phone'
              underlineColorAndroid='transparent'
            />
          </View>

          <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <PasswordSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              underlineColorAndroid='transparent'
              secureTextEntry={!showPassword}
            />
            {showPassword ? (
              <TouchableOpacity
                style={[styles.inputIcon, { right: 0 }]}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EyeOnSVG />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.inputIcon, { right: 0 }]}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EyeOffSVG />
              </TouchableOpacity>
            )}
          </View>

          <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <PasswordSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Confirm Password'
              underlineColorAndroid='transparent'
              secureTextEntry={!showConfirmationPassword}
            />

            {showConfirmationPassword ? (
              <TouchableOpacity
                style={[styles.inputIcon, { right: 0 }]}
                onPress={() =>
                  setShowConfirmationPassword(!showConfirmationPassword)
                }
              >
                <EyeOnSVG />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.inputIcon, { right: 0 }]}
                onPress={() =>
                  setShowConfirmationPassword(!showConfirmationPassword)
                }
              >
                <EyeOffSVG />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <DefaultButton bottom={true} onPress={onNavigate}>
          Sign Up
        </DefaultButton>
      </ScrollView>
    </View>
  )
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

export default SignUpScreen
