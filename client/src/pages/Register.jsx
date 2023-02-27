import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  })
  const [err,setError] = useState(null)
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try{
        await axios.post("/auth/register", inputs)
        navigate("/login")
    }
    catch(err){
        setError(err.response.data);
    }
  } 
  
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='Type the username' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='Type the password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register