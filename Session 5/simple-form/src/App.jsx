import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submit
  const handleSubmit = (rahul) => {
    rahul.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(priyanshu) => {
            console.log(priyanshu.target.value);
            setName(priyanshu.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          onChange={(hemil) => {
            setEmail(hemil.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h4>Form Submitted</h4>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </>
  );
}

export default App;
