import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Variabile globale per il logout
let globalLogout = null;
export const setGlobalLogout = (logoutFn) => {
  globalLogout = logoutFn;
};
export const getGlobalLogout = () => globalLogout;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  // Registra la funzione di logout globale una volta che il componente è montato
  useEffect(() => {
    setGlobalLogout(logout);
  }, [logout]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
