import React from "react";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", emailRef.current.value);
    console.log("Password: ", passwordRef.current.value);
  };

  return (
    <div>
      <h1>Welcome to the Login page</h1>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder="Your Email" />
        <br />
        <input ref={passwordRef} type="text" placeholder="Your Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
