import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login({ setUser, user, users }) {
    const [error, setError] = useState()
    const [emailError, setEmailError] = useState('')

    const navigate = useNavigate()

    function logIn(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                }
            })
    }

    function signUp(e) {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const userEmail = users.map(user => user.email)
        const emailInUse = 'Email is in use'
        console.log(userEmail)
        if (!userEmail.includes(email)) {

            fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, email: email, password: password })
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert('Oops, something went wrong.')
                    } else {
                        localStorage.setItem('token', data.token)
                        logIn(e)
                    }
                })
        }
        else setEmailError(emailInUse)
    }

    if (user) {
        navigate(`/soho`)
    }

    if (error) {
        return (
            <div className='app__login'>
                <div className="app__login-container">
                    <div className="app__login-log">
                        <form onSubmit={logIn} action="">
                            <div className="app__form">
                                <h1 className="headtext__cormorant">Log In</h1>
                                <p>{error}</p>
                                <input type="text" name='email' placeholder='email' required />
                                <input type="password" name='password' placeholder='password' required />
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                    <div className="app__login-sign">
                        <form action="" onSubmit={signUp}>
                            <div className="app__form">
                                <h1 className="headtext__cormorant">Sign Up</h1>
                                <input type="text" name='name' placeholder='name' required />
                                <input type="email" name='email' placeholder='email' required />
                                <input type="password" name='password' placeholder='password' required />
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else if (emailError) {
        return (
            <div className='app__login'>
                <div className="app__login-container">
                    <div className="app__login-log">
                        <form onSubmit={logIn} action="">
                            <div className="app__form">
                                <h1 className="headtext__cormorant">Log In</h1>
                                <input type="text" name='email' placeholder='email' required />
                                <input type="password" name='password' placeholder='password' required />
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                    <div className="app__login-sign">
                        <form action="" onSubmit={signUp}>
                            <div className="app__form">
                                <h1 className="headtext__cormorant">Sign Up</h1>
                                <p>Email in use</p>
                                <input type="text" name='name' placeholder='name' required />
                                <input type="email" name='email' placeholder='email' required />
                                <input type="password" name='password' placeholder='password' required />
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    else return (
        <div className='app__login'>
            <div className="app__login-container">
                <div className="app__login-log">
                    <form onSubmit={logIn} action="">
                        <div className="app__form">
                            <h1 className="headtext__cormorant">Log In</h1>
                            <input type="text" name='email' placeholder='email' required />
                            <input type="password" name='password' placeholder='password' required />
                            <button type='submit'>SUBMIT</button>
                        </div>
                    </form>
                </div>
                <div className="app__login-sign">
                    <form action="" onSubmit={signUp}>
                        <div className="app__form">
                            <h1 className="headtext__cormorant">Sign Up</h1>
                            <input type="text" name='name' placeholder='name' required />
                            <input type="email" name='email' placeholder='email' required />
                            <input type="password" name='password' placeholder='password' required />
                            <button type='submit'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

