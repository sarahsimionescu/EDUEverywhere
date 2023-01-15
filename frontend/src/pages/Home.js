import Navbar from '../components/Navbar.js'
import Course from '../components/Course.js'
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Course name="COMPSCI 2GA3" />
      </header>
      <Navbar />
    </div>
  );
}

export default Home;
