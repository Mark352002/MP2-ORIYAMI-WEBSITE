import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.css'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/postkeep', { keep_sub: email });
      console.log(response.data); // Assuming you want to log the response
      toast.success('Subscribed successfully'); // Show success toast
      // Reset email input after successful subscription
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Subscription failed'); // Show error toast
    }
  };

  return (
    <>
      <footer className='bg-dark'>
        <div className="container py-5 ">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-3 mt-sm-3 mt-md-0">
              <h5 className="mb-3 f-w">Support</h5>
              <ul className="list-unstyled">
                <li className="mb-2 f-w"><Link to="/contact_us" className='f-g'>&gt; Contact us</Link></li>
                <li className="mb-2"><Link to="/terms" className='f-g'>&gt; Term & Condition</Link></li>
                <li className="mb-2"><Link to="/faq" className='f-g'>&gt; FAQ</Link></li>
                <li className="mb-2"><Link to="/about" className='f-g'>&gt; About us</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 con col-xl-3 mt-sm-3 mt-md-0">
              <h5 className="row mb-3  f-w">Contact us</h5>
              <div className="d-flex justify-content-start">
                <span><i className="fa-solid fa-map-location-dot fa-lg"></i> </span>
                <span><p className="ms-2 f-g">99 Faustino St Punturin Valenzuela City</p></span>
              </div>
              <div className="d-flex justify-content-start">
                <span><i className="fa-solid fa-envelope fa-lg"></i></span>
                <span><p className="ms-2 f-g">oriyami.support@gmail.com</p></span>
              </div>
              <div className="d-flex justify-content-start">
                <span><i className="fa-solid fa-phone fa-lg"></i></span>
                <span><p className="ms-2 f-g">0999-999-9999</p></span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3 mt-sm-3 mt-md-0">
              <h5 className="row mb-3  f-w">Follow us</h5>
              <ul className="list-unstyled d-flex">
                <li><a href="http://www.facebook.com" className='f-g me-2 fs-5'><FaFacebookF /> </a></li>
                <li><a href="http://www.twitter.com"className='f-g me-2 fs-5'><FaTwitter/></a> </li>
                <li><a href="http://www.instagram.com"className='f-g me-2 fs-5'><FaInstagram/> </a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-xl-3 mt-sm-3 mt-md-0">
              <h5 className="row m-0 mb-2  f-w">Let's keep in touch</h5>
              <p className=' f-g'>Sign up for our weekly email marketing newsletter and ORIYAMI updates.</p>
              <form className="d-flex" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="form-control sub" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn-blue btn-subs">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className='container'>
        <hr className="hr " />
        </div>
        
        <p className="pb-2 m-0 f text-center f-g">© Oriyami Hotel. All Rights Reserved 2024. Site optimized by SEO Direct</p>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Footer;
