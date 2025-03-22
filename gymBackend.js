// import { useState, useEffect } from 'react';

// const API_BASE_URL = import.meta.env.VITE_API_URL; // Usa la variabile d'ambiente

// // Funzione generica per fare una richiesta API con gestione del token
// export const apiRequest = async (url, method = 'GET', body = null) => {
//   try {
//     let token = localStorage.getItem('supabase_token');
//     if (!token) {
//       throw new Error('Token mancante, effettuare il login');
//     }

//     // Intestazioni di default
//     const headers = {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     };

//     // Se c'è un corpo, lo aggiungiamo alla richiesta
//     const options = {
//       method: method,
//       headers: headers,
//     };

//     // Solo per i metodi che richiedono un corpo (POST, PUT, PATCH, ecc.)
//     if (body) {
//       options.body = JSON.stringify(body);
//     }

//     // Effettua la richiesta
//     let response = await fetch(url, options);

//     // Se il token è scaduto (errore 401), prova a rinnovarlo
//     if (response.status === 401) {
//       token = await refreshAccessToken();  // Rinnova il token
//       if (!token) throw new Error('Impossibile rinnovare il token');
      
//       // Riprova la richiesta con il nuovo token
//       headers['Authorization'] = `Bearer ${token}`;
//       options.headers = headers;
//       response = await fetch(url, options);
//     }

//     // Controllo se la risposta è OK
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Errore durante la richiesta');
//     }

//     // Restituisci i dati della risposta
//     return response.json();
//   } catch (error) {
//     console.error('Errore nella richiesta API:', error);
//     throw error;  // Rilancia l'errore per poterlo gestire nel chiamante
//   }
// };

// export const refreshAccessToken = async () => {
//   const refreshToken = localStorage.getItem('refresh_token');
//   if (!refreshToken) throw new Error('Refresh token mancante, effettuare il login.');

//   const response = await fetch(`${API_BASE_URL}/refresh`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ refreshToken }),
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || 'Errore nel rinnovare il token');
//   }

//   // Salva il nuovo access token
//   localStorage.setItem('supabase_token', data.newAccessToken);
//   localStorage.setItem('refresh_token', data.newRefreshToken); // opzionale se vuoi aggiornare anche il refresh token

//   return data.newAccessToken; // Restituisce il nuovo access token
// };

// // export const getUser = async () => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/getUser`, {
// //       method: "GET",
// //       credentials: "include", // Importante per inviare i cookie di sessione!
// //     });

// //     const data = await response.json();

// //     if (!response.ok) {
// //       throw new Error(data.message || "Errore nel recupero utente");
// //     }

// //     return data;
// //   } catch (error) {
// //     console.error("Errore nel recupero dell'utente:", error.message);
// //     return null;
// //   }
// // };

// export const registerUser = async (name, email, password) => {
//     const response = await fetch(`${API_BASE_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//     });
  
//     const data = await response.json();
//     if (data.error) {
//       throw new Error(data.error);
//     }
//     return data;
//   };

//   // export const loginUser = async (email, password) => {
//   //   const response = await fetch(`${API_BASE_URL}/login`, {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({ email, password }),
//   //   });
  
//   //   const data = await response.json();
//   //   if (!response.ok) {
//   //     throw new Error(data.message || 'Errore di autenticazione');
//   //   }
  
//   //   return data; // Restituisce { token, user }
//   // };
//   export const loginUser = async (email, password) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Errore nel login');
//       }
  
//       const data = await response.json();
  
//       // ✅ Salvare i token DOPO il login
//       localStorage.setItem('access_token', data.accessToken);
//       localStorage.setItem('refresh_token', data.refreshToken);
  
//       return data.user;
//     } catch (error) {
//       console.error('Errore durante il login:', error);
//       throw error;
//     }
//   };
  
  
 
  

//   //recupera token utente per verificare il login
//   // export const getUserData = async () => {
//   //   const token = localStorage.getItem('supabase_token');
//   //   if (!token) throw new Error('Nessun token trovato, effettuare il login.');
  
//   //   const response = await fetch(`${API_BASE_URL}/getUser`, {
//   //     method: 'GET',
//   //     headers: {
//   //       'Authorization': `Bearer ${token}`,
//   //       'Content-Type': 'application/json',
//   //     },
//   //   });
  
//   //   const data = await response.json();
//   //   if (!response.ok) {
//   //     throw new Error(data.message || 'Errore nel recupero dei dati utente');
//   //   }
  
//   //   return data.user_details;
//   // };
// export const getUserData = async () => {
//   try {
//     const data = await apiRequest(`${API_BASE_URL}/getUser`, 'GET');
//     return data.user_details;  // Restituisce i dettagli dell'utente
//   } catch (error) {
//     console.error('Errore nel recupero dei dati utente:', error);
//     throw error;
//   }
// };
//   // api.js
// // export const logout = async (token) => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/logout`, {  // Chiamata al backend
// //         method: 'POST',
// //         headers: {
// //           'Authorization': `Bearer ${token}`,  // Invia il token al backend
// //           'Content-Type': 'application/json',
// //         },
// //       });
  
// //       const data = await response.json();
// //       if (response.ok) {
// //         // Se il logout è riuscito, cancella il token
// //         localStorage.removeItem('supabase_token');
// //         return { success: true, message: 'Logout effettuato!' };
// //       } else {
// //         return { success: false, message: data.message || 'Errore durante il logout' };
// //       }
// //     } catch (error) {
// //       return { success: false, message: 'Errore durante il logout' };
// //     }
// //   };
// // Funzione logout
// export const logout = async () => {
//   try {
//     const token = localStorage.getItem('supabase_token');
//     if (!token) {
//       throw new Error('Token mancante, non è possibile effettuare il logout');
//     }

