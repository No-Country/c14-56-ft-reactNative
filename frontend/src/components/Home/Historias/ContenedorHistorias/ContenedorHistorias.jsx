import React, { useRef, useState } from 'react';
import Historia from '../Historia';
// import CrearHistoria from '../CrearHistoria';
import ModalHistorias from '../ModalHistorias';

import { infoHistorias } from './infoHistorias'

const ContenedorHistorias = () => {
  const mi_modal = useRef()
  const containerRef = useRef(null);

  const historiaWidth = 300;

  let info = infoHistorias

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= historiaWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += historiaWidth;
    }
  };

  const [actualIndex, setActualIndex] = useState(0)

  const openModal = (e) => {
    if (mi_modal.current) {
      mi_modal.current.showModal();
    }
    setActualIndex(e)
  };

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

  const elementosRepetidos = Array(info.length).fill(null);
  

  return (
    <div className='relative w-max m-5'>
      <div className='relative flex overflow-x-scroll max-w-xl bg-white p-1 scroll-smooth no-scrollbar' ref={containerRef}>
        
        <Historia />

        {elementosRepetidos.map((_, index) => (
          <div key={index}><HistoriasEjemplo nombre={info[index].nombre} index={index} perfil={info[index].imagen_perfil} /></div>
        ))}

      </div>
      <div className='absolute top-1/2 w-full h-1 flex justify-between z-10'>
        <a className="btn btn-sm btn-circle drop-shadow-lg filter ml-3" onClick={scrollLeft}>❮</a>
        <a className="btn btn-sm btn-circle drop-shadow-lg filter mr-3" onClick={scrollRight}>❯</a>
      </div>
      <ModalHistorias mi_modal={mi_modal} imageUrls={info[actualIndex].imagenes} imageLength={info[actualIndex].imagenes.length} />
    </div>
  );
};

export default ContenedorHistorias;
