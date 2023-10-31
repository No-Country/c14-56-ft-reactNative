import './styles.css'

import Avatar from '@Avatar'
import Header from '@Header'
import NavBar from '@NavBar'
import About from '@Perfil/About'
import Post from '@Perfil/Posted'
import Banner from '@Perfil/Banner'

const Index = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const avatarImageUrl = userData.photoProfile.path
  const userName = userData.name

  return (
    <div>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl} />
          {userName}
        </NavBar>
      </Header>
      <div className="bg-slate-300 w-full h-60 profile-banner">
        <Banner />
      </div>
      <div className="body-profile">
        <div className="body-profile-about">
          <About />
        </div>
        <div className="body-profile-post">
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Index
