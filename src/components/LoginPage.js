// The app.js file usses useState but so does this page to add state management to the username and password. 
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // The username is: user and the password is: password.
    if (username === 'user' && password === 'password') {
      onLogin(username);
    } else {
      
      onLogin(''); // Sends to unsuccessful login page
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <br></br>
      <p>Enter Username:<input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /></p>
     
      <p>Enter Password: <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></p>

        <button className="logInButton" onClick={handleLogin}>Login</button>
    </div>
  );
};


export default LoginPage;