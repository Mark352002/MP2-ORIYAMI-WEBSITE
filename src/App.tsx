// App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/components/Login';
import Home from './assets/components/Home';
import Gallery from './assets/components/components/Gallery';
import Auth from './assets/components/auth'; // Make sure to import Auth if needed
import Register from './assets/components/Register';
import userdata from './assets/components/usersdata';
import { User } from './assets/components/usersdata';
import Profile from './assets/components/components/Profile';
import Cardroom from './assets/components/components/Cardroom';
import Reservation from './assets/components/components/Reservation';
import Contact_us from './assets/components/components/Contact_us';
import About from './assets/components/components/About';
import Faq  from './assets/components/components/Faq';
import Terms from './assets/components/components/Terms';
import Notfound from './assets/components/Notfound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const handleLogin = (email: string, password: string) => { // Update handleLogin to accept email and password parameters
    setIsLoggedIn(true);
    const user = userdata.find((user) => user.email === email && user.password === password);
    setCurrentUser(user);
  };



  return (
    <div className="App">
      <Router>
        <Routes>
          {!isLoggedIn && <Route path="/"  element={<Login onLogin={handleLogin}  />} />}
          <Route path="*" element={<Notfound  />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Auth isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
          {isLoggedIn && (
            <>
              <Route path="/home" element={<Home currentUser={currentUser} />} />
              <Route path="/gallery" element={<Gallery currentUser={currentUser} />} />
              <Route path="/about" element={<About currentUser={currentUser}/>} />
              <Route path="/faq" element={<Faq currentUser={currentUser}/>} />
              <Route path="/terms" element={<Terms currentUser={currentUser} />} />
              {/* <Route path="/profile1" element={<Profile1 currentUser={currentUser}/>} /> */}
              <Route path="/contact_us" element={<Contact_us currentUser={currentUser}/>} />
              <Route path="/reservation" element={<Reservation currentUser={currentUser}/>} />
              <Route path="/profile" element={<Profile currentUser={currentUser} />} />
              <Route path='/rooms/:id' element={<Cardroom currentUser={currentUser}/>}/>

              

              {/* Add other routes as needed */}
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
