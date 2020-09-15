import { StyleSheet, Dimensions } from 'react-native'

// Device Size
export const deviceSize = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

// Global Styles
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },

  allCenter: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
    // height: deviceSize.deviceHeight
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputGroup: {
    marginBottom: 10
  }
})

// Colors
export const colors = {
  indigo: '#102950',
  black: '#121212',
  white: '#fff',
  thinGray: '#eee',
  whiteWithOpacity: 'rgba(255,255,255,0.3)',
  thinWite: '#f7f7f7',
  blue: '#097bed',
  supernova: '#ffb12a',
  error: '#d93128'
}

// Fonts
export const fonts = StyleSheet.create({
  default: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.black
  }
})

// Margins
export const margins = StyleSheet.create({
  // Top
  mt4: {
    marginTop: 40
  },
  mt3: {
    marginTop: 30
  },
  mt2: {
    marginTop: 20
  },
  mt1: {
    marginTop: 10
  },

  // Bottom
  mb4: {
    marginBottom: 40
  },
  mb3: {
    marginBottom: 30
  },
  mb2: {
    marginBottom: 20
  },
  mb1: {
    marginBottom: 10
  },

  // Horizontal
  mx4: {
    marginHorizontal: 40
  },
  mx3: {
    marginHorizontal: 30
  },
  mx2: {
    marginHorizontal: 20
  },
  mx1: {
    marginHorizontal: 10
  }
})

// Buttons
export const buttons = StyleSheet.create({
  button: {
    width: 290,
    height: 34,
    borderRadius: 5,
    backgroundColor: colors.blue
  },
  buttonText: {
    marginTop: 7,
    height: 34,
    textAlign: 'center',
    color: colors.white
  },
  buttonBlock: {
    width: '100%'
  }
})

// Text
export const texts = StyleSheet.create({
  center: {
    textAlign: 'center'
  }
})
