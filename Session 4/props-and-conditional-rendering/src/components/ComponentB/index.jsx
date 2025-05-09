import React from "react";
import ComponentE from "../ComponentE";
import ComponentF from "../ComponentF";

const ComponentB = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "5px",
        width: "fit-content",
        textAlign: "center",
        margin: "10px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
        fontSize: "20px",
      }}
    >
      Component B
      <ComponentE />
      <ComponentF />
    </div>
  );
};

export default ComponentB;
