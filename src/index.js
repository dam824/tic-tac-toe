import React from 'react';
import ReactDOM from 'react-dom';


//stylesheet
import './index.css';


//component file
import { BrowserRouter ,Routes, Route,  } from "react-router-dom"
import Game from './components/Game'
import Navbar from './components/Navbar'
import Form from  './pages/Form'











ReactDOM.render(
  <React.StrictMode>



 <BrowserRouter>

  

  <Navbar />

  <Routes>
        
         <Route path="/Game" element ={<Game/>} />
         
         <Route  path="/pages/Form" element={<Form />} /> 
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);