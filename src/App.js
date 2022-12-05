import React, { useContext } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Landingpage from "./pages/Landingpage"
import Features from "./pages/Features"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }else {
      return children
    }
  }
  return (
    <div className="bg-[#929292]">
      <BrowserRouter>        
        <Routes>
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/register'  element={<Register />} />
          <Route path='/login'  element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
