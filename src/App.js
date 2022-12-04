import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Landingpage from "./pages/Landingpage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="bg-[#929292]">
      <BrowserRouter>        
        <Routes>
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
