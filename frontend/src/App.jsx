// import Home from './pages/home/Home'
import Login from './pages/Login'
import { FormProvider } from 'react-hook-form'


import './index.css'

import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

import Aside from './Components/Aside/Aside';

import './main.css'


//Agregar Import de ReactRouter, RouterDOM, etc

const App = () => {
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
