import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

// Components
import { DefaultText } from '@components'

// Styles
import { globalStyles, colors, buttons } from '@styles/styles'

// SVG
import UserSVG from '@images/auth/user.svg'
import MailSVG from '@images/auth/mail.svg'
import PhoneSVG from '@images/auth/phone.svg'
import PasswordSVG from '@images/auth/password.svg'
import EyeOffSVG from '@images/auth/eyeoff.svg'

const SignUpScreen = ({ navigation }) => {
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
              secureTextEntry={true}
            />
            <EyeOffSVG style={[styles.inputIcon, { right: 0 }]} />
          </View>

          <View style={[globalStyles.flexRow, globalStyles.inputGroup]}>
            <PasswordSVG style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder='Confirm Password'
              underlineColorAndroid='transparent'
              secureTextEntry={true}
            />
            <EyeOffSVG style={[styles.inputIcon, { right: 0 }]} />
          </View>
        </View>

        <TouchableOpacity
          style={[buttons.button, buttons.buttonBlock]}
          onPress={() => navigation.navigate('Verification')}
        >
          <DefaultText style={buttons.buttonText}>Sign Up</DefaultText>
        </TouchableOpacity>
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
