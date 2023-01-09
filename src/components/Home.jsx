import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return <>
  
  <div className='home'>
    <img className='homeimage' src="https://img.freepik.com/premium-vector/flat-illustration-job-search-recruitment-workgroup-freelance-web-graphic-design-hiring-recruitment-concept-web-page-banner-presentation-job-interview-recruitment-agency_126608-829.jpg?w=826" alt="" />
  </div>

  <div className='btnContain'>
    <Link to="/freelancer">
    <button className='btn'>Freelancers</button>
    
    </Link>
    <Link to="/findjob">
    <button className='btn'>Post your job</button>
    
    </Link>
  </div>
  
  
  </>
}

export default Home