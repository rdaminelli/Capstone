import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
// import axios from "axios"
import { AuthContext } from '../context/authContext'


const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })
  const [err,setError] = useState(null)
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    try{
        await login(inputs)
        navigate("/")
    }
    catch(err){
        setError(err.response.data);
    }
  } 
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder='Type the username' name="username" onChange={handleChange}/>
        <input required type="password" placeholder='Type the password' name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>No account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
