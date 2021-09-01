import './navbar.scss'

const Navbar = ({ username, userPersonalNumber }) => {
  return (
    <div className='navbar'>
      <div className='customer-title'>{`${username} (${userPersonalNumber})`}</div>
    </div>
  )
}

export default Navbar
