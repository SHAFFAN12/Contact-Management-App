import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Hide from '../assets/hide.png';
import Show from '../assets/show.png';


const Auth = () => {
  // Login state
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  // Registration state
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e, type) => {
    const formData = type === 'login' ? loginFormData : registerFormData;

    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });

    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const loginhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:2000/api/v1/auth', loginFormData);

      console.log(res.data);

      if (res && res.data && res.data.token) {
        localStorage.setItem('authToken', res.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You are now logged in!',
        }).then(() => {
          // Navigate to the dashboard
          navigate('/dashboard');
        });
      } else {
        console.error('Unexpected response format:', res);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const registerhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:2000/api/v1/users', registerFormData);
      console.log(res.data);

      console.log('Successfully Registered');

      if (res.data && res.data.token) {
        localStorage.setItem('authToken', res.data.token);

        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Registration successful!',
          text: 'You have successfully registered.',
        });
      }
      // Redirect to the dashboard after successful registration
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);

      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Registration failed!',
        text: 'There was an error during registration.',
      });
    }
  };


  //show password

  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
     <div className="body">
        <div className="main">
          <input className="input" type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form onSubmit={registerhandleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Sign Up
              </label>
              <input
                className="input"
                type="text"
                placeholder="User Name"
                name="name"
                value={registerFormData.name}
                onChange={(e) => handleChange(e, 'register')}
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={registerFormData.email}
                onChange={(e) => handleChange(e, 'register')}
                required
              />
                <div className="password-container">
                <div className="password-input">
                  <input
                    className="input"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={registerFormData.password}
                    onChange={(e) => handleChange(e, 'register')}
                    required
                  />
                </div>
                <button
                  className="btn-toggle"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <img src={Hide} alt="hide-password" /> : <img src={Show} alt="show-password" />}
                </button>
              </div>

              <button className="btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={loginhandleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                LogIn
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={loginFormData.email}
                onChange={(e) => handleChange(e, 'login')}
                required
              />
              {/* <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={loginFormData.password}
                onChange={(e) => handleChange(e, 'login')}
                required
              /> */}

<div className="password-container">
                <div className="password-input">
                  <input
                    className="input"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    onChange={(e) => handleChange(e, 'login')}
                    required
                  />
                </div>
                <button
                  className="btn-toggle"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <img src={Hide} alt="hide-password" /> : <img src={Show} alt="show-password" />}
                </button>
              </div>

              <button className="btn-2" type="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Auth;
