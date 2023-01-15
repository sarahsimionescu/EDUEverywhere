import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import CourseSelection from './pages/CourseSelection'
import COMPSCI2ME3 from './pages/COMPSCI2ME3'
import Assessments from './pages/Assessments'
import Assignment1 from './pages/Assignment1'
import AfterUpload from './pages/AfterUpload'
import AfterSubmission from './pages/AfterSubmission'
import Error404 from './pages/Error404'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div  >
      <br />
      <Routes>
        <Route path = "/" exact element={<Home />} />
        <Route path = "/Login" element={<Login />} />
        <Route path = "/CourseSelection" element={<CourseSelection />} />
        <Route path = "/COMPSCI2ME3" element={<COMPSCI2ME3 />} />
        <Route path = "/Assessments" element={<Assessments />} />
        <Route path = '/Assignment1' element={<Assignment1 />} />
        <Route path = '/AfterUpload' element={<AfterUpload />} />
        <Route path = '/AfterSubmission' element={<AfterSubmission />} />
        <Route path = '*' element={<Error404 />} />
      </Routes>
    </div> 
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
