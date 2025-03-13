import React, { useState, useEffect } from 'react';
import { ResultPage, ProgressCircle, Form, Card, Space, NavBar, Toast } from 'antd-mobile';
import { color, motion } from "framer-motion";
import { createClient } from '@supabase/supabase-js';
import { FireFill, CalendarOutline, StopOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
import { logout } from '/api'; // Importa la funzione logout
import MyNavBar from '/src/MyNavBar'; // Importa il componente
import utils from '/utils';

import { AlipayCircleFill } from 'antd-mobile-icons';
import MyTapBar from './MyTapBar'; // Importa il componente TapBar
import './CSS/setting.css'

// const supabaseUrl = 'https://btvkhnecdcetfiaoozdt.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmtobmVjZGNldGZpYW9vemR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMTY3MzksImV4cCI6MjA1MzU5MjczOX0.KZZbe7QQWU2zQzEgMqe912SA0MWMp04_zk-bwytGQqU';
// const supabase = createClient(supabaseUrl, supabaseKey);


const SettingCard = ({ title, icon, onClick }) => {
  return (
    <Card onClick={onClick} className="setting-card">
      <Space style={{ display: 'flex', alignItems: 'center' }}>
        <span className="setting-card-icon">{icon}</span>
        <span className="setting-card-title">{title}</span>
      </Space>
    </Card>
  );
};

const Setting = () => {
  const navigate = useNavigate();
  const userDetailsString = localStorage.getItem('user_details');
  if (!userDetailsString) {
    console.error('Errore: user_details non trovato nel localStorage');
    throw new Error('User details non presenti');
  }

  const username = JSON.parse(userDetailsString);
  if (!username.name) {
    console.error('Errore: nome mancante in user_details');
    throw new Error('name utente mancante');
  }

  const handleLogout = async () => {
   


    const { success, message } = await logout(); // Chiama la funzione logout

    if (success) {
      utils.showToast({ content: message, duration: 2000 });
      utils.debug("logout effettuato");
      localStorage.removeItem('user_details'); // Rimuove i dettagli utente
      utils.debug("localstorage post delete", localStorage.getItem('user_details'));

      utils.debug(userDetailsString);
      utils.debug("localstorage eliminata");
      utils.showToast('Logout effettuato');
      navigate('/'); // Torna alla pagina di login
    } else {
      utils.showToast({ content: message, duration: 2000 });
      utils.showToast("problema logout:", message)
      console.log("problema logout:", message);

    }
  };


  return (
    <div className="setting-page-container">
     
     <MyNavBar title="Impostazioni" /> 

        
      <div className="workout-page-content">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        
        <SettingCard 
          title={`Logout, ${username.name ? username.name : ''}`}
          icon={<StopOutline style={{ color: '#E63946' }} />}
          onClick={handleLogout}
        />
      </Space>
      </motion.div>
      </div>
    </div>
  );
};

export default Setting;
