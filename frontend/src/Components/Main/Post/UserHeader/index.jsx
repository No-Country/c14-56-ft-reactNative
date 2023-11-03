import { useState, useEffect } from 'react'
import Avatar from '@Avatar'
import './UserHeader.css'
import axios from 'axios'

const UserHeader = ({ avatarUrl, userId, userHandle }) => {
  const [userInfo, setUserInfo] = useState({});
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
    getUserInfo();
  }, [userId]);

  return (
    //profile-post-card-header sacado de develop. poner user-header
    <div className="profile-post-card-header dark:bg-neutral-900">
    //profile-post-card-header-photo sacado de develop. poner w-1/6
      <div className='profile-post-card-header-photo'>
        <Avatar imageUrl={defaultValue(photoProfile)} />
      </div>
    //profile-post-card-header-details sacado de develop. poner text-left
      <div className='profile-post-card-header-details '>
        <p className="user-name dark:text-slate-200">{defaultValue(name)}</p>
        <p className="user-handle">@{defaultValue(userName)}</p>
      </div>
    </div>
  );
};

export default UserHeader
