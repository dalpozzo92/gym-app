/*
import React, { useState } from 'react';
import MyTapBar from './MyTapBar'; // Importa il componente TapBar

function Home() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>Benvenuto nella Home dopo il Login!</p>
        <MyTapBar />
      </div>
    );
  }
  
  export default Home;
*/
import React, { useState, useEffect } from 'react';
import { ResultPage, ProgressCircle, Form, SpinLoading } from 'antd-mobile';
import { SafeArea } from 'antd-mobile'   
import { color, motion } from "framer-motion";
import { getUserData } from '/api';
import utils from '/utils';
import { useNavigate } from 'react-router-dom';


import { AlipayCircleFill } from 'antd-mobile-icons';
import './CSS/Home.css'


const Home = () => {
  const navigate = useNavigate(); // Hook per la navigazione

    const [loading, setLoading] = useState(true); // Stato per il caricamento
    const userDetailsString = localStorage.getItem('user_details');
    if (!userDetailsString) {
      console.error('Errore: user_details non trovato nel localStorage');
      utils.showToast("Errore nel caricamento. Effettuare il login");
      navigate('/');
      throw new Error('User details non presenti');
    }
  
    const username = JSON.parse(userDetailsString);

    // useEffect(() => {
    //   const fetchUser = async () => {
    //     try {
    //       const userData = await getUserData();
    //       console.log('Dati utente:', userData);
    //       if (userData && userData.name) {
    //         setUsername(userData.name);
    //         localStorage.setItem('user_details', JSON.stringify(userData));

    //       }
         
    //     } catch (error) {
    //       console.error('Errore nel recupero utente:', error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   console.log('FINE CHIAMATE');

    //   fetchUser();
    // }, []);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          
          if (!username.name) {
            console.error('Errore: nome mancante in user_details');
            throw new Error('name utente mancante');
          }

         
        } catch (error) {
          console.error('Errore nel recupero utente:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, []);
   

  // Imposta la percentuale di progresso (ad esempio 75% per il progresso settimanale)
  const progress = 75;


  const Card = ResultPage.Card;

  return (
    
    <div className="home-page-container">
            
            {loading ? (
          // Mostra il Skeleton mentre i dati sono in fase di caricamento
          <div className="spinner-container">
        <SpinLoading size="large"  />
        </div>
        ) : (
      <div className="home-page-content">
      <ResultPage
        status="waiting"
        title={<div style={{ fontSize: 15 }}>Benvenuto nella CREW, { username.name ||'Utente'}!</div>} //user.name ||
        icon={<img src="/logo-crew-nero.png" alt="Logo" style={{ width: 120, height: 80 }} />}
       
      >
        
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
        {/* Altri Card, se necessari */}
        <Card style={{ height: 80 }}> 
            <ProgressCircle
                percent={progress}
                style={{
                  width: 50,
                  height: 50,
                  padding: 10,
                }}
              />
              <span style={{ fontSize: 15, color: '#ffffff', marginRight: 4 }}>
              Allenamenti in corso
            </span>
        </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>

        </motion.div>
     

      </ResultPage>

</div>

)}
      
    

    </div>
    
  );
};

export default Home;
