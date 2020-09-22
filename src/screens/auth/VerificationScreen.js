import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity
} from 'react-native'

// Styles
import { globalStyles } from '@styles/styles'

// Components
import { DefaultText, Spinner, OTPInput, DefaultModal } from '@components'

// SVG
import VerificationSVG from '@images/auth/verification.svg'

// Styles
import { margins, colors } from '@styles/styles'

// Redux
import { connect } from 'react-redux'
import {
  CODE_VERIFY_REQUESTED,
  CANCEL_REGISTER_REQUESTED,
  SET_VERIFY_VERIFICATION_REQUESTED,
  CLEAR_AUTH_ERROR
} from '@reduxActions/authActions'

const VerificationScreen = ({
  route,
  auth,
  verifyCode,
  verifyVerification,
  clearError
}) => {
  useEffect(() => {
    // Verify the verification when user access this screen
    verifyVerification()

    // eslint-disable-next-line
  }, [])

  // Clear error message when user pressing modal button
  const onClearError = () => {
    clearError()
  }

  // Verify when user has done inserting the token
  const onVerify = code => {
    verifyCode(code)
  }

  return (
    <View style={globalStyles.container}>
      {/* Spinner */}
      <Spinner loading={auth.loading} />

      <ScrollView
        contentContainerStyle={[globalStyles.grow, globalStyles.allCenter]}
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

        <VerificationSVG />
        <View style={margins.mt2}>
          {/* Info */}
          <DefaultText style={[styles.verificationText, margins.mb1]}>
            Code is sent to{' '}
            <DefaultText
              style={[styles.verificationText, { color: colors.blue }]}
            >
              {route.params ? route.params.phone : '-'}
            </DefaultText>
          </DefaultText>

          {/* OTP Form */}
          <OTPInput setCode={code => onVerify(code)} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  verificationText: {
    textAlign: 'center',
    fontSize: 14
  }
})

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  verifyCode: code => dispatch({ type: CODE_VERIFY_REQUESTED, payload: code }),
  cancelRegister: () => dispatch({ type: CANCEL_REGISTER_REQUESTED }),
  verifyVerification: () =>
    dispatch({ type: SET_VERIFY_VERIFICATION_REQUESTED }),
  clearError: () => dispatch({ type: CLEAR_AUTH_ERROR })
})

export default connect(mapStateToProps, mapDispatchToProps)(VerificationScreen)
