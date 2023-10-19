
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Aside from './Components/Aside/Aside';

import './main.css'


//Agregar Import de ReactRouter, RouterDOM, etc

const App = () => {
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
      <Aside/>
     
        
     
      
      
    </div>
  );
};


export default App;
