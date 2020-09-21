import {
  SET_AUTH_LOADING,
  SET_AUTH_LOADING_FALSE,
  SET_REGISTER_DATA,
  REGISTER,
  CANCEL_REGISTER,
  CODE_VERIFY,
  VERIFY,
  SET_VERIFY_VERIFICATION,
  SET_AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  LOGOUT
} from '@reduxActions/authActions'

const initialState = {
  loading: false,
  registerData: {
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: ''
  },
  requestID: '',
  requestVerifiedID: '',
  nexmo: null,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_AUTH_LOADING_FALSE:
      return {
        ...state,
        loading: false
      }
    case SET_REGISTER_DATA:
      return {
        ...state,
        registerData: {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          password: payload.password,
          passwordConfirmation: payload.passwordConfirmation
        }
      }
    case REGISTER:
    case CODE_VERIFY:
    case SET_VERIFY_VERIFICATION:
      return {
        ...state,
        requestID: payload.request_id,
        loading: false
      }
    case CANCEL_REGISTER:
      return {
        ...state,
        requestID: '',
        loading: false
      }
    case VERIFY:
      return {
        ...state,
        nexmo: payload,
        requestID: '',
        requestVerifiedID: payload.request_id,
        loading: false
      }
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null
      }
    case LOGOUT:
      return {
        ...state,
        requestVerifiedID: ''
      }
    default:
      return state
  }
}
