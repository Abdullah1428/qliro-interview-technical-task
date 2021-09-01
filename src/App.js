import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from './components/navbar/Navbar'
import Details from './components/details/Details'
import Orders from './components/orders/Orders'
import Pagination from './components/pagination/Pagination'
import Spinner from './components/Spinner'

import { listOrders } from './redux/actions/orderActions'
import { getUserDetails } from './redux/actions/userActions'

import './app.scss'

function App() {
  const dispatch = useDispatch()

  const orderList = useSelector(state => state.ordersList)
  const { loading, error, orders } = orderList

  const userDetails = useSelector(state => state.userDetails)
  const { loading: userLoading, error: userError, user } = userDetails

  useEffect(() => {
    dispatch(getUserDetails(1))
    dispatch(listOrders())
  }, [dispatch])

  const pages = [
    {
      id: '1'
    },
    {
      id: '2'
    }
  ]

  return (
    <div className='app'>
      {userLoading || loading ? (
        <Spinner />
      ) : error || userError || !user || !orders ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}
        >
          <p>Error in fetching request</p>
        </div>
      ) : (
        <div>
          <Navbar
            username={user.name}
            userPersonalNumber={user.personal_number}
          />
          <div className='sections'>
            <Details user={user} />
            <Orders username={user.name} orders={orders} />
            <Pagination pages={pages} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
