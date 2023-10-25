import React from 'react'

import Avatar from '@Avatar'
import Header from '@Components/Header';
import NavBar from '@Components/NavBar/NavBar';
import Aside from '@Components/Aside/Aside'
//Agregar Import de ReactRouter, RouterDOM, etc

import ContenedorHistorias from '../../Components/Historias/ContenedorHistorias'

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