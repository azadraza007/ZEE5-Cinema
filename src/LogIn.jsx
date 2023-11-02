import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context/AppContext';
import axios from 'axios';
import { useAuthContext } from './Context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userData, setUserData} = useAppContext()
  const {authenticateUser} = useAuthContext()
 
  const navigate = useNavigate();

  const handleSubmit =async (e)=>{
    e.preventDefault()
   authenticateUser(email,password)



   
    
  }

  async function handleLogin(e) {
    e.preventDefault();

    const requestBody = {
      email: email,
      password: password,
      appType: 'ott',
    };

   

    const response = await axios.POST('https://academics.newtonschool.co/api/v1/user/login',requestBody,{
      headers: {
        projectId: 'lzex6csx2fvp',
        'Content-Type': 'application/json',
      },
    })

    console.log(response);

    

    fetch('https://academics.newtonschool.co/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        projectId: 'lzex6csx2fvp',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        document.cookie = `${data.token}`;

        if (data.status === 'success') {
          navigate('/');
          console.log('Login successful');
        } else {
          console.error('Login failed');
        }
      });
  }

  return (
    <div className='login-container'>
      <h1 className='login-heading'>Please Login here!</h1>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
          <input
            className='login-input'
            type='email'
            placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='login-input'
            type='password'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login-button'>Login</button>
          <p className='login-text'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
