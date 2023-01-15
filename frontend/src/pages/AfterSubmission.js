import Navbar from '../components/Navbar.js'
import './global.css';
import { useNavigate } from 'react-router-dom';

function AfterSubmission() {
    const navigate = useNavigate();
    return (
        <div >
            <Navbar />
            <h1>Your Submission was Successful!</h1>
            <button onClick={()=>{navigate('/compsci2me3')} }>Return to Course Homepage</button>
        </div>
    );
}

  export default AfterSubmission;