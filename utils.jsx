import { Toast } from 'antd-mobile';


export const showToast = (message) => {
  Toast.show({
    content: <div className="toast-content">{message}</div>,
    duration: 3000,
  });
};

export const debug = (...args) => {
  if (import.meta.env.VITE_DEBUG === 'true') {
    console.log('[DEBUG]', ...args);
  }
};

// Esporta tutto in un unico oggetto
const utils = { showToast, debug };
export default utils;
