/*
 * I am pretty new to the testing area
 * In my previous jobs i was mainly assigned to write
 * the code and my other team member would be responsible for writing tests
 * but now a days I am learning about jest cypress and react testing library
 */

import React from 'react'
import Navbar from '../Navbar'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('navbar renders correctly', () => {
  const { getByTestId } = render(
    <Navbar username='Anna' userPersonalNumber='123456' />
  )

  const headlerElement = getByTestId('customer-title')

  expect(headlerElement.textContent).toBe('Anna (123456)')
})
