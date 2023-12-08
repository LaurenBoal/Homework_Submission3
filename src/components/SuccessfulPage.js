import React from 'react';
import './SuccessfulPage.css';

const SuccessfulPage = ({ onLogout }) => {

  return (
    <div>
      <br></br>
      <h2 className='welcomeMessage'>Welcome! You have successfully logged in!</h2>
      <p className='logOut'>Click here to log out: </p>
      <button className='logOutButton' onClick={onLogout}>Logout</button>
    </div>
  );
};

export default SuccessfulPage;

