import logo from '@logo';
import './Header.css';
import Search from '@Search';

const index = ({ children }) => {
  return (
    <header className="header bg-gradient-to-b from-blue-400 to-blue-900 dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-800" id='header-class'>
      <div className="logo-container">
        <a href="/home" className='logo-link ml-10'>
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <Search />
      <div className="navbar-container">
        {children}
      </div>
    </header>
  );
};

export default index;