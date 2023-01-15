import Navbar from '../components/Navbar.js'
import './global.css';

function Assessments() {
    return (
        <div className='Page'>
            <Navbar />
            <div className='Assessments-page'>
                <h1 className="Subtitle">Assessments</h1>
                <div className='Assessments'>
                    <div className='Assessments-2'>
                        <h4>Title</h4>
                        <ul>
                            <li> <a href="/Assignment1">Assignment 1 </a> </li>
                            <li>Assignment 2</li>
                            <li>Assignment 3</li>
                            <li>Assignment 4</li>
                            <li>Final Exam</li>
                        </ul>
                    </div>
                    <div className='Assessments-2'>
                        <h4>Due Date</h4>
                        <ul>
                            <li>Jan 17, 2023 11:59PM</li>
                            <li>Feb 28, 2023 11:59PM</li>
                            <li>Mar 20, 2023 11:59PM</li>
                            <li>Apr 14, 2023 11:59PM</li>
                            <li>Apr 30, 2023 8:00PM</li>
                        </ul>
                    </div>
                    <div className='Assessments-2'>
                        <h4>Submission Status</h4>
                        <ul>
                            <li>Graded</li>
                            <li>Submitted</li>
                            <li>Unsubmitted</li>
                            <li>Unsubmitted</li>
                            <li>Incompleted</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

  export default Assessments;