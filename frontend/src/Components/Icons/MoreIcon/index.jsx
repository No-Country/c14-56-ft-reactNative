import React, { useState, useEffect } from 'react';
import '../IconStyles.css'; 
import switchIcon from '../../../assets/icons/switch-icon.png'

const MoreIcon = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }

  }, [theme])
  

  const handleChangeTheme = () => {
    setTheme((theme) => theme === 'dark' ? 'light' : 'dark')
  }

  return <img src={switchIcon} alt="" onClick={()=> handleChangeTheme()} className={`w-7 pointer ${theme === 'dark' ? 'bg-slate-100 rounded-2xl' : ''}`}/>
  // return <ion-icon name="contrast-outline" onClick={()=> handleChangeTheme()}></ion-icon>

};

export default MoreIcon; 