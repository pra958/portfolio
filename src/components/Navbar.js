import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top shadow'>
      <Link className='navbar-brand' to='home' spy={true} smooth={true}>
        Portfolio
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor03'
        aria-controls='navbarColor03'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor03'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='home' spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='education' spy={true} smooth={true}>
              Education
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='skills' spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='projects' spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='achievements'
              spy={true}
              smooth={true}
            >
              Achievements
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='about' spy={true} smooth={true}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
