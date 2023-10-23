
import React from 'react'
import './Aside.css';
import UserList from '../UserList/UserList';
import Search from '../Search/Search';
import Plus from '../Plus/Plus';
import Trends from '../Trends/Trends'
import UserCard from '../UserCard/UserCard';


const Aside = () => {
  return (
    <div className='aside-container'>
      <div className="aside-components">
        <Search />
        <Plus />
        <Trends /> {/* Incorpora el componente Trends aquí */}
        <UserList>
          <UserCard />
        </UserList>
      </div>
      <div className="aside-footer ">
        <ul>
          <li><a href="/condiciones-de-servicio">Condiciones de Servicio </a>| </li>
          <li><a href="/politica-de-privacidad">Política de Privacidad</a> | </li>
          <li><a href="/politica-de-cookies">Política de Cookies</a> | </li>
          <li><a href="/informacion-legal">Información Legal</a> | </li>
          <li><a href="/privacidad">Privacidad</a> | </li>
          <li><a href="/ayuda">Ayuda</a></li>
        </ul>
        <p>&copy; 2023 LinkUp Corp.</p>
      </div>
    </div>

  );
};

export default Aside;