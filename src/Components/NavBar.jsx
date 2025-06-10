import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>EV</div>
      <ul className='nav-content'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
