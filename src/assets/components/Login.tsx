import React, { useState } from 'react';
import userdata from './usersdata';
import { Link } from 'react-router-dom';
import backgroundImage from './components/images/Carousel/bg.jpg'; // Import the image file
import logoicon from "./components/images/logo/logo.png"

interface LoginProps {
  onLogin: (email: string, password: string) => void; // Update onLogin prop to accept email and password parameters
}

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = userdata.find((user) => user.email === email && user.password === password);
    if (user) {
      onLogin(email, password); // Call onLogin with email and password parameters
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backdropFilter: 'blur(100px)' }}>
      <div style={{ border: '1px solid lightgray', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <img src={logoicon} alt="Logo Icon" style={{ width: '150px', marginRight: '10px' }} /> <h4 style={{color: "#808080"}}>Login</h4>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '10px', width: '300px' }} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px', width: '300px' }} />
          <p>Don't have an account yet?<Link to="/register"> Sign Up </Link></p>
          
          <button type="submit" style={{ marginBottom: '10px', width: '300px' }} className='btn-blue'>Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
      
      
    </div>
  );
}

export default Login;
