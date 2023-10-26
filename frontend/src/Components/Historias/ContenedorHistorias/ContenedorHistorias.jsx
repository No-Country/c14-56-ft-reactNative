import React, { useRef, useState, useEffect } from 'react';
import Historia from '@Histories';
import ModalHistorias from '@HistoriesModal';
import CrearHistoria from '@HistoriesCreate';

import { infoHistorias } from './infoHistorias'
import { useCookies } from 'react-cookie'

import axios from 'axios'

const ContenedorHistorias = () => {
  const mi_modal = useRef()
  const containerRef = useRef(null);

  let [actualIndex, setActualIndex] = useState(0)
  const [cookies] = useCookies(['authToken']);

  const userData = JSON.parse(localStorage.getItem('userData'))

  let info = infoHistorias

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

  let token = cookies.authToken;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getStories = () => {
    axios.get('http://localhost:3001/api/v1/historys', { headers })
      .then((res) => {
        setStories(res.data)
        console.log(res.data.length)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getUsers = () => {
    axios.get('http://localhost:3001/api/v1/users/', { headers })
      .then((res) => {
        setUsers(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getStories()
    getUsers()
  }, [cookies])

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

  return (
    <div className='relative w-max m-5'>
      <div className='relative flex overflow-x-scroll max-w-xl bg-white p-1 scroll-smooth no-scrollbar' ref={containerRef}>

        <CrearHistoria />

        <Historia />

        {users && users.map((user, index) => (
          <div key={index}>
            <HistoriasEjemplo
              nombre={user.name}
              index={index}
              perfil={user.photoProfile.path}
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
        // imageLength={info[actualIndex].imagenes.length}
        actualIndex={actualIndex}
      />
    </div>
  );
};

export default ContenedorHistorias;
//108
//124