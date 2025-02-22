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
import { Form, Input, Button, Tabs, Toast, SpinLoading, Image } from 'antd-mobile';
import './CSS/Login.css';  // Assicurati di avere il file CSS per gli stili aggiuntivi
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { color, motion } from "framer-motion";


const supabaseUrl = 'https://btvkhnecdcetfiaoozdt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmtobmVjZGNldGZpYW9vemR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMTY3MzksImV4cCI6MjA1MzU5MjczOX0.KZZbe7QQWU2zQzEgMqe912SA0MWMp04_zk-bwytGQqU';
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [showLogin, setShowLogin] = useState('login');  // Cambia 'true' o 'false' con 'login' o 'register'
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  // const imgLogo = './images/logo-crew.png';

  const navigate = useNavigate();
  // const [backgroundImage, setBackgroundImage] = useState('');
    const [fadeOut, setFadeOut] = useState(false); // Stato per gestire la dissolvenza
    const backgroundImage = './images/background-2.jpg'; 


  // useEffect(() => {

  //   const img = new Image();
  //   img.src = './images/background-2.jpg'; // Percorso dell'immagine

  //   img.onload = () => {
  //     setBackgroundImage(`url(${img.src})`);
  //     setLoading(false); // Imposta loading a false non appena l'immagine è caricata
  //     setFadeOut(true); // Inizia la dissolvenza
  //   };
 

  //   return () => {
  //     // Pulizia se necessario
  //   };
  // }, []);

  const handleImageLoad = () => {
    setLoading(false);
    setFadeOut(true); // Inizia la dissolvenza
  };

  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };



  return (

    //  <Form className="login-page"
    //  style={backgroundStyle}
    //   >
    //      {loading && (
    //     <div className={`loading-overlay ${fadeOut ? 'hidden' : ''}`}>
    //       <SpinLoading size="large" />
    //     </div>
    //   )}
       
    <Form className="login-page">
    {loading && (
      <div className={`loading-overlay ${fadeOut ? 'hidden' : ''}`}>
        <SpinLoading size="large" />
      </div>
    )}

    {/* Componente Image di antd-mobile */}
    <Image 
      src={backgroundImage} 
      fit="cover" 
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute', // Posizione assoluta per coprire il contenitore
        top: 0,
        left: 0,
        zIndex: -1, // Mette l'immagine dietro il contenuto
      }} 
      onLoad={handleImageLoad} // Gestisci il caricamento
    />  

      

    <motion.div className="moton-div"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >

        <Image 
          src='./images/logo-crew.png' // Percorso del logo
          fit='contain' 
          className="logo"
        />

      {/* <Form className="login-form-box"> */}
        <Tabs className="login-tabs-box"
          activeKey={showLogin}
          onChange={(key) => setShowLogin(key)}
          color={'primary'}
        >
          <Tabs.Tab title="Accedi" key="login" style={{ color: showLogin === 'login' ? '#fff' : '#aaa' }}>
            <LoginForm navigate={navigate} />
          </Tabs.Tab>
          <Tabs.Tab title="Registrati" key="register" style={{ color: showLogin === 'register' ? '#fff' : '#aaa' }}>
            <RegisterForm />
          </Tabs.Tab>
        </Tabs>

        </motion.div>

      {/* </Form> */}
      
      </Form>
   
  );
};

