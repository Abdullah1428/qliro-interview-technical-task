import React from 'react'
import Orders from '../Orders'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const orders = [
  {
    id: '1',
    order_number: '123456789',
    order_status: 'Online',
    createdAt: '1st Sep, 8:00',
    store: 'Bultik X',
    payment_method: 'Invoice',
    payment_asset: 'assets/qliro.svg',
    payment_status: 'Paid',
    amount: '2160 kr',
    user_id: '1'
  }
]

test('orders renders with correct orders data', () => {
  const { getByTestId } = render(<Orders username={'Anna'} orders={orders} />)

  const title = getByTestId('user-title')
  const orderStatus = getByTestId('order-status')
  const orderNumber = getByTestId('order-number')
  const created = getByTestId('order-created')
  const orderStore = getByTestId('order-store')
  const method = getByTestId('payment-method')
  const status = getByTestId('payment-status')
  const amount = getByTestId('payment-amount')

  expect(title.textContent).toBe(`Anna's Orders`)
  expect(orderStatus.textContent).toBe(`Online`)
  expect(orderNumber.textContent).toBe(`123456789`)
  expect(created.textContent).toBe(`1st Sep, 8:00`)
  expect(orderStore.textContent).toBe(`Bultik X`)
  expect(method.textContent).toBe(`Invoice`)
  expect(status.textContent).toBe(`Paid`)
  expect(amount.textContent).toBe(`2160 kr`)
})
