import React from 'react'
import { View, ActivityIndicator } from 'react-native'

// Components
import { DefaultText } from '@components'

// Styles
import { colors, fonts, colored, deviceSize } from '@styles/styles'

const Spinner = ({ loading }) => {
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, .5)',
          zIndex: 1
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: deviceSize.deviceHeight - 150
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 10,
              padding: 30,
              backgroundColor: colors.white
            }}
          >
            <ActivityIndicator size={100} color={colors.supernova} />
            <DefaultText style={[fonts.xl, colored.supernova]}>
              Loading...
            </DefaultText>
          </View>
        </View>
      </View>
    )
  } else {
    return null
  }
}

Spinner.defaultProps = {
  loading: false
}

export default Spinner
