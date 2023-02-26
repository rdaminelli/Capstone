import React from 'react'
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='Type the username'/>
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='Type the password'/>
        <button>Register</button>
        <p>error</p>
        <span>Have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register