import { useEffect } from "react";
import { Button } from "reactstrap";
import "./Home.css";
function Home(props) {
   useEffect(() => {
      fetch("http://localhost:9999/allUser", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      }).then((r) => {
         console.log("result:", r);
      });
   }, []);
   const logout = () => {
      fetch("http://localhost:9999/logout", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      }).then((r) => {
         if (r.ok) {
            props.active("login");
         }
      });
   };
   return (
      <div className="container">
         <div className="subcontainer">
            <h3>Stack holder Name :ABC </h3>
            <Button
               onClick={() => {
                  logout();
               }}
               color="danger"
               outline
            >
               logout
            </Button>
         </div>
      </div>
   );
}
export default Home;
