import React, { useEffect } from "react";

const AdminPanel = () => {
  useEffect(() => {
    return () => {
      console.log("Admin Panel component unmounted");
    };
  });

  return <div>Admin Panel</div>;
};

export default AdminPanel;
