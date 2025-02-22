import React, { useState, useEffect } from 'react';
import { ResultPage, ProgressCircle, Form } from 'antd-mobile';
import { SafeArea } from 'antd-mobile'     

import { AlipayCircleFill } from 'antd-mobile-icons';
import MyTapBar from './MyTapBar'; // Importa il componente TapBar
import './CSS/workout.css'


const Workout = () => {
 




  return (
    <div>
  
        

      
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
  
      {/* Inseriamo il componente MyTapBar alla fine */}
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </div>
      <MyTapBar />
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </div>

    </div>
  );
};

export default Workout;
