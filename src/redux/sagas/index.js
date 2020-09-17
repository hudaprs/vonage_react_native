import { spawn } from 'redux-saga/effects'

// Sagas
import authSaga from './authSaga'

export default function* rootSaga() {
  yield spawn(authSaga)
}
