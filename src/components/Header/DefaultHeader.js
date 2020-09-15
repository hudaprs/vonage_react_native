import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

// SVG
import DekorSVG from '@images/auth/dekor.svg'

// Components
import { DefaultText } from '@components'

// Style
import { colors } from '@styles/styles'

const DefaultHeader = ({ title }) => {
  return (
    <View>
      {/* Rounded Supernova and Blue color */}
      <DekorSVG style={styles.headerDekor} />
      {/* Default Text */}
      <DefaultText style={styles.headerTitleText}>{title}</DefaultText>
    </View>
  )
}

DefaultHeader.propTypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  headerDekor: {
    position: 'absolute',
    top: -70,
    right: -50
  },
  headerTitleText: {
    fontSize: 20,
    color: colors.indigo,
    fontFamily: 'Poppins-SemiBold'
  }
})

export default DefaultHeader
