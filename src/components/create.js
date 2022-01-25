// import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';

// export default function Create()

const Create = (props) => {
  const [ firstName, setFirstName] =useState('');
  const [ lastName, setLastName] =useState('');
  const [ email, setEmail] =useState('');
  const [ password, setPassword] =useState('');
  const [ checkbox, setCheckbox] =useState(false);
    const postData = () => {
      axios.post('https://61ee8da0d593d20017dbaf34.mockapi.io/korkorcrudfakedate',
      {
        firstName,
        lastName,
        email,
        password,
        checkbox,

      })
      // console.log(firstName);
      // console.log(lastName);
      // console.log(email);
      // console.log(password);
      // console.log(checkbox)
    }
  
    return (
      <div>
    <form className='create-from-label' onSubmit={(e) => {
      e.preventDefault();
    }}>
      <h5 className='register-style'>Register an account</h5>
    <label>First Name</label>
    <input placeholder='First Name' className='input-style' onChange={(e)=> setFirstName(e.target.value)}/>
    <br/>
    <br/>
    <label>Last Name</label>
    <input placeholder='Last Name' className='input-style' onChange={(e)=> setLastName(e.target.value)}/>
    <br/>
    <br/>
    <label>Email</label>
    <input placeholder='Email' className='input-style' onChange={(e) => setEmail(e.target.value)}/>
    <br/>
    <br/>
    <label>Password</label>
    <input type='password'placeholder='Password' className='input-style' onChange={(e) => setPassword(e.target.value)}/>
    <p><small>A password will be sent to your email address</small></p>
    <br/>
    <br/>
    <button onClick={postData}type='submit' className='btn btn-primary'>Login</button>
    <br/>
    <br/>
    <input type='checkbox' className='form-check-input' onChange={(e) => setCheckbox(!checkbox)}></input>
    <label>I agree to the Terms and Conditions</label>
  </form> 
  </div>
  
    )
  };

export default Create;