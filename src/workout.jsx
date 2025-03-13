import React, { useState, useEffect } from 'react';
import { ResultPage, ProgressCircle, Form, Card, Space, NavBar } from 'antd-mobile';
import { FireFill, CalendarOutline } from 'antd-mobile-icons';
import { color, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import MyNavBar from '/src/MyNavBar'; // Importa il componente
import utils from '/utils';


import './CSS/workout.css'


const WorkoutCard = ({ title, icon, onClick }) => {
  return (
    <Card onClick={onClick} className="workout-card">
      <Space style={{ display: 'flex', alignItems: 'center' }}>
        <span className="workout-card-icon">{icon}</span>
        <span className="workout-card-title">{title}</span>
      </Space>
    </Card>
  );
};

const Workout = () => {
  const navigate = useNavigate(); // Hook per la navigazione

  return (
    <div className="workout-page-container">
      {/* <NavBar   className="custom-navbar"

        // onBack={() => navigate('/home')} // Torna alla home quando si preme "back"
        // back="Indietro"
        backIcon={false}
        style={{ backgroundColor: 'var(--adm-color-primary)', color: 'white' }}
      >
        Workout
      </NavBar> */}
            <MyNavBar title="Workout" /> 

        
      <div className="workout-page-content">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
 <Space direction="vertical" style={{ width: '100%' }}>
        <WorkoutCard 
          title="I tuoi allenamenti" 
          icon={<FireFill style={{ color: '#FF5733' }} />}
          onClick={() => navigate('/workoutList')} // Naviga alla WorkoutList
          />
        <WorkoutCard 
          title="Programma settimanale" 
          icon={<CalendarOutline style={{ color: '#00A5CF' }} />}
          onClick={() => console.log('Naviga al programma settimanale')}
        />
      </Space>


    </motion.div>
     
    
      </div>
  
     
    </div>
  );
};

export default Workout;
