import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import EmployeeForm from "./EmployeeForm";
import Home from "./Home";
import { useState, useEffect } from "react";
function App() {
   const [activePage, setActivePage] = useState("login");
   useEffect(() => {
      getUserInfo();
   }, []);
   const getUserInfo = () => {
      fetch("http://localhost:9999/userinfo", { credentials: "include" }).then(
         (r) => {
            console.log(r);
            if (r.ok) {
               setActivePage("home");
            } else {
               setActivePage("login");
            }
         }
      );
   };
   return (
      <div className="App">
         {activePage === "login" ? (
            <Login active={setActivePage} userinfo={getUserInfo} />
         ) : null}
         {activePage === "signup" ? (
            <Signup active={setActivePage} userinfo={getUserInfo} />
         ) : null}
         {activePage === "form" ? (
            <EmployeeForm active={setActivePage} />
         ) : null}
         {activePage === "home" ? <Home active={setActivePage} /> : null}
      </div>
   );
}

export default App;
