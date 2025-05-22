import React, { useEffect } from "react";

const CustomerPanel = () => {
  useEffect(() => {
    return () => {
      console.log("Customer Panel component unmounted");
    };
  });

  return <div>Customer Panel</div>;
};

export default CustomerPanel;
