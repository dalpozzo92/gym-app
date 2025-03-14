import React, { useLayoutEffect } from 'react'
import { ConfigProvider, SafeArea } from 'antd-mobile'
import { Routes, Route } from 'react-router-dom'; // Gestisce la navigazione tra le pagine
import './CSS/Root.css';
import MyTapBar from './MyTapBar'; // Importa il componente TapBar
import { useLocation } from 'react-router-dom';
import {debug, showToast} from '/utils';

import Login from './Login';
import Home from './Home';
import Workout from './workout';
import Setting from './setting';
import WorkoutList from './workoutList'; // La pagina che vuoi navigare

import { AuthProvider } from '/authContext';
import InstallPromptIOS from "./InstallPromptIOS"; // Importa il popup



export default function App() {
  const location = useLocation();
  const showTabBar = location.pathname !== '/';

  return (

    <ConfigProvider>
          <InstallPromptIOS /> 

        <AuthProvider>

        <Routes>
          {/* Definisci le rotte tra i componenti */}
          <Route path="/" element={<Login />} /> {/* Pagina di login */}
          <Route path="/home" element={<Home />} /> {/* Pagina home */}
          <Route path="/workout" element={<Workout />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/workoutList" element={<WorkoutList />} />

        </Routes>
        {showTabBar && <MyTapBar />}{" "}
        {/* Mostra il TabBar solo se non siamo sulla pagina di login */}
        {showTabBar && <SafeArea position="bottom" />}{" "}
        {/* Aggiungi l'area sicura solo se il TabBar è visibile */}
        </AuthProvider>
    </ConfigProvider>
  );
}


