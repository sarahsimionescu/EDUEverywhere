import Navbar from '../components/Navbar.js'
import './global.css';
import { useNavigate } from 'react-router-dom';

function AfterSubmission() {
    const navigate = useNavigate();
    return (
        <div >
            <Navbar />
            <div className='Submission'>
                <h1>Your Submission was Successful!</h1>
                <button onClick={()=>{navigate('/compsci2me3')} }>Return to Course Homepage</button>
            </div>
            <div className='bg-AS'></div>
        </div>
    );
}

  export default AfterSubmission;