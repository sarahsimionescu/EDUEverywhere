import Navbar from '../components/Navbar.js'
import React from "react";
import { useNavigate } from 'react-router-dom';
import './global.css';
import axios from 'axios';
import page from '../images/out.jpg'

function AfterUpload() {
    const navigate = useNavigate();
    return (
        <div >
            <Navbar />
            <div>
                <h1 className="Subtitle">Assignment 1</h1>
                <div>
                    <div className='Aft-upload'>
                        <img className='Doc' src={page} />
                        <h2>Translated Document</h2>
                    </div>
                    <button className="submit-btn" onClick={()=>{navigate('/aftersubmission')}}>Submit</button>
                    <div className='bg-AU'></div>
                    <div className='bg-AU2'></div>
                </div>
            </div>
        </div>
      );
}

  export default AfterUpload;