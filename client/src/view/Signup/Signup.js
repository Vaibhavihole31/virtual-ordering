import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import Order from './order.png';
import swal from 'sweetalert';

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user")


    async function addUser() {
        const response = await axios.post('/signup', {
            name: name,
            email: email,
            password: password,
            phone: phone,
            role: role
        })

        console.log(response.data);

        if (response.data.success) {
            await swal({
                title: "Signup Successfully !!",
                text: response.data.message,
                icon: "success",
                button: "Aww yiss!",
              });
        }
        else {
            swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
              });
        }

        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setRole("");
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img className='order-img' src={Order} />
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-5 text-center'>
                        <div className='signup-card'>
                            <h2 className='text-center'>Signup</h2>

                            <form>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="text"
                                        className="form-control input-control"
                                        id="name"
                                        placeholder='name'
                                        value={name} onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="text"
                                        className="form-control input-control"
                                        id="email"
                                        placeholder='email'
                                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="text"
                                        className="form-control input-control"
                                        id="phone"
                                        placeholder='phone'
                                        value={phone} onChange={(e) => { setPhone(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 mt-5" >
                                    <input
                                        type="password"
                                        className="form-control input-control"
                                        id="password"
                                        placeholder='password'
                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>
                                <button className="signup-page-btn w-100 mb-5" type="button" onClick={addUser}>
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