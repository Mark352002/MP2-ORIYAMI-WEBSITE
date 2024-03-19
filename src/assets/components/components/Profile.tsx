import React, { FC, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { User } from '../usersdata';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Profile.css"
import Footer from './Footer';

interface ProfileProps {
  currentUser?: User;
}

const Profile: FC<ProfileProps> = ({ currentUser }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [formData, setFormData] = useState({
    fname: currentUser?.fname || '',
    lname: currentUser?.lname || '',
    contact_no: currentUser?.contact_no || '',
    address: currentUser?.address || '',
    newPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitProfile = async () => {
    try {
      const response = await axios.put(`https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/useredit/${currentUser?.user_id}`, formData);
      console.log('Updated user:', response.data);
      toast.success('Profile updated successfully!');
      setShowProfileModal(false);
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user. Please try again later.');
    }
  };

  const handleSubmitPassword = async () => {
    try {
      const response = await axios.put(`https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/usereditpass/${currentUser?.user_id}`, { password: formData.newPassword });
      console.log('Updated password:', response.data);
      toast.success('Password updated successfully!');
      setShowPasswordModal(false);
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Error updating password. Please try again later.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <NavBar />
   <div>
       
   <center className='mt-5'>
        <p>&nbsp;</p>
        <hr className='mt-5'/>
        <h4 className='mb-5'>Profile</h4>
      </center>
   {currentUser && (
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6 p-3'>
            <div className="d-flex justify-content-center">
              <div className='container' style={{ width: '40rem', border: "1px solid  #cccccc  ",borderRadius:"10px"}}>
                <p className='mt-3' style={{color: "#6c757d",fontWeight: 500}}>User ID: {currentUser.user_id}</p>
                <p>Name: {currentUser.fname} {currentUser.lname}</p>
                <p>Contact Number: {currentUser.contact_no}</p>
                <p>Address: {currentUser.address}</p>
                <button className='btn-blue' onClick={() => setShowProfileModal(true)}>Edit Profile</button>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        
          <div className='col-12 col-md-12 col-lg-6 p-3'>
            <div className="d-flex justify-content-center">
              <div className='container'  style={{ width: '40rem', border: "1px solid  #cccccc  ",borderRadius:"10px"}}>
                <p className='mt-3' style={{color: "#6c757d",fontWeight: 500}}>Email: {currentUser.email}</p>
                <p>Password: {showPassword ? currentUser.password : '********'} </p> {/* Conditionally show/hide password */}
                <button className='btn-blue'onClick={togglePasswordVisibility}>Show/Hide Password</button> {/* Toggle password visibility */}
                <button className='btn-blue'onClick={() => setShowPasswordModal(true)}>Change Password</button>
                <p className='mb-3'>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      )}
   </div>
      
      <br/>
      {showProfileModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowProfileModal(false)}>&times;</span>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
            <label htmlFor="contact_no">Contact no.:</label>
            <input type="text" name="contact_no" value={formData.contact_no} onChange={handleChange} />
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
            <button onClick={handleSubmitProfile}>Save Profile</button>
          </div>
        </div>
      )}

      {showPasswordModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowPasswordModal(false)}>&times;</span>
            <label htmlFor="newPassword">New Password:</label>
            <input type={showPassword ? 'text' : 'password'} name="newPassword" value={formData.newPassword} onChange={handleChange} />
            <button onClick={handleSubmitPassword}>Save Password</button>
          </div>
        </div>
      )}
      <ToastContainer/>
      <Footer/>
    </div>
  );
};

export default Profile;
