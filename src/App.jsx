import React, { useLayoutEffect } from 'react'
import { ConfigProvider } from 'antd-mobile'
import { Routes, Route } from 'react-router-dom'; // Gestisce la navigazione tra le pagine

import Login from './Login';
import Home from './Home';

export default function App() {
  // Impostiamo direttamente il tema scuro di default
  // useLayoutEffect(() => {
  //   document.documentElement.setAttribute('data-prefers-color-scheme', 'dark')
  //  }, [])

  return (
    <ConfigProvider>
      <Routes>
        {/* Definisci le rotte tra i componenti */}
        <Route path="/" element={<Login />} />  {/* Pagina di login */}
        <Route path="/home" element={<Home />} />  {/* Pagina home */}
      </Routes>
    </ConfigProvider>
  )
}


