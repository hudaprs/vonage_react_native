import {
  SET_AUTH_LOADING,
  SET_AUTH_LOADING_FALSE,
  SET_REGISTER_DATA,
  REGISTER,
  CANCEL_REGISTER,
  CODE_VERIFY,
  VERIFY,
  SET_AUTH_ERROR
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
    case CODE_VERIFY:
      return {
        ...state,
        requestID: payload.request_id,
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
        ...state
      }
    default:
      return state
  }
}
