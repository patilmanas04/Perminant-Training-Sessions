import React from "react";
import ComponentB from "../ComponentB";
import ComponentC from "../ComponentC";
import ComponentD from "../ComponentD";

const ComponentA = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "5px",
        width: "fit-content",
        textAlign: "center",
        margin: "10px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
        fontSize: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Component A
      <ComponentB />
      <ComponentC />
      <ComponentD />
    </div>
  );
};

export default ComponentA;
