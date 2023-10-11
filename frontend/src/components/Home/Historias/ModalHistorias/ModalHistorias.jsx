import React, { useState } from 'react'

const ModalHistorias = ({mi_modal, imageUrls, imageLength}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="modal-box">
          <div className="modal-action">
            <div className="w-96 carousel w-full">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  id={`slide${index}`}
                  className={`carousel-item relative w-full`}
                >
                  <img src={imageUrl} />

                  <div className={`absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-between`} key={index}>
                    <a href={`#slide${index - 1}`} className="btn btn-circle" onClick={goToPreviousSlide}>❮</a>
                    <a href={`#slide${index + 1}`} className="btn btn-circle" onClick={goToNextSlide}>❯</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ModalHistorias