const LoginForm = ({ navigate }) => {
  const [form, setForm] = useState({ email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      Toast.show({ content: 'Login effettuato con successo!' });
      // Esempio di navigazione successiva:
      navigate('/home');
    } catch (error) {
      Toast.show({ content: `Errore durante il login: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form className="login-form"
      layout="vertical"
      onFinish={handleLogin}
      footer={
        <Button block shape='rounded' color="primary" size="large" onClick={handleLogin} loading={loading}>
          Accedi
        </Button>
      }
    >
      <Form.Item name="email" className="login-item-box"
      rules={[
        { required: true, message: "L'email è obbligatoria!" },
        { type: "email", message: "Inserisci un'email valida!" }
      ]}
      >
        <Input className="login-item-input"
          value={form.email}

          onChange={(val) => setForm({ ...form, email: val })}
          placeholder="Inserisci la tua email"
        />
      </Form.Item >
      <Form.Item name="password" className="login-item-box"
            rules={[{ required: true, message: "La password è obbligatoria!" }]}
>
        <Input className="login-item-input"
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
  const [form, setForm] = useState({ email: '', password: ''});
  const [loading, setLoading] = useState(false);
  
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
    <Form className="login-form"
      layout="vertical"
      onFinish={handleRegister}
      footer={
        <Button block shape='rounded' color="primary" size="large" onClick={handleRegister} loading={loading}>
          Registrati
        </Button>
      }
    >
      <Form.Item  name="name" className="login-item-box" 
      rules={[{ required: true, message: "Il nome è obbligatorio!" }]}
      >
        <Input className="login-item-input"
          //  value={form.name}
          // onChange={(val) => setForm({ ...form, name: val })}
          placeholder="Inserisci il tuo nome"
          
        />
      </Form.Item>
      <Form.Item name="email" className="login-item-box"
        rules={[
          { required: true, message: "L'email è obbligatoria!" },
          { type: "email", message: "Inserisci un'email valida!" }
        ]}
      >
        <Input className="login-item-input"
          value={form.email}
          onChange={(val) => setForm({ ...form, email: val })}
          placeholder="Inserisci la tua email"
        />
      </Form.Item>
      <Form.Item name="password" className="login-item-box"
      rules={[{ required: true, message: "La password è obbligatoria!" }]}
      >
        <Input className="login-item-input"
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




// import React, { useState } from 'react';
// import { Form, Input, Button, Picker, Space } from 'antd-mobile';
// import { DownOutline } from 'antd-mobile-icons';
// export default () => {
//     const onFinish = (values) => {
//         console.log(values);
//     };
//     const checkMobile = (_, value) => {
//         if (value.realValue) {
//             return Promise.resolve();
//         }
//         return Promise.reject(new Error('手机号不能为空!'));
//     };
//     return (<>
//       <Form layout='vertical' onFinish={onFinish} initialValues={{
//             mobile: { preValue: '86', realValue: '' },
//         }} footer={<Button block type='submit' color='primary' size='large'>
//             提交
//           </Button>}>
//         <Form.Header>自定义表单控件</Form.Header>
//         <Form.Item label='姓名' name='name' rules={[{ required: true, message: '姓名不能为空!' }]}>
//           <Input placeholder='请输入姓名'/>
//         </Form.Item>
//         <Form.Item label='手机号' name='mobile' rules={[{ required: true }, { validator: checkMobile }]}>
//           <MobileField />
//         </Form.Item>
//       </Form>
//     </>);
// };
// const columns = [['86', '01', '02', '03']];
// const MobileField = ({ value = { preValue: '86', realValue: '' }, onChange, }) => {
//     const [visible, setVisible] = useState(false);
//     const triggerValue = (changedValue) => {
//         onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, value), changedValue));
//     };
//     const onRealValueChange = (value) => {
//         triggerValue({ realValue: value });
//     };
//     const onPreValueChange = (value) => {
//         const v = value[0];
//         if (v === null)
//             return;
//         triggerValue({ preValue: v });
//     };
//     return (<>
//       <Space align='center'>
//         <Space align='center' onClick={() => setVisible(true)}>
//           <div>+{value.preValue}</div>
//           <DownOutline />
//         </Space>
//         <Input placeholder='请输入手机号' value={value.realValue} onChange={onRealValueChange}/>
//       </Space>
//       <Picker columns={columns} visible={visible} onClose={() => {
//             setVisible(false);
//         }} value={[value.preValue]} onConfirm={onPreValueChange}/>
//     </>);
// };
