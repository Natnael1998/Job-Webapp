import { async } from "@firebase/util";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import {Link} from "react-router-dom"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
const Freelancer = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const {user} = UserAuth()
    const getdata =  () => {
      setLoading(true)
      getDocs(collection(db, "jobs"))
      .then((res) => {
        setData(res.docs.map((i) => { return i.data()}))
    setLoading(false)
        
      })
      console.log(data)
      
      
  
      
    };
    useEffect(() => {getdata()},[])
  
    return <div className="workContain">
        <h3 id="w">Workers</h3>
        <div className="work">

          {loading ? <AiOutlineLoading3Quarters className="load"  size={50}/> : null}
        {
        
        data.map((i)=> {
            
            if(i.name==""){
              return null
            } else{
              return<div className="na">
              <h1>Full name: {i.name}</h1>
              <h1>Skill: {i.skill}</h1>
              <h1>Hourly payment :{i.price}$</h1>
              <h2>Email: {i.email}</h2>
              <Link to={`/chat/${i.email}`}>
              <button className="button">Hire</button>
    
              </Link>
              
                </div>
              
            }
              
            
             
          })
          
          
          }

        
      </div>
        
  </div>
}

export default Freelancer