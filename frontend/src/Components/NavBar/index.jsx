import { useEffect, useState } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

//agregar import de ReactRouter
import MoreIcon from '@Icons/MoreIcon'

const index = ({ children }) => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('userData'))
    setUser(res)
  }, [])

  return (
    <nav className="flex">
      <ul className="ul">
        {/*   Eliminar <a hrefs=> y cambiar por Link to   */}
        <div className="user-container" onClick={() => navigate(`/profile/${user ? user._id : ''}`)}>
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
