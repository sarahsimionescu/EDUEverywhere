import Navbar from '../components/Navbar.js'
import './global.css';
import { useNavigate } from 'react-router-dom';

function Error404() {
    const navigate = useNavigate();
    return (
        <div >
            <Navbar />
            <h1>Sorry, this page was not found!</h1>
            <button onClick={()=>{navigate('/')}}>Return to home</button>
        </div>
    );
}

  export default Error404;