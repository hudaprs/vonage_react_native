import React, { useRef, useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, Keyboard } from 'react-native'

// Styles
import { colors } from '@styles/styles'

const OTPINput = ({ setCode }) => {
  // Ref
  const textInputOneRef = useRef()
  const textInputTwoRef = useRef()
  const textInputThreeRef = useRef()
  const textInputFourRef = useRef()

  // States
  const [otpOne, setOtpOne] = useState('')
  const [otpTwo, setOtpTwo] = useState('')
  const [otpThree, setOtpThree] = useState('')
  const [otpFour, setOtpFour] = useState('')

  useEffect(() => {
    textInputOneRef.current.focus()
  }, [])

  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        flexDirection: 'row'
      }}
    >
      <TextInput
        maxLength={1}
        ref={textInputOneRef}
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={otpOne => {
          setOtpOne(otpOne)
          if (otpOne !== '') {
            textInputTwoRef.current.focus()
          } else {
            textInputOneRef.current.focus()
          }
        }}
        value={otpOne}
      />
      <TextInput
        maxLength={1}
        ref={textInputTwoRef}
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={otpTwo => {
          setOtpTwo(otpTwo)
          if (otpTwo !== '') {
            textInputThreeRef.current.focus()
          } else {
            textInputOneRef.current.focus()
          }
        }}
        value={otpTwo}
      />
      <TextInput
        maxLength={1}
        ref={textInputThreeRef}
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={otpThree => {
          setOtpThree(otpThree)
          if (otpThree !== '') {
            textInputFourRef.current.focus()
          } else {
            textInputTwoRef.current.focus()
          }
        }}
        value={otpThree}
      />
      <TextInput
        maxLength={1}
        ref={textInputFourRef}
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={otpFour => {
          setOtpFour(otpFour)
          if (otpFour !== '') {
          } else {
            textInputThreeRef.current.focus()
          }

          // Set codes
          if (
            otpOne !== '' &&
            otpTwo !== '' &&
            otpThree !== '' &&
            otpFour !== ''
          ) {
            Keyboard.dismiss()
            setCode(`${otpOne}${otpTwo}${otpThree}${otpFour}`)
          }
        }}
        value={otpFour}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.supernova,
    textAlign: 'center'
  }
})

export default OTPINput
