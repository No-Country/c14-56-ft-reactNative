import Avatar from '@Avatar'
import Aside from '@Aside';
import ContenedorHistorias from '@HistoriesContainer'
import Header from '@Header';
import NavBar from '@NavBar';
import Post from '@Post'

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  // console.log(userData)

  const avatarImageUrl = userData.photoProfile.path
  const userName = userData.name;

  return (
    <div className='home-container'>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl}/>

          {userName}

        </NavBar>

      </Header>
      <div className="container">
        <div className='aside'>
          <div>
            <Aside />
          </div>
        </div>
        <div className='main'>
          <div className='histories mx-36' >
            <ContenedorHistorias />
          </div>
          <div className='post'>
            <Post />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home