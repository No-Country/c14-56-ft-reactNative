import React from 'react';
import ErrorType from '../ErrorType';
import InputForm from '../../InputForm';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className='flex flex-col justify-center align-center w-full h-full ' onSubmit={handleSubmit(onSubmit)}>

      <InputForm name="username" register={register} type="text" placeholder="Username" errors={errors} />
      <InputForm name="fullname" register={register} type="text" placeholder="Full Name" errors={errors} />
      <InputForm name="email" register={register} type="text" placeholder="Email" errors={errors} />
      <InputForm name="password" register={register} type="password" placeholder="Password" errors={errors} />
      <InputForm name="confirmpassword" register={register} type="password" placeholder="Confirm Password" errors={errors} />

      <button className="btn btn-lg bg-violet-700 w-2/3 mx-auto mt-4 rounded-full text-slate-100 hover:bg-violet-600 ">Sign Up</button>
      <p className='mx-auto text-xs mt-5'>Alredy do you have an account? SIGN IN</p>
    </form>
  );
};

export default SignUp;
