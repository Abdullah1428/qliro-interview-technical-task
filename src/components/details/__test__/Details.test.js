import React from 'react'
import Details from '../Details'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const user = {
  id: '1',
  name: 'Anna Anne',
  personal_number: '19901230-4567',
  email: 'annaanne@gmail.com',
  contact: '+46721234567',
  shipping_address: 'Qlirovägen 123, 12345 Stockholm, Sweden',
  invoice_address: 'Qlirovägen 123, 12345 Stockholm, Sweden'
}

test('details renders with correct data', () => {
  const { getByTestId } = render(<Details user={user} />)

  const title = getByTestId('user-title')
  const email = getByTestId('user-email')
  const contact = getByTestId('user-contact')
  const shipping = getByTestId('user-shipping')
  const invoice = getByTestId('user-invoice')

  expect(title.textContent).toBe('Contact Anna')
  expect(email.textContent).toBe('annaanne@gmail.com')
  expect(contact.textContent).toBe('+46721234567')
  expect(shipping.textContent).toBe('Qlirovägen 123, 12345 Stockholm, Sweden')
  expect(invoice.textContent).toBe('Qlirovägen 123, 12345 Stockholm, Sweden')
})
