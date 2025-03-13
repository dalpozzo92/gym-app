// TabBar.jsx
import React, { useState, useEffect } from 'react';
import { Badge, TabBar, SafeArea } from 'antd-mobile';
import { AppOutline, UnorderedListOutline, FireFill, SetOutline } from 'antd-mobile-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './CSS/MyTapBar.css'

const MyTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Ottieni la posizione attuale
  const [activeKey, setActiveKey] = useState('home');
  // Recupera il colore dalla variabile CSS
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--adm-color-primary').trim();
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--adm-color-text-secondary').trim();


  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: <AppOutline />,
      badge: Badge.dot,
      path: '/home', // Aggiungi il percorso qui
    },
    {
      key: 'workout',
      title: 'Workout',
      icon: <FireFill />,
      badge: '5',
      path: '/workout', // Aggiungi il percorso qui
    },
    {
      key: 'diet',
      title: 'Diete',
      icon: <UnorderedListOutline />,
      path: '/diete', // Aggiungi il percorso qui
    },
    {
      key: 'settings',
      title: 'Impostazioni',
      icon: <SetOutline />,
      path: '/setting', // Aggiungi il percorso qui
    },
  ];

  // Imposta activeKey in base al percorso attuale
  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    if (currentTab) {
      setActiveKey(currentTab.key);
    }
  }, [location.pathname]);

  const handleTabClick = (item) => {
    navigate(item.path); // Naviga alla pagina
  };

  return (
    <div className="myTabBar-container">

    <TabBar activeKey={activeKey} onChange={setActiveKey} className="my-tapbar">
      {tabs.map((item) => (
        <TabBar.Item
          key={item.key}
          icon={React.cloneElement(item.icon, { style: { color: activeKey === item.key ? primaryColor : secondaryColor } })} // Cambia colore in base all'attività
          title={item.title}
          badge={item.badge}
          onClick={() => handleTabClick(item)} // Usa la funzione di gestione del click

        />
      ))}
        
    </TabBar>
   
    </div>
  );
};

export default MyTabBar;
