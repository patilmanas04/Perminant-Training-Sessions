import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
