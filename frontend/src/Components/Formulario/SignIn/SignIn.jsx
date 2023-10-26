import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import InputForm from '@InputForm';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// import useUserStore from '@store'
import axios from 'axios';

const SignIn = () => {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const [peticionErronea, setPeticionErronea] = useState(false);
  // const setUserData = useUserStore((state) => state.setUserData);

  const navigate = useNavigate()
  const [, setAuthCookie] = useCookies(['authToken']);
  const [userIdCookie, setUserIdCookie] = useCookies(['userId']);

  

  const storeUserData = () => {
    axios.get(`http://localhost:3001/api/v1/users/${userIdCookie.userId}`)
    .then((res) => {
      localStorage.setItem('userData', JSON.stringify(res.data.data));
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const checkUser = (data) => {
    axios.post('http://localhost:3001/api/v1/auths/login', data)
      .then((res) => {
        setAuthCookie('authToken', res.data.token);
        setUserIdCookie('userId', res.data.user._id);
        setPeticionErronea(false);
        storeUserData()

        navigate('/home')
      })
      .catch((error) => {
        console.log(error);
        setPeticionErronea(true);
        setTimeout(() => {
          setPeticionErronea(false);
        }, 5000);
      });
  }

  const onSubmit = (data) => {
    checkUser(data)
  };

  return (
    <form className='flex flex-col justify-center align-center w-full h-full mt-10' onSubmit={handleSubmit(onSubmit)}>

      <InputForm name="email" register={register} type="text" placeholder="Email" errors={errors} margin={'mt-4'}/>
      <InputForm name="password" register={register} type="password" placeholder="Password" errors={errors} margin={'mt-4'} />

      {/* <p className='ml-10 text-xs'>Keep me SIGN IN</p> */}
      <button className="btn btn-lg bg-violet-700 w-2/3 mx-auto mt-14 rounded-full text-slate-100 hover-bg-violet-600">Sign In</button>
      {/* <p className='mx-auto text-xs mt-5'>FORGOT PASSWORD</p> */}

      {peticionErronea && (
         <div className="toast toast-start">
         <div className="alert alert-error flex">
           <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           <span>El correo o la contraseña no coinciden con ninguna cuenta de usuario</span>
         </div>
       </div>
      )}
    </form>
  );
}

export default SignIn;
