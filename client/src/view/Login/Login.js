import React, { useState } from 'react';
import './Login.css';
import LoginImg from './login-img.png';
import axios from 'axios';

function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  async function checkLogin () {
    const response = await axios.post('/login',{
      email: email,
      password: password
    })

   console.log(response.data);
  }

  return (
    <>
      <div className='container'>
        <div className='login-card'>
          <div className='row'>
            <h2 className='text-center'>Login</h2>

            <div className='col-md-5'>
              <img src={LoginImg} className="login-img"/>
            </div>
            <div className='col-md-7'>
              <div className="mb-3 mt-5" >
                <div className="mb-3 mt-5" >

                  <input
                    type="text"
                    className="form-control input-control"
                    id="email"
                    placeholder='email'
                    value={email} onChange={(e) => setEmail(e.target.value) }
                  />
                </div>
                <input
                  type="password"
                  className="form-control input-control"
                  id="password"
                  placeholder='password'
                  value={password} onChange={(e) => setPassword(e.target.value) }
                />
              </div>

              <button className="signup-page-btn w-100 mb-5 btn btn-primary" type="button" onClick={checkLogin}>
                <i class="fa-solid fa-right-to-bracket"></i> <b>Signup</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login