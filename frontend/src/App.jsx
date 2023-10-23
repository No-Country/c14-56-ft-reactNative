// import Home from './pages/home/Home'
import Login from './pages/Login'
import Home from './pages/home/';
import './index.css'

import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

import Aside from './Components/Aside/Aside';

//Agregar Import de ReactRouter, RouterDOM, etc

const App = () => {
  let avatarImageUrl = 'https://imagenes.elpais.com/resizer/qp_q_iQSLzLqzfP3KxOehSrwECU=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/T5EF4P75QUQ5FRST47MJMKWKSE.jpg'
  let userName = "Lucas"
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
