import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Avatar from '@Avatar'
import Header from '@Header'
import NavBar from '@NavBar'
import About from '@Perfil/About'
import Post from '@Perfil/Posted'
import Banner from '@Perfil/Banner'

const Index = () => {
  const [user, setUser] = useState()
  const { id } = useParams()

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/users/${id}`
      )
      setUser(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(user)

  return (
    <div>
      <Header>
        <NavBar>
          <Avatar imageUrl={user?.photoProfile.path} />
          {user?.name}
        </NavBar>
      </Header>
      <div className="bg-slate-300 w-full h-60 profile-banner">
        <Banner user={user} />
      </div>
      <div className="body-profile">
        <div className="body-profile-about">
          <About description={user?.description} />
        </div>
        <div className="body-profile-post">
          <Post user={user} />
        </div>
      </div>
    </div>
  )
}

export default Index
