// import React, { useLayoutEffect, useState } from 'react';
// import { ConfigProvider, SafeArea , SpinLoading} from 'antd-mobile';
// import { Routes, Route, useNavigate } from 'react-router-dom'; // Aggiungi useNavigate per il reindirizzamento
// import './CSS/Root.css';
// import MyTapBar from './MyTapBar'; // Importa il componente TapBar
// import { useLocation } from 'react-router-dom';
// import { debug, showToast } from '/utils';

// import Login from './Login';
// import Home from './Home';
// import Workout from './workout';
// import Setting from './setting';
// import WorkoutList from './workoutList'; // La pagina che vuoi navigare

// import { AuthProvider, useAuth } from '/authContext';
// import InstallPromptIOS from "./InstallPromptIOS"; // Importa il popup



// export default function App() {
//   const location = useLocation();
//   const [fadeOut, setFadeOut] = useState(false);

//   const { isAuthenticated } = useAuth();

//   useEffect(() => {
//     if (isAuthenticated !== null) {
//       setTimeout(() => setFadeOut(true), 500); // Effetto di dissolvenza dopo 500ms
//     }
//   }, [isAuthenticated]);

//   const showTabBar = location.pathname !== '/';

//   return (
//     <ConfigProvider>
//     {/* Overlay di caricamento */}
//     {isAuthenticated === null && (
//       <div className={`loading-overlay ${fadeOut ? 'hidden' : ''}`}>
//         <SpinLoading size="large" />
//       </div>
//     )}      <InstallPromptIOS /> {/* Popup per iOS */}

//       <AuthProvider>
//         <Routes>
//           {/* Rotte per le pagine */}
//           <Route path="/" element={<Login />} /> {/* Pagina di login */}
//           <Route path="/home" element={<Home />} /> {/* Pagina home */}
//           <Route path="/workout" element={<Workout />} />
//           <Route path="/setting" element={<Setting />} />
//           <Route path="/workoutList" element={<WorkoutList />} />
//         </Routes>

//         {showTabBar && <MyTapBar />} {/* Mostra il TabBar solo se non siamo sulla pagina di login */}
//         {showTabBar && <SafeArea position="bottom" />} {/* Aggiungi l'area sicura solo se il TabBar è visibile */}
//       </AuthProvider>
//     </ConfigProvider>
//   );
// }


import React, { useEffect, useState } from 'react';
import { ConfigProvider, SafeArea, SpinLoading } from 'antd-mobile';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './CSS/Root.css';
import MyTapBar from './MyTapBar';
import { AuthProvider, useAuth } from '/authContext';
import InstallPromptIOS from './InstallPromptIOS';

// Import delle pagine
import Login from './Login';
import Home from './Home';
import Workout from './workout';
import Setting from './setting';
import WorkoutList from './workoutList';

// Componente separato per gestire l'autenticazione
const AppContent = () => {
  const location = useLocation();

  const showTabBar = location.pathname !== '/';


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/workoutList" element={<WorkoutList />} />
      </Routes>

      {showTabBar && <MyTapBar />}
      {showTabBar && <SafeArea position="bottom" />}
    </>
  );
};

// App principale con `AuthProvider`
export default function App() {
  return (
    <ConfigProvider>
      <AuthProvider>
        <InstallPromptIOS />
        <AppContent />
      </AuthProvider>
    </ConfigProvider>
  );
}
