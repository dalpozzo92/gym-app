/*
import React, { useState } from 'react';
import { Form, Input, Button, Toast, Tabs } from 'antd-mobile';
import './CSS/Login.css';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = 'https://btvkhnecdcetfiaoozdt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmtobmVjZGNldGZpYW9vemR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMTY3MzksImV4cCI6MjA1MzU5MjczOX0.KZZbe7QQWU2zQzEgMqe912SA0MWMp04_zk-bwytGQqU';
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="login-container" style={{ backgroundColor: "#000000" }}>
      <div className="logo-container">
        <img src="/IMAGES/logo-crew.png" alt="Logo" className="login-logo" />
      </div>

      <div className="login-form-box">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Tabs
            activeKey={showLogin}
            onChange={(key) => setShowLogin(key)} // Cambiamo la tab attiva
            style={{ marginRight: '10px' }}
            color={!showLogin ? 'primary' : 'default'}
          >
            <Tabs.Tab title="Accedi" key="login">
              <LoginForm navigate={navigate} />
            </Tabs.Tab>
            <Tabs.Tab title="Registrati" key="register">
              <RegisterForm />
            </Tabs.Tab>
          </Tabs>

        </div>

        {showLogin ? <LoginForm navigate={navigate} /> : <RegisterForm />}
      </div>
    </div>
  );
};

const LoginForm = ({ navigate }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      console.log('Login effettuato con successo!');
      navigate('/home'); // Naviga alla Home dopo il login
    } catch (error) {
        console.log(`Errore durante il login: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleLogin}
      footer={
        <Button block color="primary" size="large" onClick={handleLogin} loading={loading}>
          Accedi
        </Button>
      }
    >
      <Form.Item label="Email">
        <Input
          value={form.email}
          onChange={(val) => setForm({ ...form, email: val })}
          placeholder="Inserisci la tua email"
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input
          type="password"
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
          placeholder="Inserisci la tua password"
        />
      </Form.Item>
    </Form>
  );
};

const RegisterForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      console.log('Login effettuato con successo!');
    } catch (error) {
        console.log(`Errore durante il login: ${error.message}`);
    } finally { 
      setLoading(false);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleRegister}
      footer={
        <Button block color="primary" size="large" onClick={handleRegister} loading={loading}>
          Registrati
        </Button>
      }
    >
      <Form.Item label="Email">
        <Input
          value={form.email}
          onChange={(val) => setForm({ ...form, email: val })}
          placeholder="Inserisci la tua email"
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input
          type="password"
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
          placeholder="Inserisci la tua password"
        />
      </Form.Item>
    </Form>
  );
};

export default Login;

*/
/*

import React, { useState } from 'react';
import { Form, Input, Button, Toast } from 'antd-mobile';
import { createClient } from '@supabase/supabase-js';
import '../CSS/Login.css';

const supabaseUrl = 'https://btvkhnecdcetfiaoozdt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmtobmVjZGNldGZpYW9vemR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMTY3MzksImV4cCI6MjA1MzU5MjczOX0.KZZbe7QQWU2zQzEgMqe912SA0MWMp04_zk-bwytGQqU';
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  // Funzione per gestione Login
  const handleLogin = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      Toast.show({ content: 'Login effettuato con successo!' });
      // Esempio di navigazione successiva:
      // navigate('/home');
    } catch (error) {
      Toast.show({ content: `Errore durante il login: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  // Funzione per gestione Registrazione
  const handleRegister = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      Toast.show({ content: 'Registrazione completata! Ora puoi accedere.' });
    } catch (error) {
      Toast.show({ content: `Errore durante la registrazione: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{ padding: '20px' }}>
      <div className="logo-container">
        <img src="/IMAGES/logo-crew.png" alt="Logo" className="login-logo" />
      </div>
      <div className="login-form-box">
        <h2>Accedi</h2>
        <Form 
          layout="vertical"
          footer={
            <>
              <Button 
                block 
                color="primary" 
                size="large" 
                onClick={handleLogin} 
                loading={loading}
              >
                Accedi
              </Button>
              <Button 
                block 
                color="default" 
                size="large" 
                onClick={handleRegister} 
                loading={loading}
              >
                Registrati
              </Button>
            </>
          }
        >
          <Form.Item label="Email">
            <Input 
              value={form.email}
              onChange={(val) => setForm({ ...form, email: val })}
              placeholder="Inserisci l'email"
            />
          </Form.Item>

          <Form.Item label="Password">
            <Input 
              type="password"
              value={form.password}
              onChange={(val) => setForm({ ...form, password: val })}
              placeholder="Inserisci la password"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

*/

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Tabs, Toast, SpinLoading } from 'antd-mobile';
import './CSS/Login.css';  // Assicurati di avere il file CSS per gli stili aggiuntivi
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const supabaseUrl = 'https://btvkhnecdcetfiaoozdt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmtobmVjZGNldGZpYW9vemR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMTY3MzksImV4cCI6MjA1MzU5MjczOX0.KZZbe7QQWU2zQzEgMqe912SA0MWMp04_zk-bwytGQqU';
const supabase = createClient(supabaseUrl, supabaseKey);


