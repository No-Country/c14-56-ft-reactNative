import { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

//agregar import de ReactRouter
import MoreIcon from '@Icons/MoreIcon'

const index = ({ children }) => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('userData'))
    setUser(res)
  }, [])

  return (
    <nav className="flex">
      <ul className="ul">
        <div className="user-container" onClick={() => navigate(`/profile/${user ? user?._id : ''}`)}>

          <div className="user-info">{children}</div>
        </Link>
        <li>
          <a className="icon-link">
            <MoreIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default index
