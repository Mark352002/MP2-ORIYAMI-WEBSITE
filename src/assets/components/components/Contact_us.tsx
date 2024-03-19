import React, { FC, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from '../usersdata';
import NavBar from './NavBar';
import FeedbackModal from './Feedback';
import "./Contact_us.css";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Footer from './Footer';


interface HomeProps {
    currentUser?: User;
    
  }
  
const Contact_us:FC<HomeProps>  = ({ currentUser }) =>{
  const [formData, setFormData] = useState({
    get_name: '',
    get_gmail: '', // Modified from get_email to get_gmail
    get_contact: '',
    get_message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/postgtouch', formData);
      console.log(response.data);
      toast.success('Form submitted successfully'); // Toast notification
      // Clear form after successful submission if needed
      setFormData({
        get_name: '',
        get_gmail: '', // Modified from get_email to get_gmail
        get_contact: '',
        get_message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form'); // Toast notification for error
    }
  };

  return (
    <>
    <section className="align-items-center pb-3 container mx-auto">
      <NavBar/> 
      <FeedbackModal currentUser={currentUser} />
      
      <ToastContainer /> {/* Toast container */}
      <center className='mt-5'>
      <p>&nbsp;</p>
        <hr className='mt-5'/>
        <h4 className='mb-5'>Contact Us</h4>
      </center>
      <div className="contact-info cin mb-5 mx-auto">
        <div className="card cc bg-dark">
          <MdOutlineMail className='card-icon ci fas fa-phone'/>
          <p>oriyami.support@gmail.com</p>
        </div>
        <div className="card cc bg-dark">
          <BsTelephone className='card-icon ci fas fa-phone'/>
          <p>Phone no:  0999 9999 999<br />Tell no: 87-000</p>
        </div>
        <div className="card cc bg-dark">
          <CiLocationOn className='card-icon ci fas fa-phone'/>
          <p>99 Faustino St Punturin Valenzuela City</p>
        </div>
      </div>
      <div className="row p-3 mx-auto">
        <div className="col-md-12 col-lg-12 col-xl-6 mx-auto">
          <h3 className="f">Get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="get_name" placeholder="ex. Mark Vincent Capiral" value={formData.get_name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="get_gmail" placeholder="ex. example@gmail.com" value={formData.get_gmail} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="num" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="get_contact" placeholder="ex. 09XXXXXXXXX" value={formData.get_contact} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="get_message" rows={3} value={formData.get_message} onChange={handleChange}></textarea>
            </div>
            <center>
              <button type="submit" className="btn btn-red">Submit</button>
            </center>
          </form>
        </div>
        <div className="col-md-10 col-lg-12 col-xl-6 mx-auto">
          <center>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.6350781906937!2d120.9824800733754!3d14.738562116825934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b22b8c7218d3%3A0x1ea1e17998bf7109!2s9%20P.%20Faustino%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1704005841830!5m2!1sen!2sph" width="600" height="450" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </center>
        </div>
      </div>
      
    </section>
    <Footer/>
    </>
    
  );
};

export default Contact_us;
