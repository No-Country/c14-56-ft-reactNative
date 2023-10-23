import React from 'react';
import './NavBar.css';
import 'font-awesome/css/font-awesome.min.css';
import NotificacionIcon from '../Icons/NotificationIcon/NotificationIcon';
import MessageIcon from '../Icons/MessageIcon/MessageIcon';
import UserIcon from '../Icons/UserIcon/UserIcon';
//agregar import de ReactRouter
import MoreIcon from '../Icons/MoreIcon/MoreIcon';

// pero no entiendo porque no funcionan los iconos
//a vos a nivel local te funciona bien?

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="ul">
      {/*   Eliminar <a hrefs=> y cambiar por Link to   */}
        <li><a href="/notifications" className='icon-link'><NotificacionIcon /></a></li>
        <li><a href="/messages" className='icon-link'><MessageIcon /></a></li>               
        <li><a href="/profile" className='icon-link'><UserIcon /></a></li>                    
        <div className='user-container'>
          <div className="user-info">
            {children}
          </div>
        </div>
        <li><a href="/more" className='icon-link'><MoreIcon /></a></li>
      {/*   Eliminar <a hrefs=> y cambiar por Link to   */}
      </ul>

    </nav>
  );
};

export default Navbar;
