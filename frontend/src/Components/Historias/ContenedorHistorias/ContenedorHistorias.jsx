import React, { useRef, useState, useEffect } from 'react';
import Historia from '@Histories';
import ModalHistorias from '@HistoriesModal';
import CrearHistoria from '@HistoriesCreate';

import { useCookies } from 'react-cookie'

import axios from 'axios'

const ContenedorHistorias = () => {
  const mi_modal = useRef()
  const containerRef = useRef(null);

  let [actualIndex, setActualIndex] = useState(0)
  const [cookies] = useCookies(['authToken']);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  const openModal = (e) => {
    if (mi_modal.current) {
      mi_modal.current.showModal();
    }
    setActualIndex(e)
  };

  let [stories, setStories] = useState()
  let [users, setUsers] = useState()
  let [usersWithStories, setUsersWithStories] = useState()

  let token = cookies.authToken;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getStories = (e) => {
    axios.get(`http://localhost:3001/api/v1/historys?page=${1}&limit=${100}`, { headers })
      .then((res) => {
        const valorData = res.data.data;
        const storiesForUsers = {};

        for (let i = 0; i < e.length; i++) {
          let valor = e[i]._id;
          let coincidencias = valorData.filter(x => x.userId === valor);

          if (coincidencias > []) storiesForUsers[valor] = coincidencias;

        }

        setUsersWithStories(storiesForUsers);
        setStories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const getUsers = () => {
    axios.get(`http://localhost:3001/api/v1/users?page=${1}&limit=${100}`, { headers })
      .then((res) => {
        setUsers(res.data.data)
        getStories(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUsers()
  }, [cookies])

  const getAllStoriesImages = () => {
    if (stories) {
      let images = []
      for (let i of stories) {
        images.push(i.path.path)
      }
      return (images)
    } else {
      return []
    }
  }

  const HistoriasEjemplo = ({ nombre, index, perfil }) => (
    <div className="text-center">
      <div className="avatar mt-3 mx-3 h-14 w-14 cursor-pointer" onClick={() => openModal(index)}>
        <div className={`w-24 rounded-full ring ring-info ring-offset-base-100 ring-offset-2 hover-bg-slate-100`} >
          <img src={perfil} />
        </div>
      </div>
      <p className="text-xs w-16 truncate text-center">{nombre}</p>
    </div>
  );
  if (usersWithStories > []) console.log(Object.values(usersWithStories)[0].length)
  

  return (
    <div className='relative w-max m-5'>
      <div className='relative flex overflow-x-scroll max-w-xl bg-white p-1 scroll-smooth no-scrollbar' ref={containerRef}>

        <CrearHistoria />
        <Historia />

        {usersWithStories && Object.keys(usersWithStories).map((userId, index) => (
          <div key={index}>
            <HistoriasEjemplo
              nombre={users.find(user => user._id === userId).name}
              index={index}
              perfil={users.find(user => user._id === userId).photoProfile.path}
            />
          </div>
        ))}

      </div>
      <div className='absolute top-1/2 w-full h-1 flex justify-between z-10'>
        <a className="btn btn-sm btn-circle drop-shadow-lg filter ml-3" onClick={scrollLeft}>❮</a>
        <a className="btn btn-sm btn-circle drop-shadow-lg filter mr-3" onClick={scrollRight}>❯</a>
      </div>
      <ModalHistorias
        mi_modal={mi_modal}
        imageUrls={getAllStoriesImages()}
        imageLength={ usersWithStories > [] ? Object.values(usersWithStories)[actualIndex].length : ''}
        actualIndex={actualIndex}
      />
    </div>
  );
};

export default ContenedorHistorias;
//108
//124