// This App file is using useState as a function to create the loging and loging out functions. 
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import UnsuccessfulPage from './components/UnsuccessfulPage';
import SuccessfulPage from './components/SuccessfulPage';

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [currentView, setCurrentView] = useState('login');

  const handleLogin = (user) => {
    if (user) {
      setLoggedIn(LoggedIn);
      setUsername(user);
      setCurrentView('successful');
    } else {
      setLoginAttempt(loginAttempt + 1);
      setCurrentView('unsuccessful');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setCurrentView('login');
  };
// Links to the three pages in the components folder using currentView. Which displays the current pages.  
  return (
    <div>
      {currentView === 'login' && (
        <LoginPage onLogin={handleLogin} />
      )}
      {currentView === 'successful' && (
        <SuccessfulPage username={username} onLogout={handleLogout} />
      )}
      {currentView === 'unsuccessful' && (
        <UnsuccessfulPage onRetry={() => setCurrentView('login')} />
      )}
    </div>
  );
}

export default App;
