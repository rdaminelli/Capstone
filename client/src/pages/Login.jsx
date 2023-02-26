import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder='Type the username'/>
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='Type the password'/>
        <button>Login</button>
        <p>error</p>
        <span>No account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
