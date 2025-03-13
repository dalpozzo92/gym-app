import { NavBar } from 'antd-mobile';
import './CSS/MyNavBar.css';
import { color, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


const MyNavBar = ({ title }) => {
  const navigate = useNavigate();


  const userDetailsString = localStorage.getItem('user_details');
    if (userDetailsString) {
      try {
        const userDetails = JSON.parse(userDetailsString);
        name = userDetails.name;
      } catch (error) {
        console.error('Errore nel parsing di user_details dal localStorage:', error);
      }
    }

      // Funzione per estrarre le iniziali dal nome
  const getInitials = (name) => {
    if (!name) return '';
    const parts = name.split(' ');
    return parts.map(part => part.charAt(0)).join('').toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className="mynavbar-container">
      <NavBar
        className="mynavbar"
        backIcon={false}
       
          
       
        
      >
        
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.div>
      </NavBar>
      <div className="user-circle" onClick={() => navigate("/setting")}>
            {initials}
          </div>
    </div>
  );
};

export default MyNavBar;
