import React, { useRef } from 'react';
import useImageStore from '@store'

const CrearHistoria = () => {
  const cambioDeInput = useRef()
  const addImageUrl = useImageStore((state) => state.addImageUrl);

  const guardarElementos = (e) => {
    let ejemplo = e.target.files

    let selectArray = Array.from(ejemplo)

    selectArray.map(file => {
      const url = URL.createObjectURL(file);
      addImageUrl(url);
      return url;
    })
  }

  return (
    <div>

      <input multiple type="file" className="hidden" ref={cambioDeInput} onChange={guardarElementos}/>

      <button className="btn btn-neutral m-1 btn-sm" onClick={() => cambioDeInput.current.click() }>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#ffffff" />
        </svg>
        Crear
      </button>

    </div >
  )
}

export default CrearHistoria