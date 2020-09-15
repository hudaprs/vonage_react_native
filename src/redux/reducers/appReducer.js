import { SET_APP_LOADING } from '@reduxActions/appActions'

const initialState = {
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
