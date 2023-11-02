import './Aside.css';
import UserList from '@UserList';

const Aside = () => {
  return (
    <div className='index-container'>
      <div className="index-components">
        <UserList />
      </div>
      <div className="index-footer mt-10 ">
        <ul>
          <li><a href="/condiciones-de-servicio">Condiciones de Servicio </a>| </li>
          <li><a href="/politica-de-privacidad">Política de Privacidad</a> | </li>
          <li><a href="/politica-de-cookies">Política de Cookies</a> | </li>
          <li><a href="/informacion-legal">Información Legal</a> | </li>
          <li><a href="/privacidad">Privacidad</a> | </li>
          <li><a href="/ayuda">Ayuda</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Aside
