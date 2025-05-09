import React from "react";

const StudentDetails = (props) => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.branch}</p>
        <p>{props.enrollmentNo}</p>
      </div>
    </>
  );
};

export default StudentDetails;
