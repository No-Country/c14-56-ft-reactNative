import React, { useState } from 'react'
import icon from '../../../assets/icon.png'
import loginImage from '../../../assets/loginImage.png'
import './Bienvenida.css'

const Bienvenida = () => {
  const [mostrarForm, setMostrarForm] = useState(true)

  const signInForm = () => (
    <div>
      <div className='flex flex-col justify-center align-center w-full h-full mt-10'>
        <input
          type="text"
          placeholder="USERNAME"
          className="input focus:outline-none w-4/5 max-w-xs bg-transparent my-4 mx-auto border-b-4 border-amber-200 rounded-none border-l-0 border-r-0 border-t-0 placeholder-slate-100"
        />
        <input
          type="text"
          placeholder="PASSWORD"
          className="input focus:outline-none w-4/5 max-w-xs bg-transparent my-4 mx-auto border-b-4 border-amber-200 rounded-none border-l-0 border-r-0 border-t-0 placeholder-slate-100"
        />
      </div>
      <button className="btn bg-fuchsia-400 ">Secondary</button>
    </div>
  )
  const signUpForm = () => (
    <div>
      <p>chau</p>
    </div>
  )

  const formulario = () => {
    return (
      <div className='transition-opacity duration-500 text-white'>
        {mostrarForm ? (
          signInForm()
        ) : (
          signUpForm()
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
          <div className='transition-opacity duration-500' >
            {formulario()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bienvenida