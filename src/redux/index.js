import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@reduxReducers'
import rootSaga from '@reduxSagas'

// Initial state
const initialState = {}

const sagaMiddleware = createSagaMiddleware()

// Middleware
const middleware = [sagaMiddleware]

// Create Store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// Run Saga middleware
sagaMiddleware.run(rootSaga)

export default store
