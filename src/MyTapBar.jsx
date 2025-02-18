// TabBar.jsx
import React, { useState } from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
import './CSS/MyTapBar.css'

const MyTabBar = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('home');

  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: <AppOutline />,
      badge: Badge.dot,
      onClick: () => navigate('/home'), // Aggiungi il percorso desiderato
    },
    {
      key: 'workout',
      title: 'Workout',
      icon: <UnorderedListOutline />,
      badge: '5',
      onClick: () => navigate('/workout'),
    },
    {
      key: 'diet',
      title: 'Diete',
      icon: <UnorderedListOutline />,
      onClick: () => navigate('/diete'),
    },
    {
      key: 'settings',
      title: 'Impostazioni',
      icon: <UserOutline />,
      onClick: () => navigate('/settings'),
    },
  ];

  return (
    <div className="page-container">

    <TabBar activeKey={activeKey} onChange={setActiveKey} safeArea className="my-tapbar">
      {tabs.map((item) => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
          onClick={item.onClick}
        />
      ))}
    </TabBar>
    </div>
  );
};

export default MyTabBar;
