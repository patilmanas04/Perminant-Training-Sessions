import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import GreetingCard from "./components/GreetingCard";
import AdminPanel from "./components/AdminPanel";
import CustomerPanel from "./components/CustomerPanel";
import StudentDetails from "./components/StudentDetails";

function App() {
  const [names, setNames] = useState([
    "Jitendra",
    "Rahul",
    "Kirsh",
    "Tisha",
    "Isha",
    "Shreya",
    "Priyanshu",
  ]);

  const [userRole, setUserRole] = useState("user");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [details, setDetails] = useState([
    {
      name: "Manas Patil",
      age: 21,
      branch: "B. Tech. CSE",
      enrollmentNo: "202203103510235",
    },
    {
      name: "Jitendra Suthar",
      age: 21,
      branch: "B. Tech. CSE",
      enrollmentNo: "202203103510253",
    },
    {
      name: "Parin Shah",
      age: 21,
      branch: "B. Tech. CSE",
      enrollmentNo: "202203103510105",
    },
  ]);

  const changeUserRole = () => {
    if (userRole === "admin") {
      setUserRole("user");
    } else {
      setUserRole("admin");
    }
  };

  return (
    <>
      {/* <ComponentA /> */}
      {/* {names.map((name, index) => (
        <GreetingCard name={studentDetails.name} age={studentDetails.age} />
      ))} */}

      {userRole === "admin" ? <AdminPanel /> : <CustomerPanel />}
      {isLoggedIn ? "Welcome back!" : "Log in first."}

      <button onClick={changeUserRole}>
        Change User Role to {userRole === "admin" ? "User" : "Admin"}
      </button>

      {/* {details.map((studentDetail, index) => {
        return (
          <StudentDetails
            key={index}
            name={studentDetail.name}
            age={studentDetail.age}
            branch={studentDetail.branch}
            enrollmentNo={studentDetail.enrollmentNo}
          />
        );
      })} */}
    </>
  );
}

export default App;
