import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL
} from '../constants/userConstants'

import axios from 'axios'

export const getUserDetails = id => async dispatch => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.get(
      `http://localhost:4000/users/${id}`,
      config
    )

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: { message: 'error in request to get user data' }
    })
  }
}
