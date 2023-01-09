import React from 'react'
import {Link} from "react-router-dom"
import { UserAuth } from '../context/AuthContext'
const Navbar = () => {
    const {user,logOut} = UserAuth()

  return <>
  <nav className='nav'>
  <div>
      <Link className='bb' to="/">
  <h3 className='navLogo'>&lt; NATI &#47;&gt;</h3>
      
      
      </Link>
  </div>
  <ul>
    {user?.email ? (
        <>
         
      <li onClick={logOut} className='ss'>Log Out</li>
      
      
      <Link className='bb' to="/account">
      <li>{user?.email.slice(0, user?.email.lastIndexOf("@"))}</li>
      </Link>
        </>
   

  ) : (
    <>
    <Link className='bb' to="/signin">
<li className='ss'>Sign In</li>
</Link>

<Link className='bb' to="/signup">
<li>Sign Up</li>
</Link>
    </>


  )}
      
      
  </ul>
</nav>
</>
}

export default Navbar