import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data); // handle successful login
    } catch (error) {
      console.error(error); // handle login error
    }
  };

  const handleRegister = async (username, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/register', { username, email, password });
      console.log(response.data); // handle successful registration
    } catch (error) {
      console.error(error); // handle registration error
    }
  };

  return (
    <div className={`container ${isRegistering ? 'active' : ''}`}>
      {isRegistering ? (
        <RegisterForm switchToLogin={() => setIsRegistering(false)} handleRegister={handleRegister} />
      ) : (
        <LoginForm switchToRegister={() => setIsRegistering(true)} handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default AuthForm;
