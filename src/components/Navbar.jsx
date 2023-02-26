import Logo from '../images/logo192.png';

function Navbar() {
  return (
    <nav className='nav-container'>
      <img className='nav-logo' src={Logo} alt='Logo React' />
      <h3 className='nav-title'> React Facts</h3>
      <h4 className='nav-subtitle '>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
