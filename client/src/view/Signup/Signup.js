import React from 'react'
import './Signup.css'
import Order from './order.png'

function Signup() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='order-img' src={Order} />
                    </div>

                    <div className='col-md-6 text-center'>
                        <div className='signup-card'>
                            <h2 className='text-center'>Signup</h2>

                            <form>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="text"
                                        className="form-control input-control"
                                        id="name"
                                        placeholder='name'
                                    />
                                </div>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="text"
                                        className="form-control input-control"
                                        id="email"
                                        placeholder='email'
                                    />
                                </div>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="text"
                                        className="form-control input-control"
                                        id="phone"
                                        placeholder='phone'
                                    />
                                </div>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="password"
                                        className="form-control input-control"
                                        id="password"
                                        placeholder='password'
                                    />
                                </div>
                                <button className="signup-page-btn w-100 mb-5" type="button">
                                    <i class="fa-solid fa-right-to-bracket"></i> <b>Signup</b>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup