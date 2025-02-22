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
import { ResultPage, ProgressCircle } from 'antd-mobile';
import { SafeArea } from 'antd-mobile'     

import { AlipayCircleFill } from 'antd-mobile-icons';
import MyTapBar from './MyTapBar'; // Importa il componente TapBar
import './CSS/Home.css'


const Home = () => {
  // Imposta la percentuale di progresso (ad esempio 75% per il progresso settimanale)
  const progress = 75;

  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home");
  }, []);


  const Card = ResultPage.Card;

  return (
    <div className="page-container">
              <SafeArea position='top' />

      <div className="page-content">
      <ResultPage
        status="waiting"
        title={<div style={{ fontSize: 15 }}>Progressioni Settimanali</div>}
        description={
          <>
           
          </>
        }
        icon={<img src="/images/logo-crew-nero.png" alt="Logo" style={{ width: 120, height: 80 }} />}
       
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
      </ResultPage>
</div>
      {/* Inseriamo il componente MyTapBar alla fine */}
      <SafeArea position='bottom' />

      <MyTapBar />
      <SafeArea position='bottom' />

    </div>
  );
};

export default Home;
