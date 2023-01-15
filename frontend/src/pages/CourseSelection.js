import Navbar from '../components/Navbar'
import Course from '../components/Course'
import './global.css';
import { useNavigate } from 'react-router-dom';

function CourseSelection() {
    const navigate = useNavigate();
    return (
        <div className="Course-page">
            <Navbar />
            <h1 className="Subtitle">Course Selection</h1>
            <div className="Courses">
                <Course name={"COMPSCI 2GA3"}/>
                <Course name={"COMPSCI 2ME3"} onClick={()=>{navigate('/compsci2me3')}}/>
                <Course name={"COMPSCI 2LC3"}/>
                <Course name={"COMPSCI 2C03"}/>
                <Course name={"MEDIAART 1A03"}/>
            </div>
        </div>
    );
}

  export default CourseSelection;