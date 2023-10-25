import Login from './pages/Login'
import Home from './pages/home/';
import Profile from './pages/Profile'
import './index.css'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>

  );
}

export default App