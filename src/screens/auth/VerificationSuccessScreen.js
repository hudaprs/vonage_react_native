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

const ValidationSuccessScreen = ({ auth }) => {
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
          verified this account, you will be redirected soon
        </DefaultText>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(ValidationSuccessScreen)
