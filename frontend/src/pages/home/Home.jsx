import Aside from '@Aside'
import Avatar from '@Avatar'
import Header from '@Header';
import NavBar from '@NavBar';
//Agregar Import de ReactRouter, RouterDOM, etc

import ContenedorHistorias from '@HistoriesContainer'
import UserList from '@UserList'


const Home = () => {
  const avatarImageUrl = 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg';  //Imagen de Prueba, eliminar luego para dejar variable
  const userName = 'Catherine Ipsum';     //Nombre de Prueba, eliminar luego para dejar variable
  return (
    <div>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl} />    {/*  Agregar Routes  */}

          {userName}

        </NavBar>

      </Header>

      <div className='flex'>
        <Aside />
        <div className='mx-32' >
          <ContenedorHistorias />
        </div>
      </div>
    </div>
  );
}

export default Home