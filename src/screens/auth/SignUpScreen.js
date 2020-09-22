import React, { Fragment } from 'react'
import { View, ScrollView } from 'react-native'

// Components
import {
  DefaultText,
  DefaultButton,
  TextInputWithIcon,
  DefaultModal,
  Spinner
} from '@components'

// Styles
import { globalStyles, colored } from '@styles/styles'

// Redux
import { connect } from 'react-redux'
import {
  SET_REGISTER_DATA,
  REGISTER_REQUESTED,
  CLEAR_AUTH_ERROR
} from '@reduxActions/authActions'

const SignUpScreen = ({
  navigation,
  auth,
  setRegisterData,
  register,
  clearError
}) => {
  // Redux States
  const { registerData } = auth

  // Control all forms
  const onChangeText = (name, value) => {
    setRegisterData({ ...registerData, [name]: value })
  }

  // Clear error message when user pressing modal button
  const onClearError = () => {
    clearError()
  }

  // Register the new user when pressing button
  const onRegister = () => {
    register(registerData)
  }

  return (
    <Fragment>
      {/* Spinner */}
      <Spinner loading={auth.loading} />

      <View style={globalStyles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between'
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Modal */}
          <DefaultModal
            visibility={!!auth.error}
            onPress={onClearError}
            titleHeader={auth.error ? auth.error.name : 'ERROR'}
          >
            <DefaultText>
              {auth.error ? auth.error : 'Something went wrong!'}
            </DefaultText>
          </DefaultModal>

          {/* Content */}
          <View>
            <DefaultText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Have a
              code before? Go to{' '}
              <DefaultText
                style={colored.blue}
                onPress={() => navigation.navigate('Verification')}
              >
                Verification
              </DefaultText>
            </DefaultText>

            <TextInputWithIcon
              placeholder='Phone'
              name='phone'
              onChangeText={onChangeText}
              value={registerData.phone}
            />
          </View>

          <DefaultButton onPress={onRegister} loading={auth.loading}>
            Sign Up
          </DefaultButton>
        </ScrollView>
      </View>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  setRegisterData: registerData =>
    dispatch({ type: SET_REGISTER_DATA, payload: registerData }),
  register: registerData =>
    dispatch({ type: REGISTER_REQUESTED, payload: registerData }),
  clearError: () => dispatch({ type: CLEAR_AUTH_ERROR })
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
