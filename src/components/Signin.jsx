import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Signin = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const { logIn } = UserAuth();
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        setError("")
        e.preventDefault();
    setError("")
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }

    }
  return <div className="formContainer">
  {error ? <p className='err'>{error.slice(22,-2)}</p> : null }
 
<form className="form" onSubmit={handleSubmit}>
  <h3>Sign In</h3>
  
  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
  ></input>
  <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
  ></input>
  
  <button>submit</button>
</form>
</div>
}

export default Signin