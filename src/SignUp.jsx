import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    const requestBody = {
      name: name,
      email: email,
      password: password,
      appType: 'ott',
    };

    fetch('https://academics.newtonschool.co/api/v1/user/signup', {
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
        document.cookie = `token=${data.token}`;

        if (data.status === 'success') {
          navigate('/');
          console.log('Signup successful');
        } else {
          console.error('Signup failed');
        }
      });
  }

  return (
    <div className='signup-container'>
      <h1 className='sign-up-heading'>Sign Up</h1>
      <div className='signup-form'>
        <form onSubmit={(e) => handleSignUp(e)}>
          <input
            className='signup-input'
            type='text'
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='signup-input'
            type='email'
            placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='signup-input'
            type='password'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='sign-up-button'>Sign Up</button>
          <p className='signup-text'>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
