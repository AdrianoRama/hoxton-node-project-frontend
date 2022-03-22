import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='app__login'>
            <div className="app__login-container">
                <div className="app__login-log">
                    <form action="">
                        <div className="app__form">
                            <h1 className="headtext__cormorant">Log In</h1>
                            <input type="text" name='username' placeholder='username' required />
                            <input type="password" name='password' placeholder='password' required />
                            <button type='submit'>SUBMIT</button>
                        </div>
                    </form>
                </div>
                <div className="app__login-sign">
                    <form action="">
                        <div className="app__form">
                            <h1 className="headtext__cormorant">Sign Up</h1>
                            <input type="text" name='username' placeholder='username' required />
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
