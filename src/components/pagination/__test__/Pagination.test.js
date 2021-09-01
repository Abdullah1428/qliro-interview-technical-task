import React from 'react'
import Pagination from '../Pagination'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const pages = [
  {
    id: '1'
  }
]

test('pagination renders correctly with value 1', () => {
  const { getByTestId } = render(<Pagination pages={pages} />)

  const page = getByTestId('page-number')

  expect(page.textContent).toBe('1')
})
