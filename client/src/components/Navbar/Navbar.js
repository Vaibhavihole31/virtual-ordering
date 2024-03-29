import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { myFoodListCount } from './../../utils/myList'
import './Navbar.css';
import { virtualUser } from './../../utils/virtualUser'

export default function Navbar() {

  const [foodItemCount, setFoodItemCount] = useState(myFoodListCount)

  function logOut() {
    localStorage.removeItem('virtualUser');
    window.location.href = '/login'
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light navbar-light bg-light">
        <a class="navbar-brand" href="/"><b>🍟 VIRTUAL ORDERING</b></a>
        <button
          className="navbar-toggler nav-color"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              {!virtualUser && (
                <Link className="nav-link" to="/signup">
                  <span className='nav_register nav-color btn'><b>Signup</b>  <i class="fa-solid fa-user-plus"></i> </span>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!virtualUser && (
                <Link className="nav-link" to="/login">
                  <span className='nav_register nav-color btn'><b> Login </b><i class="fa-solid fa-right-to-bracket"></i> </span>
                </Link>
              )
              }
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse navbar-sizing" id="navbarNav" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
          <form className='d-flex align-item-center'>
            <Link to='/mylist' className="text-decoration-none">
              <b className='me-2 align-item-center my-list'>🍟 {foodItemCount}</b>
            </Link>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             {virtualUser &&(
               <Link className="nav-link" to="/">
               <button type="button" className='logout-btn' onClick={logOut}> <i class="fa-solid fa-right-from-bracket"></i> <b> Logout</b></button>
             </Link>
             )

             }
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
