import Avatar from '@Avatar'
import Header from '@Header'
import NavBar from '@NavBar'
//Agregar Import de ReactRouter, RouterDOM, etc

import ContenedorHistorias from '@HistoriesContainer'
import Aside from '@Aside'

import CreatePost from '@CreatePost'

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  // console.log(userData)

  const avatarImageUrl = userData?.photoProfile?.path
  const userName = userData?.name

  return (
    <div className='home-container dark:bg-neutral-900'>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl} marginTop={'w-14'} />{' '}
          {/*  Agregar Routes  */}
          {userName}
        </NavBar>
      </Header>
      <div className="container">
        <div className='aside border rounded-lg dark:bg-neutral-900 dark:border-neutral-800'>

          <div>
            <Aside />
          </div>
        </div>
        <div className="main">
          <div className="histories w-max">
            <ContenedorHistorias />
          </div>
          <div className="create-post">
            <CreatePost />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
