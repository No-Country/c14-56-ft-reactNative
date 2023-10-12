
import Avatar from './Components/Home/Avatar/Avatar';
import Header from './Components/Home/Header/Header';
import NavBar from './Components/Home/NavBar/NavBar';
import UserList from './Components/Home/UserList/UserList';
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
      <UserList/>
    </div>
  );
};


export default App;
