import 'react-native-gesture-handler'
import React from 'react'

// Navigation
import RootStackNavigation from '@navigations/RootStackNavigation'

// Redux
import { Provider } from 'react-redux'
import store from '@redux'

const App = () => {
  return (
    <Provider store={store}>
      <RootStackNavigation />
    </Provider>
  )
}

export default App
