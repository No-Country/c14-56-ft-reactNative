// import Home from './pages/home/Home'
import Login from './pages/Login'
import { FormProvider } from 'react-hook-form'

import './index.css'

const App = () => {
  return (
    <>
    {/* <Home /> */}
    <FormProvider >
    <Login />

    </FormProvider>
    </>
  )
};


export default App;
