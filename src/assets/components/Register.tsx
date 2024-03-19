import React, { useState, FormEvent } from "react";
import "./Register.css";
import backgroundImage from './components/images/Carousel/bg.jpg'; // Import the image file
import logoicon from "./components/images/logo/logo.png"
import { Link } from "react-router-dom";

interface FormInput {
  firstname: string;
  lastname: string;
  contactNo: string;
  address: string;
  email: string;
  password: string;
  confirmPass: string;
  successMsg: string;
}

interface FormError {
  firstname: string;
  lastname: string;
  contactNo: string;
  address: string;
  email: string;
  password: string;
  confirmPass: string;
}

const Register: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({
    firstname: "",
    lastname: "",
    contactNo: "",
    address: "",
    email: "",
    password: "",
    confirmPass: "",
    successMsg: ""
  });

  const [formError, setFormError] = useState<FormError>({
    firstname: "",
    lastname: "",
    contactNo: "",
    address: "",
    email: "",
    password: "",
    confirmPass: ""
  });

  const handleUserInput = (name: string, value: string) => {
    setFormInput({
      ...formInput,
      [name]: value
    });
  };

  const validateFormInput = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    // initialize an object to track input error
    let inputError: FormError = {
      firstname: "",
      lastname: "",
      contactNo: "",
      address: "",
      email: "",
      password: "",
      confirmPass: ""
    };

    // check if fields are empty
    if (!formInput.firstname) {
      inputError.firstname = "First name should not be empty";
    }
    if (!formInput.lastname) {
      inputError.lastname = "Last name should not be empty";
    }
    if (!formInput.contactNo) {
      inputError.contactNo = "Contact no. should not be empty";
    }
    if (!formInput.address) {
      inputError.address = "Address should not be empty";
    }
    if (!formInput.email) {
      inputError.email = "Enter a valid email";
    }
    if (!formInput.password) {
      inputError.password = "Password should not be empty";
    }

    // check if passwords match
    if (formInput.confirmPass !== formInput.password) {
      inputError.confirmPass = "Password and Confirm Password do not match";
    }

    // Set errors
    setFormError(inputError);

    // Check if there are no errors
    const noErrors = Object.values(inputError).every(error => error === "");

    if (noErrors) {
      try {
        const response = await fetch('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/userregister', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fname: formInput.firstname,
            lname: formInput.lastname,
            contact_no: formInput.contactNo,
            address: formInput.address,
            email: formInput.email,
            password: formInput.password
          })
        });

        if (!response.ok) {
          throw new Error('Failed to register user');
        }

        // Clear form fields
        setFormInput({
          firstname: "",
          lastname: "",
          contactNo: "",
          address: "",
          email: "",
          password: "",
          confirmPass: "",
          successMsg: "Account Registered"
        });

        // Proceed with form submission if validation succeeds
        console.log("Form submitted successfully");
      } catch (error) {
        console.error('Error registering user:', error);
        // Handle error here, e.g., display an error message to the user
      }
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <div className="container" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid #808080', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="card-body">
      <center><img src={logoicon} alt="Logo Icon" style={{ width: '150px', marginRight: '10px' }} /> <h4 style={{color: "#808080"}}>Register an Account </h4></center>

        <form onSubmit={validateFormInput}>
          {/* firstname input */}
          <p className="label">First Name</p>
          <input
            value={formInput.firstname}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="text"
            name="firstname"
            className="input"
            placeholder="Enter First Name"
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.firstname}</p>
  
          {/* lastname input */}
          <p className="label">Last Name</p>
          <input
            value={formInput.lastname}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="text"
            name="lastname"
            className="input"
            placeholder="Enter Last Name"
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.lastname}</p>
  
          {/* contactno input */}
          <p className="label">Contact No.</p>
          <input
            value={formInput.contactNo}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="text"
            name="contactNo"
            className="input"
            placeholder="Enter Contact no."
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.contactNo}</p>
  
          {/* address input */}
          <p className="label">Address</p>
          <input
            value={formInput.address}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="text"
            name="address"
            className="input"
            placeholder="Enter Address"
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.address}</p>
  
          {/* Email input */}
          <p className="label">Email</p>
          <input
            value={formInput.email}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="text"
            name="email"
            className="input"
            placeholder="Enter Email"
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.email}</p>
  
          {/* Password input */}
          <p className="label">Password</p>
          <input
            value={formInput.password}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="password"
            name="password"
            className="input"
            placeholder="Enter Password"
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.password}</p>
  
          {/* confirm password */}
          <p className="label">Confirm Password</p>
          <input
            value={formInput.confirmPass}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="password"
            name="confirmPass"
            className="input"
            placeholder="Enter Confirm Password"
            style={{ borderColor: '#808080' }} // Add borderColor style
          />
          <p className="error-message">{formError.confirmPass}</p>
          <p className="success-message">{formInput.successMsg}</p>
          <p>Already have an account? <Link to="/">Login</Link></p>
  
          {/* submit button */}
          <input type="submit" className="btn-blue btn" value="Submit" />
        </form>
      </div>
    </div>
  </div>
  

    
  );
};

export default Register;
