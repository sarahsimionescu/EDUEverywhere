import Navbar from '../components/Navbar.js'
import React from "react";
import { useNavigate } from 'react-router-dom';
import './global.css';
import axios from 'axios';

function AfterUpload() {
    const navigate = useNavigate();
    return (
        <div >
            <Navbar />
            <div>
                <h1>Assignment 1</h1>
                <div>
                    <h2>Translated Document</h2>
                    <img src='https://preview.redd.it/sy8zszyfzwp81.jpg?width=640&crop=smart&auto=webp&s=d14fe5af1e4f6d57b1a9f9d9cbc4d9d7d9bf923f' />
                    <button onClick={()=>{navigate('/aftersubmission')}}>Submit</button>
                </div>
            </div>
        </div>
      );
}

  export default AfterUpload;