const Login = () => {
  const [showLogin, setShowLogin] = useState('login');  // Cambia 'true' o 'false' con 'login' o 'register'
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-page");

    const imgUrls = [
      "/images/background-2.jpg",
    ];

    const loadImages = imgUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(loadImages).then(() => setLoading(false));

    return () => document.body.classList.remove("login-page");
  }, []);





  return loading ? (
    <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000",
    }}
  >        <SpinLoading size="large" />
      </div>
 ) : (
     
       <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
 <div className="logo-container" >
   
      {/* <Form className="login-form-box"> */}
        <Tabs className="login-form-box"
          activeKey={showLogin}
          onChange={(key) => setShowLogin(key)}
          style={{ marginBottom: '20px', borderBottom: '1px solid #444' }}
          color={'primary'}
        >
          <Tabs.Tab title="Accedi" key="login" style={{ color: showLogin === 'login' ? '#fff' : '#aaa' }}>
            <LoginForm navigate={navigate} />
          </Tabs.Tab>
          <Tabs.Tab title="Registrati" key="register" style={{ color: showLogin === 'register' ? '#fff' : '#aaa' }}>
            <RegisterForm />
          </Tabs.Tab>
        </Tabs>
      {/* </Form> */}
      </div>
      </motion.div>
    
  );
};

const LoginForm = ({ navigate }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      console.log('Login effettuato con successo!');
      Toast.show({
        icon: 'success',
        content: 'Login effettuato con successo!',
      })
      navigate('/home'); // Naviga alla Home dopo il login
    } catch (error) {
      console.log(`Errore durante il login: ${error.message}`);
      Toast.show({
        icon: 'fail',
        content: 'Errore nel login!',
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleLogin}
      footer={
        <Button block color="primary" size="large" onClick={handleLogin} loading={loading}>
          Accedi
        </Button>
      }
    >
      <Form.Item label="Email" style={{ color: '#fff'}}>
        <Input
          value={form.email}

          onChange={(val) => setForm({ ...form, email: val })}
          placeholder="Inserisci la tua email"
        />
      </Form.Item>
      <Form.Item label="Password" style={{ color: '#fff'}}>
        <Input
          type="password"
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
          placeholder="Inserisci la tua password"
          />
      </Form.Item>
    </Form>
  );
};

const RegisterForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      console.log('Registrazione effettuata con successo!');
      Toast.show({
        icon: 'success',
        content: 'Registrazione effettuata con successo!',
      })
    } catch (error) {
      console.log(`Errore durante la registrazione: ${error.message}`);
      Toast.show({
        icon: 'fail',
        content: 'Attenzione, errore durante la registrazione!',
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleRegister}
      footer={
        <Button block color="primary" size="large" onClick={handleRegister} loading={loading}>
          Registrati
        </Button>
      }
    >
      <Form.Item label="Email">
        <Input
          value={form.email}
          onChange={(val) => setForm({ ...form, email: val })}
          placeholder="Inserisci la tua email"
        />
      </Form.Item>
      <Form.Item label="Password" >
        <Input
          type="password"
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
          placeholder="Inserisci la tua password"
        />
      </Form.Item>
    </Form>
  );
};

export default Login;
