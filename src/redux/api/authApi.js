import axios from './customAxios'
import AsyncStorage from '@react-native-community/async-storage'

// Register
export const register = async signUpData => {
  try {
    const { data } = await axios.post('/register', {
      phone: signUpData.phone
    })

    // Check for error from NEXMO
    if (data.status === 'ERROR') {
      return data
    }

    await AsyncStorage.setItem('phone', signUpData.phone)
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

    // Delete phone & request ID
    await AsyncStorage.removeItem('phone')
    await AsyncStorage.removeItem('requestID')

    return data
  } catch (err) {
    return err
  }
}

// Verify in Verification
export const verifyVerification = async () => {
  const phone = await AsyncStorage.getItem('phone')
  const requestID = await AsyncStorage.getItem('requestID')

  // Check the request ID
  if (phone && requestID) {
    return {
      phone,
      requestID
    }
  } else {
    return false
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

    // Assign a new request ID
    await AsyncStorage.setItem('requestVerifiedID', data.result.request_id)

    // Remove previous request ID
    await AsyncStorage.removeItem('requestID')

    return data
  } catch (err) {
    return err
  }
}

// Verify Self
export const verify = async requestID => {
  try {
    // Get the verified request ID
    const requestVerifiedID = await AsyncStorage.getItem('requestVerifiedID')

    if (requestID || requestVerifiedID) {
      const { data } = await axios(`/verify/${requestID || requestVerifiedID}`)

      return data
    } else {
      return {
        error: true,
        message: 'Unauthorized'
      }
    }
  } catch (err) {
    return err
  }
}

// logout
export const logout = async () => {
  try {
    await AsyncStorage.removeItem('requestVerifiedID')
  } catch (err) {
    return err
  }
}
