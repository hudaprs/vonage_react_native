import React from 'react'
import { View, ScrollView } from 'react-native'

// Components
import { DefaultText, DefaultButton } from '@components'

// SVG
import VerificationSuccessSVG from '@images/auth/verification-success.svg'

// Styles
import { globalStyles, fonts, margins, colored } from '@styles/styles'

const ValidationSuccessScreen = ({ navigation }) => {
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
        <DefaultButton style={{ position: 'absolute', bottom: 0 }}>
          Go To Home Page
        </DefaultButton>
      </ScrollView>
    </View>
  )
}

export default ValidationSuccessScreen
