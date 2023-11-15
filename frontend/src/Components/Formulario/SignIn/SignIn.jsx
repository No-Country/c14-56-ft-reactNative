import React, { useState, useEffect } from 'react'
import InputForm from '@InputForm'
import useFetch from '@useFetch'

import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()
  const [peticionErronea, setPeticionErronea] = useState(false)
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const [, setAuthCookie] = useCookies(['authToken'])
  const [userIdCookie, setUserIdCookie] = useCookies(['userId'])

  const { isLoading: loadingUsers, apiData: usersApiData, serverError: usersServerError } = useFetch({
    url: userIdCookie.userId ? `https://linkup-5h1y.onrender.com/api/v1/users/${userIdCookie.userId}` : '', 
    method: 'get'
  })

  useEffect(() => {
    if (!loadingUsers && usersApiData) {
      localStorage.setItem('userData', JSON.stringify(usersApiData.data))
    } else if (!loadingUsers && usersServerError) {
      console.error("Error en la solicitud:", usersServerError);
    }
  }, [loadingUsers, usersApiData, usersServerError, userIdCookie.userId])

  const { isLoading: loadingAuth, apiData: authApiData, serverError: authServerError } = useFetch({
    url: data ? 'https://linkup-5h1y.onrender.com/api/v1/auths/login' : '',
    method: 'post',
    body: data
  })

  useEffect(() => {
    if (!loadingAuth && authApiData) {
      setAuthCookie('authToken', authApiData.token)
      setUserIdCookie('userId', authApiData.user._id)
      setPeticionErronea(false)

      setTimeout(() => {
        navigate('/home')
      }, 2000)
    } else if (!loadingAuth && authServerError) {
      console.error("Error en la solicitud:", usersServerError);
      setPeticionErronea(true)
      setTimeout(() => {
        setPeticionErronea(false)
      }, 5000)
    }
  }, [loadingAuth, authApiData, authServerError, data])

  return (
    <form
      className="flex flex-col justify-center align-center w-full md:mt-10"
      onSubmit={handleSubmit(data => setData(data))}
    >
      
      <InputForm
        name="email"
        register={register}
        type="text"
        placeholder="Email"
        errors={errors}
        margin={'mt-4'}
      />
      <InputForm
        name="password"
        register={register}
        type="password"
        placeholder="Password"
        errors={errors}
        margin={'mt-4'}
      />

      <button className="btn btn-lg bg-violet-700 w-2/3 mx-auto my-5 rounded-full text-slate-100 hover-bg-violet-600 max-md:w-1/2 max-sm:w-2/3">
        Sign In
      </button>

      {peticionErronea && (
        <div className="toast toast-start w-1/3 ">
          <div className="alert alert-error flex max-sm:w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Usuario Incorrecto</span>
          </div>
        </div>
      )}
    </form>
  )
}

export default SignIn
//112