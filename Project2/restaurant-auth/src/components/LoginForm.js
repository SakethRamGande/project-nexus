import React, { useState } from 'react';

const LoginForm = ({ switchToRegister, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="login_box">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
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
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="login_register">
          <p>
            Don't have an account?
            <a href="#" onClick={switchToRegister}>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
