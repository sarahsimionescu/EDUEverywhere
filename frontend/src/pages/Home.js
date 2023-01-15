import Navbar from '../components/Navbar.js'
import Course from '../components/Course.js'
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>
          Course Selection
        </h1>
      </header>
      <Navbar />
      <Course name="COMPSCI 2GA3" />
    </div>
  );
}

export default Home;
