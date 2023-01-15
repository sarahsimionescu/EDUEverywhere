import Navbar from '../components/Navbar.js'
import { useNavigate } from 'react-router-dom';
import './global.css';

function COMPSCI2ME3() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <h1 className="Subtitle">COMPSCI 2ME3</h1>
            <div className='me3'>
                <button className="Category">
                    <h3 className='Category-2'>Content</h3>
                    <ul className='Text'>
                        <li>Lecture Notes</li>
                        <li>Past Lecture Notes</li>
                        <li>Past Exam</li>
                        <li>Past Assignments</li>
                        <li>Exam Resources</li>
                        <li>...</li>
                    </ul>
                </button>
                <button className="Category">
                    <h3 className='Category-2'>Lectures</h3>
                    <ul className='Text'>
                        <li>Lecture 7</li>
                        <li>Lecture 6</li>
                        <li>Lecture 5</li>
                        <li>Lecture 4</li>
                        <li>Lecture 3</li>
                        <li>...</li>
                    </ul>
                </button>
                <button className="Category" onClick={()=>{navigate('/Assessments')}}>
                    <h3 className='Category-2'>Assessments</h3>
                    <ul className='Text'>
                        <li>Assignment 1 - 2023-01-18</li>
                        <li>Assignment 2 - 2023-01-18</li>
                        <li>Assignment 3 - 2023-01-18</li>
                        <li>Assignment 4 - 2023-01-18</li>
                        <li>Final Exam - 2023-04-30</li>
                        <li>...</li>
                        
                    </ul>
                </button>
            </div>
        </div>
    );
}

  export default COMPSCI2ME3;