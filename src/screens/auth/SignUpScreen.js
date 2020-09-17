import React, { useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

// Components
import { DefaultText, DefaultButton, TextInputWithIcon } from '@components'

// Styles
import { globalStyles, colors } from '@styles/styles'

// SVG
import PasswordSVG from '@images/auth/password.svg'
import EyeOffSVG from '@images/auth/eyeoff.svg'
import EyeOnSVG from '@images/auth/eyeon.svg'

// Redux
import { connect } from 'react-redux'
import {
  SET_REGISTER_DATA,
  REGISTER_REQUESTED
} from '@reduxActions/authActions'

const SignUpScreen = ({ navigation, auth, setRegisterData, register }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(
    false
  )

  // Redux States
  const { registerData } = auth

  // Control all forms
  const onChangeText = (name, value) => {
    setRegisterData({ ...registerData, [name]: value })
  }

  // Register the new user when pressing button
  const onRegister = () => {
    if (!registerData.phone) {
      alert('Please fill the phone')
    } else {
      register(registerData)
    }
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

          {/* <TextInputWithIcon
            placeholder='Name'
            name='name'
            onChangeText={onChangeText}
            value={registerData.name}
          />

          <TextInputWithIcon
            placeholder='Email'
            name='email'
            onChangeText={onChangeText}
            value={registerData.email}
          /> */}

          <TextInputWithIcon
            placeholder='Phone'
            name='phone'
            onChangeText={onChangeText}
            value={registerData.phone}
          />

          {/* <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <PasswordSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              underlineColorAndroid='transparent'
              secureTextEntry={!showPassword}
              value={registerData.password}
              onChangeText={password =>
                setRegisterData({ ...registerData, password })
              }
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
          </View> */}

          {/* <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <PasswordSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Confirm Password'
              underlineColorAndroid='transparent'
              secureTextEntry={!showConfirmationPassword}
              value={registerData.passwordConfirmation}
              onChangeText={passwordConfirmation =>
                setRegisterData({ ...registerData, passwordConfirmation })
              }
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
          </View> */}
        </View>

        <DefaultButton onPress={onRegister} loading={auth.loading}>
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

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  setRegisterData: registerData =>
    dispatch({ type: SET_REGISTER_DATA, payload: registerData }),
  register: registerData =>
    dispatch({ type: REGISTER_REQUESTED, payload: registerData })
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
