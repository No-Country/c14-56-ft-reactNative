import React, { useState } from 'react';
import InputForm from '@InputForm';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = () => {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const [peticionExitosa, setPeticionExitosa] = useState(false);

  const callApi = (data) => {

    axios.post('http://localhost:3001/api/v1/auths/register/', data)
    .then((res) => {
      console.log(res.data);
      setPeticionExitosa(true);
      setTimeout(() => {
        setPeticionExitosa(false);
        location.reload()
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const onSubmit = (data) => callApi(data);

  return (
    <form
      className='flex flex-col justify-center align-center w-full h-full ' onSubmit={handleSubmit(onSubmit)}>

      <InputForm name="name" register={register} type="text" placeholder="Name" errors={errors} />
      <InputForm name="username" register={register} type="text" placeholder="Username" errors={errors} />
      <InputForm name="email" register={register} type="text" placeholder="Email" errors={errors} />

      <InputForm name="description" register={register} type="text" placeholder="Description" errors={errors} />
      <InputForm name="birthday" register={register} type="text" placeholder="Birthday" errors={errors} />
      <InputForm name="country" register={register} type="text" placeholder="Country" errors={errors} />

      <InputForm name="password" register={register} type="password" placeholder="Password" errors={errors} />

      <button className="btn btn-lg bg-violet-700 w-2/3 mx-auto mt-4 rounded-full text-slate-100 hover:bg-violet-600 ">Sign Up</button>
      {/* <p className='mx-auto text-xs mt-5'>Alredy do you have an account? SIGN IN</p> */}

      {peticionExitosa && (
        <div className="toast toast-start">
          <div className="alert alert-success flex">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>
            <span>Nuevo usuario creado con exito!</span>
          </div>
        </div>
      )}

    </form>
  );
};

export default SignUp;
