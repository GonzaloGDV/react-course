import Logo from './images/logo192.png';

function Header() {
  return (
    <>
      <header>
        <nav className='nav'>
          <img src={Logo} alt='React' className='img' />
          <ul className='nav-items'>
            <li className='item'>Pricing</li>
            <li className='item'>About</li>
            <li className='item'>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
