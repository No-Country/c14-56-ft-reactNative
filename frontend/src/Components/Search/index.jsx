import React, { useState, useEffect } from 'react';
import Avatar from '@Avatar'
import './Search.css';
import axios from 'axios';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="search-bar activeicon">
        <ion-icon name="search"></ion-icon>
        <input
          type="text"
          placeholder="Buscar"
          className="search-input"
          onChange={handleChange}
          value={searchInput}
        />

      </div>
      <div className='text-slate-100'>
        <table>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <Avatar imageUrl={user.photoProfile.path} style={'searchInput'} />
                <td>{user.name}</td>
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
