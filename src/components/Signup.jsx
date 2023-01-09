import React from 'react'
import  { useState } from 'react'
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { signUp } = UserAuth();
    const navigate = useNavigate()
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
          await signUp(email, password);
          navigate("/")
        } catch (error) {
          console.log(error);
        }
    }
  return <div className="formContainer">
 
<form className="form" onSubmit={handleSubmit}>
  <h3>Sign Up</h3>
  
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

export default Signup