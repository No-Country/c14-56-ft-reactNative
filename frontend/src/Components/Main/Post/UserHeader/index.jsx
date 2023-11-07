import { useState, useEffect } from 'react'
import Avatar from '@Avatar'
import './UserHeader.css'
import axios from 'axios'

const UserHeader = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({})
  const { photoProfile, name, userName } = userInfo

  const getUserInfo = () => {
    axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/users/${userId}`)
      .then(res => {
        let values = res?.data?.data
        setUserInfo({
          photoProfile: values?.photoProfile?.path,
          name: values?.name,
          userName: values?.username,
        })
      })
      .catch(err => console.log(err))
  }

  const defaultValue = e => (e ? e : 'Undefined')

  useEffect(() => {
    getUserInfo()
  }, [userId])

  return (
    <div className="user-header dark:bg-neutral-900">
      <div className="user-header-avatar">
        <Avatar imageUrl={defaultValue(photoProfile)} />
      </div>
      <div className="text-left">
        <p className="user-name dark:text-slate-200">{defaultValue(name)}</p>
        <span className="user-handle">@{defaultValue(userName)}</span>
      </div>
    </div>
  )
}

export default UserHeader
