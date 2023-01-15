import React from "react";

function Course(props) {
    return (
      <div className="Course-box">
        <p className="Course-name">{ props.name }</p>
      </div>
    )
  }
  
  export default Course;