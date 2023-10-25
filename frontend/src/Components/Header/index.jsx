import logo from '@logo';
import './Header.css';



const index = ({ children }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/" className='logo-link'>
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="navbar-container">
        {children}
      </div>
    </header>
  );
};

export default index;