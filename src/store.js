import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ordersListReducer } from './redux/reducers/orderReducer'
import { userDetailsReducer } from './redux/reducers/userReducer'

const reducer = combineReducers({
  ordersList: ordersListReducer,
  userDetails: userDetailsReducer
})

const initialState = {
  ordersList: [],
  userDetails: {}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
