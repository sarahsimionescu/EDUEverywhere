import Navbar from '../components/Navbar.js'
import './global.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <div className='Page'>
            <Navbar showLogin={false} hideProfile={true}/>
            <div className='Main-field'>
                <form onSubmit={() => navigate('/courseselection')}>
                    <div className='Login-Screen'>
                        <h5>Username</h5>
                        <input
                            className='Login-Input'
                            type='text'
                            placeholder='Enter Username Here'
                        />
                        <h5>Password</h5>
                        <input
                            className='Login-Input'
                            type='password'
                            placeholder='Enter Password Here'
                        />
                    </div>
                    <button disabled={false}>Log-in</button>
                </form>
            </div>
        </div>
    );
}

  export default Login;