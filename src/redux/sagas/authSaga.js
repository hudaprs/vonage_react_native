import { put, call, takeLatest } from 'redux-saga/effects'

// GET ALL ACTIONS
import {
  SET_AUTH_LOADING,
  SET_AUTH_LOADING_FALSE,
  REGISTER,
  REGISTER_REQUESTED,
  CANCEL_REGISTER,
  CANCEL_REGISTER_REQUESTED,
  CODE_VERIFY,
  CODE_VERIFY_REQUESTED,
  VERIFY,
  VERIFY_REQUESTED,
  SET_AUTH_ERROR
} from '@reduxActions/authActions'

// GET ALL API's
import {
  register as registerAPI,
  cancelRegister as cancelRegisterAPI,
  verifyCode as verifyCodeAPI,
  verify as verifyAPI
} from '@api/authApi'

// Navigations
import { navigate } from '@navigations/NavigationRef'

/**
 * @desc    Sign up a user
 * @method  POST
 * @access  Public
 */
function* register({ payload }) {
  yield put({ type: SET_AUTH_LOADING })

  const user = yield call(registerAPI, payload)

  // Check for error
  if (user.name !== 'Error') {
    yield put({ type: REGISTER, payload: user.result })

    // Navigate to Verification Screen
    yield navigate('Verification', {
      phone: payload.phone
    })
  } else {
    yield put({ type: SET_AUTH_ERROR, payload: user })
  }
}

/**
 * @desc    Cancel a request
 * @method  POST
 * @access  Private
 */
function* cancelRegister({ payload }) {
  yield put({ type: SET_AUTH_LOADING })

  const canceled = yield call(cancelRegisterAPI, payload)

  // Check for error
  if (canceled.name !== 'Error') {
    yield put({ type: CANCEL_REGISTER, payload: canceled.result })

    // Navigate to previous Screen
    yield navigate('SignUp')

    // Give Alert For Test
    yield alert('Canceled')
  } else {
    yield alert(verify.message)
    yield put({ type: SET_AUTH_ERROR, payload: canceled })
  }
}

/**
 * @desc    Verify Code
 * @method  POST
 * @access  Private
 */
function* verifyCode({ payload }) {
  yield put({ type: SET_AUTH_LOADING })

  const verify = yield call(verifyCodeAPI, payload)

  // Check for error
  if (verify.name !== 'Error') {
    yield put({ type: CODE_VERIFY, payload: verify.result })

    // Navigate to success screen
    yield navigate('VerificationSuccess')
  } else {
    yield alert(verify.message)
    yield put({ type: SET_AUTH_ERROR, payload: verify })
  }
}

/**
 * @desc    Verify
 * @method  POST
 * @access  Private
 */
function* verify() {
  yield put({ type: SET_AUTH_LOADING })

  const verify = yield call(verifyAPI)
  // Check for error
  if (verify.name !== 'Error') {
    // Check for error again
    if (verify.error === true) {
      yield put({ type: SET_AUTH_LOADING_FALSE })
    } else {
      // Check if request is success
      if (verify.result.status === 'SUCCESS') {
        yield put({ type: VERIFY, payload: verify.result })
        // Navigate To App / Home
        yield navigate('App', {
          screen: 'Home'
        })
      }
    }
  } else {
    yield alert(verify.message)
    yield put({ type: SET_AUTH_ERROR })
  }
}

export default function* authSaga() {
  yield takeLatest(REGISTER_REQUESTED, register)
  yield takeLatest(CANCEL_REGISTER_REQUESTED, cancelRegister)
  yield takeLatest(CODE_VERIFY_REQUESTED, verifyCode)
  yield takeLatest(VERIFY_REQUESTED, verify)
}
