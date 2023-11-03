import Login from './pages/Login'
import Home from './pages/home/'
import Profile from './pages/Profile'
import './index.css'
import './App.css'

import { UserProvider } from './userContext/userContext'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App
