import React, { useState } from 'react'
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
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { DefaultText } from '@components'

// SVG
import VerificationSVG from '@images/auth/verification.svg'
import VerificationFailedSVG from '@images/auth/verification-failed.svg'

// Styles
import { margins, colors, buttons, deviceSize } from '@styles/styles'

const VerificationScreen = ({ navigation }) => {
  const [modal, setModal] = useState(false)
  const [arrCode, setArrCode] = useState([])
  const [code, setCode] = useState('')

  return (
    <View style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={globalStyles.allCenter}>
          <VerificationSVG />
          <View style={margins.mt2}>
            {/* Info */}
            <DefaultText style={[styles.verificationText, margins.mb1]}>
              Code is sent to{' '}
              <DefaultText
                style={[styles.verificationText, { color: colors.blue }]}
              >
                0894 5345 6789
              </DefaultText>
            </DefaultText>

            <DefaultText style={[styles.verificationText, margins.mx2]}>
              Enter the verification code we sent you on your number phone
            </DefaultText>

            {/* OTP Input Form */}
            <View style={{ marginHorizontal: 30 }}>
              <OTPInputView
                color='red'
                style={{
                  height: 100,
                  width: deviceSize.width
                }}
                pinCount={4}
                code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={value => {
                  arrCode.push(value)
                  setCode(arrCode[arrCode.length - 1])
                }}
                autoFocusOnLoad
                // clearInputs={true}
                placeholderTextColor='#000'
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                codeInputFieldStyle={styles.codeInputColor}
                onCodeFilled={code => setCode(code)}
              />
            </View>

            <DefaultText
              style={[styles.verificationText, margins.mx2, margins.mt2]}
            >
              If you didn’t receive a code!{' '}
              <DefaultText
                style={[styles.verificationText, { color: colors.blue }]}
              >
                Resend
              </DefaultText>
            </DefaultText>

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
        </View>

        <TouchableOpacity
          style={[buttons.button, buttons.buttonBlock]}
          onPress={() => {
            if (!code) {
              return false
            } else {
              setModal(true)
            }
          }}
        >
          <DefaultText style={buttons.buttonText}>Verify</DefaultText>
        </TouchableOpacity>
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

export default VerificationScreen
