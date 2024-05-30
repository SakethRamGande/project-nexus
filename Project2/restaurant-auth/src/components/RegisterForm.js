import React, { useState } from 'react';

const RegisterForm = ({ switchToLogin, handleRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(username, email, password);
  };

  return (
    <div className="register_box">
      <h2>Registration</h2>
      <form onSubmit={onSubmit}>
        <div className="input_box">
          <span className="icon">👤</span>
          <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Username</label>
        </div>
        <div className="input_box">
          <span className="icon">📧</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div className="input_box">
          <span className="icon">🔒</span>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <div className="remember_forgot">
          <label><input type="checkbox" />I agree to the terms and conditions</label>
        </div>
        <button type="submit" className="btn">Register</button>
        <div className="login_register">
          <p>
            Already have an account?
            <a href="#" onClick={switchToLogin}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
