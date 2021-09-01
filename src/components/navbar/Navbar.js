import './navbar.scss'

const Navbar = ({ username, userPersonalNumber }) => {
  return (
    <div data-testid='navbar' className='navbar'>
      <div
        data-testid='customer-title'
        className='customer-title'
      >{`${username} (${userPersonalNumber})`}</div>
    </div>
  )
}

export default Navbar
