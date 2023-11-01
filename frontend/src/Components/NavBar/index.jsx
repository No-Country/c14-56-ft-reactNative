import { useEffect, useState } from 'react'
import './NavBar.css'

//agregar import de ReactRouter
import MoreIcon from '@Icons/MoreIcon'

const index = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('userData'))
    setUser(res)
  }, [])

  console.log(user)

  return (
    <nav className="flex">
      <ul className="ul">
        {/*   Eliminar <a hrefs=> y cambiar por Link to   */}
        <div className="user-container ">
          <div className="user-info">{children}</div>
        </div>
        <li>
          <a className="icon-link">
            <MoreIcon />
          </a>
        </li>
        {/*   Eliminar <a hrefs=> y cambiar por Link to   */}
      </ul>
    </nav>
  )
}

export default index
