import { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import MoreIcon from '@Icons/MoreIcon'

const index = ({ children }) => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('userData'))
    setUser(res)
  }, [])

  return (
    <nav className="flex">
      <div className='navbar h-24 xs:w-full'>
        <ul className="ul">
          <div className='xs:ml-32 '>
            <Link
              to={`/profile/${user ? user?._id : ''}`}
              className="user-container"
            >
              <div className="user-info xs:text-transparent">{children}</div>
            </Link>
          </div>

          <li>
            <a className="icon-link xs:hidden md:block p-0 m-2">
              <MoreIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}



export default index
