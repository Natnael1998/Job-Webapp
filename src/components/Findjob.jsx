import { async } from "@firebase/util";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Findjob = () => {
    const [names, setNames] = useState("");
  const [skill, setSkill] = useState("");
  const [price, setPrice] = useState("");
  const {user} = UserAuth()
  const navigate = useNavigate()
    
 
  
  const addData = async (e) => {
    e.preventDefault();
    if (names == "") {
      alert("you forgeted a value");
    } else {
      await setDoc(doc(db, "jobs", user?.email), {
        name: names,

        skill: skill,
        price: price,
        email:user?.email
      })
      
      
      ;
    }
    setNames("")
    setSkill("")
    setPrice("")
    navigate("/freelancer")

  };
  return <div className="formContainer">
    <h3>Post job to work</h3>
  <form className="form" onSubmit={addData}>
    <h3>Provide your Info</h3>
    
    <input
      value={names}
      onChange={(e) => setNames(e.target.value)}
      placeholder="name"
    ></input>
    <input
      value={skill}
      onChange={(e) => setSkill(e.target.value)}
      placeholder="Enter your skill for job"
    ></input>
    <input
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      placeholder="Enter your price"
    ></input>
    <button>submit</button>
  </form>
  </div>
}

export default Findjob