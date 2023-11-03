import React, { useState, useEffect } from 'react';
import Avatar from '@Avatar'
import './Search.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate()

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(filtered)
    setFilteredUsers(inputValue.length === 0 ? '' : filtered);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/users')
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="search-bar activeicon dark:bg-neutral-700">
        <ion-icon name="search"></ion-icon>
        <input
          type="text"
          placeholder="Buscar"
          className="search-input dark:bg-neutral-700"
          onChange={handleChange}
          value={searchInput}
        />

      </div>
      <div className={`text-slate-100 absolute mt-5 w-1/3 bg-slate-100 z-20 text-black rounded-lg ${searchInput === '' ? 'hidden' : ''} dark:bg-neutral-800`}>
        <table className=''>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index} onClick={() => navigate(`/profile/${user._id}`)} className='cursor-pointer border-b-slate-400 border-b dark:border-b-neutral-500'>
                
                <Avatar imageUrl={user.photoProfile.path} style={'searchInput'}  />
                <td className='text-slate-800 dark:text-slate-200'>{user.name}</td>
              </tr>
            ))
          ) : (
            ''
          )}
        </table>
      </div>
    </div>
  );
};

export default Search;
