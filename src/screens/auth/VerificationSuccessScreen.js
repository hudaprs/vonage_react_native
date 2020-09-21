import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'

// Components
import { DefaultText, Spinner } from '@components'

// SVG
import VerificationSuccessSVG from '@images/auth/verification-success.svg'

// Styles
import { globalStyles, fonts, margins, colored } from '@styles/styles'

// Redux
import { connect } from 'react-redux'
import { VERIFY_REQUESTED } from '@reduxActions/authActions'

const ValidationSuccessScreen = ({ route, verify, auth }) => {
  useEffect(() => {
    verify(route.params.requestID)
    // eslint-disable-nextline
  }, [])

  return (
    <View style={[globalStyles.container]}>
      <Spinner loading={auth.loading} />
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
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  verify: requestID => dispatch({ type: VERIFY_REQUESTED, payload: requestID })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidationSuccessScreen)
