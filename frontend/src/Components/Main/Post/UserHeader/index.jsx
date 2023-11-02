import { useState, useEffect } from 'react';
import Avatar from '@Avatar';
import './UserHeader.css'
import axios from 'axios'

const UserHeader = ({ avatarUrl, userId, userHandle }) => {
  const [userInfo, setUserInfo] = useState({});
  const { photoProfile, name, userName } = userInfo

  const getUserInfo = () => {
    axios.get(`http://localhost:3001/api/v1/users/${userId}`)
      .then(res => {
        let values = res.data.data;
        setUserInfo({
          photoProfile: values.photoProfile.path,
          name: values.name,
          userName: values.username
        });
      })
      .catch(err => console.log(err));
  }

  const defaultValue = (e) => (
    e ? e : 'Undefined'
  )

  useEffect(() => {
    getUserInfo();
  }, [userId]);

  return (
    <div className="user-header">
      <div className='w-1/6'>
        <Avatar imageUrl={defaultValue(photoProfile)} />
      </div>
      <div className='text-left'>
        <p className="user-name">{defaultValue(name)}</p>
        <p className="user-handle">@{defaultValue(userName)}</p>
      </div>
    </div>
  );
};

export default UserHeader;
