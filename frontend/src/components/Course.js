import React from "react";

function Course(props) {
    return (
      <button className="Course-box" onClick={props.onClick}>
        <h1 className="Course-name">{ props.name }</h1>
      </button>
    )
  }
  
  export default Course;