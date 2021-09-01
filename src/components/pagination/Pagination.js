import React, { useState, useEffect } from 'react'

import './pagination.scss'

const Pagination = ({ pages }) => {
  const [select, setSelect] = useState('1')

  useEffect(() => {
    switch (select) {
      case '1':
        setSelect('1')
        break
      case '2':
        setSelect('2')
        break
      default:
        setSelect('1')
    }
  }, [select])

  return (
    <div className='pagination'>
      <div className='container'>
        <button
          disabled={select === '1'}
          onClick={() => setSelect('1')}
          className={select === '2' ? 'back active' : 'back'}
        >
          Back
        </button>
        <ul>
          {pages.map(page => (
            <li
              key={page.id}
              onClick={() => setSelect(page.id)}
              className={select === page.id ? 'page active' : 'page'}
            >
              <p data-testid='page-number' style={{ alignSelf: 'center' }}>
                {page.id}
              </p>
            </li>
          ))}
        </ul>

        <button
          disabled={select === '2'}
          onClick={() => setSelect('2')}
          className={select === '1' ? 'next active' : 'next'}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
