import { useEffect, useState } from 'react'
import './NavBar.css'

import NotificacionIcon from '@Icons/NotificationIcon'
import MessageIcon from '@Icons/MessageIcon'
import UserIcon from '@Icons/UserIcon'
//agregar import de ReactRouter
import MoreIcon from '@Icons/MoreIcon'
import Search from '@Search'

// pero no entiendo porque no funcionan los iconos
//a vos a nivel local te funciona bien?

//si
//-lucas

const index = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('userData'))
    setUser(res)
  }, [])

  return (
    <nav className="navbar">
      <ul className="ul">
        {/*   Eliminar <a hrefs=> y cambiar por Link to   */}

        <li>
          <a href="/notifications" className="icon-link">
            <NotificacionIcon />
          </a>
        </li>
        <li>
          <a href="/messages" className="icon-link">
            <MessageIcon />
          </a>
        </li>
        <li>
          <a href={`/profile/${user?._id}`} className="icon-link">
            <UserIcon />
          </a>
        </li>
        <div className="user-container ">
          <div className="user-info">{children}</div>
        </div>
        <li>
          <a href="/more" className="icon-link">
            <MoreIcon />
          </a>
        </li>
        {/*   Eliminar <a hrefs=> y cambiar por Link to   */}
      </ul>
    </nav>
  )
}

export default index
