import { StyleSheet, Dimensions } from 'react-native'

// Device Size
export const deviceSize = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

// Size
export const sizes = {
  xl: 24,
  lg: 20,
  md: 16,
  sm: 12
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
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputGroup: {
    marginBottom: 10
  },

  grow: {
    flexGrow: 1
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
  blueWithOpacity: 'rgba(9, 123, 237, .5)',
  supernova: '#ffb12a',
  error: '#d93128'
}

// Fonts
export const fonts = StyleSheet.create({
  default: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.black
  },
  xl: {
    fontSize: sizes.xl
  },
  lg: {
    fontSize: sizes.lg
  },
  bold: {
    fontWeight: 'bold'
  }
})

export const colored = StyleSheet.create({
  indigo: {
    color: colors.indigo
  },
  black: {
    color: colors.black
  },
  white: {
    color: colors.white
  },
  thinGray: {
    color: colors.thinGray
  },
  whiteWithOpacity: {
    color: colors.whiteWithOpacity
  },
  thinWhite: {
    color: colors.thinWhite
  },
  blue: {
    color: colors.blue
  },
  supernova: {
    color: colors.supernova
  },
  error: {
    color: colors.error
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
  },

  // Vertical
  my4: {
    marginVertical: 40
  },
  my3: {
    marginVertical: 30
  },
  my2: {
    marginVertical: 20
  },
  my1: {
    marginVertical: 10
  }
})

// Buttons
export const buttons = StyleSheet.create({
  button: {
    width: 290,
    height: 34,
    borderRadius: 5,
    backgroundColor: colors.blue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    marginTop: 7,
    height: 34,
    textAlign: 'center',
    color: colors.white
  },
  buttonBlock: {
    width: '100%'
  },
  buttonDisable: {
    backgroundColor: colors.blueWithOpacity
  }
})

// Text
export const texts = StyleSheet.create({
  center: {
    textAlign: 'center'
  }
})

// Modal
export const modals = StyleSheet.create({
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
