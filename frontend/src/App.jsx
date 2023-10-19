
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
<<<<<<< HEAD
import Aside from './Components/Aside/Aside';

import './main.css'


=======
>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad
//Agregar Import de ReactRouter, RouterDOM, etc

const App = () => {
  const avatarImageUrl = 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg';  //Imagen de Prueba, eliminar luego para dejar variable
  const userName = 'Catherine Ipsum';     //Nombre de Prueba, eliminar luego para dejar variable
  return (
    <div>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl} />    {/*  Agregar Routes  */}
<<<<<<< HEAD

            {userName}
         
        </NavBar>
     
      </Header>
      <Aside/>
     
        
     
      
      
=======
         
            {userName}
         
        </NavBar>

      </Header>
>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad
    </div>
  );
};


export default App;
