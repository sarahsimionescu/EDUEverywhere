import Navbar from '../components/Navbar.js'
import React from "react";
import { useNavigate } from 'react-router-dom';
import './global.css';
import axios from 'axios';

function Assignment1() {
    const navigate = useNavigate();
    const [image, setImage] = React.useState('')
    function handleImage(event){
        console.log(event.target.files)
        setImage(event.target.files[0])
    }

    function handleAPI(event){
        const formData = new FormData()
        formData.append('image', image)
        axios.post('url', formData).then((res)=>{console.log(res)})
        navigate('/afterupload')
    }

    return (
        <div >
            <Navbar />
            <h1 className="Subtitle">Assignment 1</h1>
            <form onSubmit={handleAPI}>
                <div className="Form">
                    <h1 className='File-upload'>Please select the language of the file you are uploading</h1>
                    <select>
                        <option selected value="korean">Korean</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="hindi">Hindi</option>
                        <option value="hindi">English</option>
                    </select>
                
                    
                    <h1 className='File-upload'>Please select the language you wish to translate the file to</h1>
                    <select className='bot-option'>
                        <option value="korean">Korean</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="hindi">Hindi</option>
                        <option selected value="hindi">English</option>
                    </select>
                    <div >
                        <input nameClass="Upload" type="file" size="60" name="file" onChange={handleImage} />
                        <div>
                            <button disabled={false} className="Translate-btn">Translate</button>
                        </div>
                        <div className='bg-a1'></div>
                    </div>
                </div>
            </form>
        </div>
      );
}

  export default Assignment1;