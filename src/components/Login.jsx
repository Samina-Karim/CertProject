import React from 'react';
import { useNavigate } from 'react-router-dom';
import stickyNotesImage from '../components/StickyNotes.jpg';
/*CSS imports*/
import "../index.css"

const Login = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate('/app');
  };

  return (
    <div className="login-container">

      <div style={{ backgroundImage: `url(${stickyNotesImage})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}></div>

      <div className="login-message">
        <h2 >LETS GET YOUR TASKS ORGANIZED !</h2>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
