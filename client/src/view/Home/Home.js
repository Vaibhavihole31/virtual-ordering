import React from 'react';
import { virtualUser } from './../../utils/virtualUser';

function Home() {

  function logOut() {
      localStorage.removeItem('virtualUser');
      window.location.href = '/login'
  }

  return (
    <>
    <h1>Home Page</h1>

    <button type="button" className='btn btn-primary' onClick={logOut}>Logout</button>
    </>
  )
}

export default Home