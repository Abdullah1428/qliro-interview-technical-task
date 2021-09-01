import './orders.scss'

const Orders = ({ username, orders }) => {
  return (
    <div className='orders'>
      <div className='orders-header'>
        <div data-testid='user-title' className='order-title'>{`${
          username.split(' ')[0]
        }'s Orders`}</div>
        <div className='help-container'>
          <div className='help-circle'>
            <span>i</span>
          </div>
          <div className='help'>Help</div>
        </div>
      </div>
      <div className='orders-table'>
        <table className='content-table'>
          <thead>
            <tr>
              <th>Order number</th>
              <th>Created</th>
              <th>Store</th>
              <th>Payment method</th>
              <th>Payment status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>
                  <div className='order-info'>
                    <div
                      className={
                        order.order_status === 'Online'
                          ? 'order-status'
                          : order.order_status === 'Manual'
                          ? 'order-status manual'
                          : 'order-status instore'
                      }
                    >
                      {order.flagged ? (
                        <div className='flag'>
                          <img
                            className='upsell'
                            src={'assets/upsell.svg'}
                            alt=''
                          />
                        </div>
                      ) : null}
                      <h5 data-testid='order-status'>{order.order_status}</h5>
                    </div>
                    <div className='order-num'>
                      <div data-testid='order-number' className='number'>
                        {order.order_number}
                      </div>
                      <img
                        style={{ marginLeft: '5px' }}
                        alt=''
                        src={'assets/orderIcon.svg'}
                      />
                    </div>
                  </div>
                </td>

                <td data-testid='order-created' className='date'>
                  {order.createdAt}
                </td>
                <td>
                  <div className='store'>
                    <img
                      style={{ marginRight: '5px' }}
                      src={'assets/swe.svg'}
                      alt=''
                    />
                    <h5 data-testid='order-store'>{order.store}</h5>
                  </div>
                </td>
                <td>
                  <div className='payment-method'>
                    <div className='service-box'>
                      <img src={order.payment_asset} alt='' />
                    </div>
                    <div data-testid='payment-method' className='method'>
                      {order.payment_method}
                    </div>
                  </div>
                </td>
                <td>
                  <div className='payment-status'>
                    <span
                      className={
                        order.payment_status === 'Paid'
                          ? 'circle'
                          : order.payment_status === 'In progress'
                          ? 'circle inprogress'
                          : 'circle failed'
                      }
                    ></span>
                    <h5 data-testid='payment-status'>{order.payment_status}</h5>
                  </div>
                </td>
                <td data-testid='payment-amount' className='amount'>
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
