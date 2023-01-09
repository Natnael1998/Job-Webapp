import {Routes, Route } from "react-router-dom";
import Freelancer from "./components/Freelancer";
import Findjob from "./components/Findjob";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import {AuthContextProvider} from "./context/AuthContext"
import About from "./components/About";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Chat from "./components/Chat";
function App() {
  

  
  return <AuthContextProvider>

  <Navbar />
  <Routes>
    
    <Route path="/" element={<Home />} />
  
    <Route path="/findjob" element={
    <ProtectedRoute >
 <Findjob />

    </ProtectedRoute>
   
    } />
    <Route path="/freelancer" element={<Freelancer />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/account" element={<Account />} />
    <Route path="/chat" element={<Chat />} >
      <Route path="/chat:id"/>
    </Route>
    
  
        
  
  
        
  
    
    </Routes>
  
  
  </AuthContextProvider>
 
    
      
 
}

export default App;
