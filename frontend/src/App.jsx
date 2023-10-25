// import Home from './pages/home/Home'
import Login from './pages/Login';
import Home from './pages/home/';
import './index.css'
import './App.css'

import Avatar from '@Avatar'
import Header from '@Header';
import NavBar from '@NavBar';
//Agregar Import de ReactRouter, RouterDOM, etc

import ContenedorHistorias from '@HistoriesContainer'
import Aside from './Components/Aside';
import Post from './Components/Main/Post'


const App = () => {
  const avatarImageUrl = 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg';  //Imagen de Prueba, eliminar luego para dejar variable
  const userName = 'Catherine Ipsum';     //Nombre de Prueba, eliminar luego para dejar variable
  return (
    <div className='home-container'>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl} />    {/*  Agregar Routes  */}

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
          <div className='histories mx-32' >
            <ContenedorHistorias />
          </div>
          <div className='post'>
            <Post />
          </div>
        </div>
      </div>



    </div>
  );
}

export default App