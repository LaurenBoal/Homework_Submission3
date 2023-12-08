import React from 'react';
import './UnsuccessfulPage.css';

const UnsuccessfulPage = ({ onRetry }) => {
  return (
    <div>
      <h2>Login Unsuccessful, please try again.</h2>
      <p className='goBackText'>Click here to go back to the Login Page: </p>
      <button className='backToLogin'onClick={onRetry}>Login Page</button>
    </div>
  );
};

export default UnsuccessfulPage;
