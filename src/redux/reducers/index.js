import { combineReducers } from 'redux'

// Reducers
import app from '@reduxReducers/appReducer'
import auth from '@reduxReducers/authReducer'

export default combineReducers({
  app,
  auth
})
