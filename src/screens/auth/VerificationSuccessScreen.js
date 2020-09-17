import React from 'react'
import { View, ScrollView } from 'react-native'

// Components
import { DefaultText, DefaultButton } from '@components'

// SVG
import VerificationSuccessSVG from '@images/auth/verification-success.svg'

// Styles
import { globalStyles, fonts, margins, colored } from '@styles/styles'

// Redux
import { connect } from 'react-redux'
import { VERIFY_REQUESTED } from '@reduxActions/authActions'

const ValidationSuccessScreen = ({ verify, auth }) => {
  const onVerify = () => {
    verify()
  }

  return (
    <View style={[globalStyles.container]}>
      <ScrollView
        contentContainerStyle={[globalStyles.allCenter, globalStyles.grow]}
      >
        <DefaultText style={[fonts.xl, fonts.bold]}>Congrats!</DefaultText>

        {/* SVG */}
        <VerificationSuccessSVG style={margins.my4} />

        <DefaultText>
          Your have <DefaultText style={colored.blue}>Successfully</DefaultText>{' '}
          verified this account
        </DefaultText>

        {/* Button */}
        <DefaultButton
          style={{ position: 'absolute', bottom: 0 }}
          loading={auth.loading}
          onPress={onVerify}
        >
          Go To Home Page
        </DefaultButton>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  verify: () => dispatch({ type: VERIFY_REQUESTED })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidationSuccessScreen)
