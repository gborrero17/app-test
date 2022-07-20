import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div>
     <Routes>
      <Route path ='/' element = {<Home />} />
      <Route path ='/SignUp' element = {<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
