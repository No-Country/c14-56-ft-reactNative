import React, { useState, useEffect } from 'react';
import '../IconStyles.css'; 

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

  return <ion-icon name="contrast-outline" onClick={()=> handleChangeTheme()}></ion-icon>

};

export default MoreIcon; 