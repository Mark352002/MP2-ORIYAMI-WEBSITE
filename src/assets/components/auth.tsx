import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import { User } from './usersdata';
import Profile from './components/Profile';
import Contact_us from './components/Contact_us';


type AuthProps = {
  isLoggedIn: boolean;
  currentUser?: User;
};

const Auth: React.FC<AuthProps> = ({ isLoggedIn, currentUser }) => {
  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home currentUser={currentUser}/>} />
        
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}
      {        <Route path="/gallery" element={<Gallery />} />
      || <Route  element={<NavBar />} />
      || <Route  element={<NavBar />} />
      || <Route  element={<Profile />} />
      || <Route  element={<Contact_us />} />

      // || <Route  element={<Profile  currentUser={currentUser}/>} />

      
      
      }
    </Routes>
  );
};

export default Auth;
