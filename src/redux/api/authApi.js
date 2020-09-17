import axios from './customAxios'
import AsyncStorage from '@react-native-community/async-storage'

// Register
export const register = async signUpData => {
  try {
    const { data } = await axios.post('/register', {
      phone: signUpData.phone
    })

    await AsyncStorage.setItem('requestID', data.result.request_id)

    return data
  } catch (err) {
    return err
  }
}

// Cancel Register
export const cancelRegister = async () => {
  try {
    // Get saved request ID
    const requestID = await AsyncStorage.getItem('requestID')

    const { data } = await axios.post(`/cancel`, {
      requestID
    })

    // Delete request ID
    await AsyncStorage.removeItem('requestID')

    return data
  } catch (err) {
    return err
  }
}

// Verify Code
export const verifyCode = async code => {
  try {
    // Get Saved request ID
    const requestID = await AsyncStorage.getItem('requestID')

    // Verify the user code
    const { data } = await axios.post('/verify-code', {
      requestID,
      code
    })

    // Remove previous request ID
    await AsyncStorage.removeItem('requestID')

    // Assign a new request ID
    await AsyncStorage.setItem('requestVerifiedID', data.result.request_id)

    return data
  } catch (err) {
    return err
  }
}

// Verify Self
export const verify = async () => {
  try {
    // Get the verified request ID
    const requestVerifiedID = await AsyncStorage.getItem('requestVerifiedID')

    if(requestVerifiedID) {
      const { data } = await axios(`/verify/${requestVerifiedID}`)

      return data   
    } else {
      return {
        'error': true,
        'message': 'Unauthorized'
      }
    }

  } catch (err) {
    return err
  }
}
