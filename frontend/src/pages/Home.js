import './global.css';

import Navbar from '../components/Navbar.js'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (

    <div className="Page">
      <Navbar showLogin={true}/>
      <div className="Main-field">
        <h1>Welcome to EDU Everywhere!</h1>
        <p>At EDU Everywhere, our goal is to globalize high-quality, accessible education through providing an all-in-one learning platform that leverages AI technology to eliminate language barriers.</p>
        <div>
          <button onClick={() => navigate('/login')}>Log-In</button>
        </div>
      </div>
      <div className='bg-home'></div>
    </div>
  );
}

export default Home;