//     const response = await apiRequest(`${API_BASE_URL}/logout`, 'POST', null);

//     // Se il logout è riuscito, cancella il token dal localStorage
//     if (response.success) {
//       localStorage.removeItem('supabase_token');
//       return { success: true, message: 'Logout effettuato!' };
//     }

//     return { success: false, message: response.message || 'Errore durante il logout' };
//   } catch (error) {
//     return { success: false, message: error.message || 'Errore durante il logout' };
//   }
// };



  
//   //lista workout
// // Funzione per recuperare la lista degli allenamenti
// export const getWorkoutList = async () => {
//   try {
//     const userDetailsString = localStorage.getItem('user_details');
//     if (!userDetailsString) {
//       throw new Error('User details non trovati nel localStorage');
//     }

//     const userDetails = JSON.parse(userDetailsString);
//     if (!userDetails.id_user_details) {
//       throw new Error('ID utente mancante');
//     }

//     // Chiamata alla funzione apiRequest
//     const data = await apiRequest(`${API_BASE_URL}/getWorkoutList`, 'POST', {
//       id_user_details: userDetails.id_user_details,
//     });

//     return data.program || [];  // Ritorna l'elenco degli allenamenti (o un array vuoto se non ci sono allenamenti)
//   } catch (error) {
//     console.error('Errore nel recupero allenamenti:', error);
//     throw error;  // Rilancia l'errore per poterlo gestire nel chiamante
//   }
// };

import utils from '/utils';
import { getGlobalLogout } from '/authContext';


const API_BASE_URL = import.meta.env.VITE_API_URL; // Assicurati che questa variabile sia impostata

// Funzione generica per chiamate API (i cookie sono inviati automaticamente)
export const apiRequest = async (url, method = 'GET', body = null, retried = false) => {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const options = { method, headers, credentials: 'include' };
    
    if (body) {
      options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);

    if (response.status === 401 && !retried) {
      console.warn('Token scaduto, provo a rinnovarlo...');
      
      const refreshSuccess = await refreshAccessToken();
      if (refreshSuccess) {
        console.log('Token rinnovato, riprovo la richiesta originale...');
        return apiRequest(url, method, body, true); // Riprova la richiesta dopo il refresh
      } else {
        console.error('Refresh token fallito. Eseguo logout.');
        await forcedLogout();
        return;
      }
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Errore nella richiesta API');
    }

    return response.json();
  } catch (error) {
    console.error('Errore nella richiesta API:', error);
    throw error;
  }
};

export const verifyToken = async (retried = false) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify-token`, {
      method: 'GET',
      credentials: 'include', // Necessario per inviare i cookie
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Verifica token effettuata con successo');

      return data.isValid; // True se il token è valido
    } 
    
    if (response.status === 401 && !retried) {
      console.warn('Token scaduto, provo a rinnovarlo...');

      const refreshSuccess = await refreshAccessToken();
      if (refreshSuccess) {
        console.log('Token rinnovato, riprovo la verifica...');
        return verifyToken(true); // Riprova la verifica dopo il refresh
      } else {
        console.error('Refresh token fallito. Eseguo logout.');
        await forcedLogout();
        return false;
      }
    }

    return false;
  } catch (error) {
    console.error('Errore nella verifica del token:', error);
    return false;
  }
};




// Login: esegue il login e il server imposta i cookie
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Importante per ricevere i cookie
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login error');
    }
    const data = await response.json();
    return data.user; // Il server restituisce i dati utente (i token sono nei cookie)
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register: registra l'utente
export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Registration error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Refresh token: chiama l'endpoint di refresh per rinnovare i cookie
export const refreshAccessToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/refreshToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (!response.ok) {
      console.warn('Il token non è stato rinnovato.');
      return false; // Refresh fallito
    }

    console.log('Token rinnovato con successo.');
    return true; // Refresh riuscito
  } catch (error) {
    console.error('Errore nel refresh token:', error);
    return false;
  }
};


// Get user data: recupera i dati utente dal server (i cookie vengono inviati automaticamente)
export const getUserData = async () => {
  try {
    const data = await apiRequest(`${API_BASE_URL}/getUser`, 'GET');
    return data.user_details;
  } catch (error) {
    console.error('Get user data error:', error);
    throw error;
  }
};

// Get workout list: recupera la lista degli allenamenti
export const getWorkoutList = async (id_user_details) => {

  try {
    const data = await apiRequest(`${API_BASE_URL}/getWorkoutList`, 'POST', { id_user_details });
    return data.program || [];
  } catch (error) {
    console.error('Get workout list error:', error);
    throw error;
  }
};

// Logout: chiama l'endpoint di logout, che cancella i cookie sul server
export const logout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Importante per inviare i cookie
    });
    const data = await response.json();
    return { success: true, message: data.message };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, message: error.message || 'Errore durante il logout' };
  }
};


export const forcedLogout = async () => {
  const logoutFn = getGlobalLogout();
  if (logoutFn) {
    // Esegui il logout
    await logoutFn();
    
    console.warn('Sessione scaduta. Effettua nuovamente il login.');
  } else {
    console.error('Forced logout: funzione di logout globale non disponibile.');
  }
};


export default {
  apiRequest,
  loginUser,
  registerUser,
  refreshAccessToken,
  getUserData,
  getWorkoutList,
  logout,
  forcedLogout,
  verifyToken,
};
