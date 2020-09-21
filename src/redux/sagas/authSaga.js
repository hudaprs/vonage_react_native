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
  SET_VERIFY_VERIFICATION,
  SET_VERIFY_VERIFICATION_REQUESTED,
  SET_AUTH_ERROR
} from '@reduxActions/authActions'

// GET ALL API's
import {
  register as registerAPI,
  cancelRegister as cancelRegisterAPI,
  verifyCode as verifyCodeAPI,
  verify as verifyAPI,
  verifyVerification as verifyVerificationAPI
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

  // Handle error from NEXMO
  if (user.status === 'ERROR') {
    console.log('NEXMO ERROR', user)
    yield put({ type: SET_AUTH_ERROR, payload: user.error.error_text })
    return
  }

  // Check for error
  if (user.name !== 'Error') {
    console.log('REGISTER SUCCESS', user)

    yield put({ type: REGISTER, payload: user.result })

    // Navigate to Verification Screen
    yield navigate('Verification', {
      phone: payload.phone
    })
  } else {
    console.log('REGISTER FAILED', user)
    yield put({
      type: SET_AUTH_ERROR,
      payload: user.response.data.message || user.message
    })
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

  // Mark for development
  console.log('Cancel Register', canceled)

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

  const verifyCode = yield call(verifyCodeAPI, payload)

  // Check for error
  if (verifyCode.name !== 'Error') {
    console.log('VERIFY CODE SUCCESS', verifyCode)
    yield put({ type: CODE_VERIFY, payload: verifyCode.result })

    // Navigate to success screen
    yield navigate('VerificationSuccess', {
      requestID: verifyCode.result.request_id
    })

    // Verify the user again
    yield call(verify, verifyCode.result.request_id)
  } else {
    console.log('VERIFY CODE ERROR', verifyCode)
    yield put({
      type: SET_AUTH_ERROR,
      payload: verifyCode.response.data.message || verifyCode.message
    })
  }
}

/**
 * @desc    Verify Verification ( If user already register but not verified yet)
 * @todo    Handle expired token
 * @method  GET
 * @access  Private
 */
function* verifyVerification() {
  yield put({ type: SET_AUTH_LOADING })

  const verifyVerification = yield call(verifyVerificationAPI)

  if (verifyVerification) {
    console.log('VERIFY VERIFICATION', verifyVerification)

    yield put({ type: SET_VERIFY_VERIFICATION, payload: verifyVerification })
  } else {
    console.log('VERIFY VERIFICATION ERROR', 'No verification data found')

    // Naviate to Sign Up
    yield navigate('Auth', {
      screen: 'SignUp'
    })

    // Dispatch the error
    yield put({
      type: SET_AUTH_ERROR,
      payload: 'No verification data found'
    })
  }
}

/**
 * @desc    Verify
 * @method  POST
 * @access  Private
 */
function* verify({ payload }) {
  yield put({ type: SET_AUTH_LOADING })

  const verify = yield call(verifyAPI, payload)

  // Mark for development
  console.log('Verification', verify)

  // Check for error
  if (verify.name !== 'Error') {
    // Check for error again
    if (verify.error === true) {
      yield put({ type: SET_AUTH_LOADING_FALSE })
    }

    // Check if request is success
    if (verify.result && verify.result.status === 'SUCCESS') {
      yield put({ type: VERIFY, payload: verify.result })
      // Navigate To App / Home
      yield navigate('App', {
        screen: 'Home'
      })
    }
  } else {
    yield put({ type: SET_AUTH_ERROR })
  }
}

export default function* authSaga() {
  yield takeLatest(REGISTER_REQUESTED, register)
  yield takeLatest(CANCEL_REGISTER_REQUESTED, cancelRegister)
  yield takeLatest(CODE_VERIFY_REQUESTED, verifyCode)
  yield takeLatest(VERIFY_REQUESTED, verify)
  yield takeLatest(SET_VERIFY_VERIFICATION_REQUESTED, verifyVerification)
}
