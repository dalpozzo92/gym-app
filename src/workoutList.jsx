import React, { useState, useEffect } from 'react';
import { Skeleton, Card, Space, NavBar, Toast } from 'antd-mobile';
import { FireFill, CalendarOutline } from 'antd-mobile-icons';
import { motion } from "framer-motion";
import { getWorkoutList } from '/gymBackend'; // Importa la funzione che recupera gli allenamenti
import './CSS/workoutList.css';
import { useNavigate } from 'react-router-dom';
import {Hash, CalendarDays, Clock } from 'lucide-react';
import MyNavBar from '/src/MyNavBar'; // Importa il componente
import utils from '/utils';
import { format, parseISO } from 'date-fns';




const WorkoutCard = ({ title, icon, startDate, days, duration, onClick }) => {
  return (
    <Card onClick={onClick} className="workout-list-card">
    {/* Header centrato in alto */}
    <div className="workout-list-card-header">
      <span className="workout-list-card-icon">{icon}</span>
      <span className="workout-list-card-title">{title}</span>
    </div>

    {/* Dettagli sotto, allineati a sinistra */}
    <div className="workout-list-card-details">
      <p><CalendarDays size={14} /> {format(parseISO(startDate), 'yyyy-MM-dd')}</p>
      <p><Hash size={14} /> {days} giorni</p>
      <p><Clock size={14} /> {duration} minuti</p>
    </div>
  </Card>
  );
};

const WorkoutList = () => {
  const navigate = useNavigate(); // Hook per la navigazione
  const [workouts, setWorkouts] = useState([]); // Stato per gli allenamenti
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  const fetchWorkouts = async () => {
    try {
      const userDetails = JSON.parse(localStorage.getItem('user_details'));  
      utils.debug("iduserdetails: ", userDetails.id_user_details);
      if (!userDetails || !userDetails.id_user_details) {
        utils.showToast('ID utente mancante');
        return;
      }
  
      const workouts = await getWorkoutList(userDetails.id_user_details); // Chiamata diretta alla API
      console.log('workouts:', workouts);

      setWorkouts(workouts);
    } catch (error) {
      utils.debug('Errore nel recupero allenamenti:', error);
      utils.showToast('Errore nel recupero allenamenti, riprovare il Login!');
    } finally {
      setLoading(false);
    }
  };

  // Usa useEffect per chiamare fetchWorkouts quando il componente è montato
  useEffect(() => {
    fetchWorkouts();
  }, []);

//   if (loading) {
//     return <div style={{ width: '100%', padding: '20px' }}>
//     <Skeleton.Title animated />
//     <Skeleton.Paragraph lineCount={5} animated />
//   </div>// Puoi anche inserire un'animazione di caricamento
//   }

  return (
    <div className="workout-list-page-container">
                  <MyNavBar title="Lista programmi" /> 


      <div className="workout-list-page-content">
      {loading ? (
          // Mostra il Skeleton mentre i dati sono in fase di caricamento
          <div style={{ padding: '20px', paddingRight: '20px' }}>
            <Skeleton.Paragraph lineCount={7} animated />
          </div>
        ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            {/* Map over workouts to create dynamic WorkoutCards */}
            {workouts.map((program) => (
              <WorkoutCard
                key={program.id_program} // Usa un identificativo unico per ogni allenamento
                title={`Programma  ${program.number_program}`}// Titolo dell'allenamento
                icon={<FireFill style={{ color: '#FF5733' }} />} 
                startDate={program.date_start_program} // Passa la data di inizio
                days={program.number_days_workout} // Passa il numero di giorni
                duration={program.duration_workout}
                onClick={() => console.log('Naviga all\'allenamento', program.id_program)} // Funzione per la navigazione
              />
            ))}
          </Space>
          
        </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkoutList;
