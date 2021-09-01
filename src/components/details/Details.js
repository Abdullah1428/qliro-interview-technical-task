import './details.scss'

// this can be refactored into smaller components also but
// for this task i am just going with code repeat
const Details = ({ user }) => {
  return (
    <div className='details'>
      <div className='details-container-area'>
        <div className='detail-container'>
          <div className='detail-title-container'>
            <img alt='' src={'assets/EmailPhone.svg'} />
            <h5 data-testid='user-title' className='detail-title'>{`Contact ${
              user.name.split(' ')[0]
            }`}</h5>
          </div>
          <div data-testid='user-email' className='detail-description'>
            {user.email}
          </div>
          <div data-testid='user-contact' className='detail-description'>
            {user.contact}
          </div>
        </div>
        <div className='detail-container'>
          <div className='detail-title-container'>
            <img alt='' src={'assets/shipping.svg'} />
            <h5 className='detail-title'>Shipping Address</h5>
          </div>
          <div data-testid='user-shipping' className='detail-description'>
            {user.shipping_address}
          </div>
          <div className='detail-description'>{user.contact}</div>
        </div>
        <div className='detail-container'>
          <div className='detail-title-container'>
            <img alt='' src={'assets/Address.svg'} />
            <h5 className='detail-title'>Invoice Address</h5>
          </div>
          <div data-testid='user-invoice' className='detail-description'>
            {user.invoice_address}
          </div>
          <div className='detail-description'>{user.contact}</div>
        </div>
      </div>
      <div className='horizontal-line' />
    </div>
  )
}

export default Details
