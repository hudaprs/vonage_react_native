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
import { DefaultText, Spinner, OTPInput } from '@components'

// SVG
import VerificationSVG from '@images/auth/verification.svg'
import VerificationFailedSVG from '@images/auth/verification-failed.svg'

// Styles
import {
  margins,
  colors,
  buttons,
  deviceSize,
  colored,
  fonts
} from '@styles/styles'

// Redux
import { connect } from 'react-redux'
import {
  CODE_VERIFY_REQUESTED,
  CANCEL_REGISTER_REQUESTED,
  SET_VERIFY_VERIFICATION_REQUESTED
} from '@reduxActions/authActions'
import { verifyVerification } from '../../redux/api/authApi'

const VerificationScreen = ({
  navigation,
  route,
  auth,
  verifyCode,
  verifyVerification
}) => {
  const [modal, setModal] = useState(false)
  const [code, setCode] = useState('')

  useEffect(() => {
    // Verify the verification when user access this screen
    verifyVerification()

    // eslint-disable-next-line
  }, [])

  const onVerify = code => {
    verifyCode(code)
  }

  return (
    <View style={globalStyles.container}>
      <Spinner loading={auth.loading} />
      <ScrollView
        contentContainerStyle={[globalStyles.grow, globalStyles.allCenter]}
        showsVerticalScrollIndicator={false}
      >
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

          {/* <DefaultText
            style={[styles.verificationText, margins.mx2, margins.mt2]}
          >
            If you didn’t receive a code!{' '}
            <DefaultText
              style={[styles.verificationText, { color: colors.blue }]}
            >
              Resend
            </DefaultText>
          </DefaultText> */}

          {/* Modal */}
          <Modal visible={modal} animationType='fade' transparent={true}>
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                {/* Header */}
                <View style={styles.modalHeader}>
                  <DefaultText
                    style={{
                      color: colors.indigo,
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}
                  >
                    Verification Failed!
                  </DefaultText>
                </View>

                {/* Body */}
                <View style={styles.modalBody}>
                  <View style={margins.mb2}>
                    <VerificationFailedSVG />
                  </View>
                  <DefaultText>
                    Your code OTP has been{' '}
                    <DefaultText style={{ color: colors.error }}>
                      failed
                    </DefaultText>{' '}
                    a verified
                  </DefaultText>
                </View>

                {/* Footer */}
                <View style={globalStyles.mt2}>
                  <TouchableOpacity
                    style={buttons.button}
                    onPress={() => {
                      setCode('')
                      setModal(false)
                    }}
                  >
                    <DefaultText style={buttons.buttonText}>
                      Try Again
                    </DefaultText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  verificationText: {
    textAlign: 'center',
    fontSize: 14
  },

  // OTP Components Styles
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: colors.supernova
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1
  },

  codeInputColor: {
    fontSize: 20,
    borderWidth: 0,
    borderBottomWidth: 1,
    marginHorizontal: 5,
    color: colors.indigo
  },

  underlineStyleHighLighted: {
    borderColor: colors.supernova
  },

  // Modal Styles, TODO: will be moved soon!
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    justifyContent: 'center'
  },
  modalContent: {
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalBody: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 20
  }
})

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  verifyCode: code => dispatch({ type: CODE_VERIFY_REQUESTED, payload: code }),
  cancelRegister: () => dispatch({ type: CANCEL_REGISTER_REQUESTED }),
  verifyVerification: () =>
    dispatch({ type: SET_VERIFY_VERIFICATION_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(VerificationScreen)
