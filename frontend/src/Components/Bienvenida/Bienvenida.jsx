import React, { useState } from 'react'

import icon from '@logo'
import loginImage from '@loginImg'
import './Bienvenida.css'

import SignIn from '../Formulario/SignIn'
import SignUp from '../Formulario/SignUp'

const Bienvenida = () => {
  const [mostrarForm, setMostrarForm] = useState(true)

  const formulario = () => {
    return (
      <div className='transition-opacity duration-500 text-white'>
        {mostrarForm ? (
          <SignIn />
        ) : (
          <SignUp />
        )}
      </div>
    )
  }

  return (
    <div className='min-h-screen gradiente flex items-center justify-center'>
      <div className='bg-black w-11/12 mitad rounded-xl flex'>
        <div className='flex w-2/3 '>
          <div className='text-white w-1/2 ml-16 mt-10'>
            <img src={icon} alt="icon" className='w-2/5 ' />
            <p className='text-5xl my-3 '>Bienvenidos!</p>
            <div className="divider bg-amber-200 h-2 rounded my-10" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum obcaecati veniam nemo hic fuga nisi nam eum distinctio unde.</p>
          </div>
          <img src={loginImage} alt="" className='' />
        </div>
        <div className='bg-blue-900 w-1/4 my-10 mr-10 loginStyles rounded-xl'>
          <div className='w-full flex justify-around mt-5'>
            <button
              className='btn btn-outline text-slate-100 hover:text-amber-200 hover:bg-transparent focus:text-amber-200'
              style={{ border: '0', borderBottom: '2px solid', borderRadius: '0' }}
              onClick={() => setMostrarForm(true)}
            >sign in</button>
            <button
              className='btn btn-outline text-slate-100 hover:text-amber-200 hover:bg-transparent focus:text-amber-200 '
              style={{ border: '0', borderBottom: '2px solid', borderRadius: '0' }}
              onClick={() => setMostrarForm(false)}
            >sign up</button>
          </div>
          <div className='transition-opacity duration-500 flex flex-col text-slate-100' >
            {formulario()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bienvenida