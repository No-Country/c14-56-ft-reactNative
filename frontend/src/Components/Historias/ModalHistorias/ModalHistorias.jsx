import React, { useState } from 'react'
import './ModalHistorias.css'

import { infoHistorias } from '@HistoriesContainer/InfoHistorias';

const ModalHistorias = ({ mi_modal, imageUrls, actualIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const imagenes = useImageStore((state) => state.imageUrls);

  // imageUrls[actualIndex] ? console.log(imageUrls) : ''
  
  const takeImages = imageUrls

  // const tomarImagenes = () => {
  //   let image = []

  //   for (let i of imageUrls) {
  //     if (i) {
  //       image.push(...i);
  //     }
  //   }
  //   let totalImage = image.concat(imagenes)
  //   return totalImage
  // }

  let info = infoHistorias.slice(actualIndex)
  imageUrls = imageUrls.slice(actualIndex)

  let posicionActual = undefined

  const traerPosicionActual = (imageUrl) => {
    let foundInArray = null;

    for (let i = 0; i < imageUrls.length; i++) {
      if (imageUrls[i].includes(imageUrl)) {
        foundInArray = i;
        break;
      }
    }
    posicionActual = foundInArray
  }

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex < imageLength - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <dialog className="modal " ref={mi_modal} >
        <div className="modal-box p-0 overflow-hidden w-2/5 h-full " >
          <div className="modal-action ">
            <div className=" carousel w-full "  >
              {takeImages.map((imageUrl, index) => (
                <div
                  key={index}
                  id={`slide${index}`}
                  className={`carousel-item relative w-full flex flex-col align-center `}
                >
                  {traerPosicionActual(imageUrl)}
                  <div>
                    {info[index] ? (
                      <div className='flex w-full h-1/2 py-1 absolute nose' >
                        <img
                          src={info[posicionActual].imagen_perfil}
                          alt="Foto de perfil"
                          className="w-12 h-12 rounded-full ml-1"
                        />
                        <p className='mt-3 ml-2 text-slate-100'>{info[posicionActual].nombre}</p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='h-full bg-slate-300 '>
                    <img src={imageUrl} className='object-cover h-full' />

                    <div
                      className={`absolute flex transform -translate-y-1/2 left-5 right-5 top-1/3 justify-between`}
                    >
                      <a href={`#slide${index - 1}`} className="btn btn-circle" onClick={goToPreviousSlide}>
                        ❮
                      </a>
                      <a href={`#slide${index + 1}`} className="btn btn-circle" onClick={goToNextSlide}>
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );

}

export default ModalHistorias