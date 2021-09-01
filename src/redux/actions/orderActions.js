import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL
} from '../constants/orderConstants'

import axios from 'axios'

export const listOrders = () => async dispatch => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.get(`http://localhost:4000/orders`, config)

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: { message: 'error in request to get user orders' }
    })
  }
}
