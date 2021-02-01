import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import "./Home.css";
function Home(props) {
   const [totalActive, setTotolActive] = useState(0);
   const [userCount, setUserCount] = useState([]);
   const [allUserData, setAllUserData] = useState();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const emailHandler = () => {
      console.log("email: ", email);
      fetch("http://localhost:9999/sendEmail", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: email,
            name: name,
         }),
         credentials: "include",
      }).then((r) => {
         console.log("email", r);
      });
   };
   const allUserDataHandler = (date) => {
      fetch("http://localhost:9999/allUser", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            date: date,
         }),
         credentials: "include",
      })
         .then((r) => r.json())
         .then((r) => {
            setAllUserData([...r.user]);
         });
   };
   useEffect(() => {
      fetch("http://localhost:9999/getName", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      })
         .then((r) => r.json())
         .then((r) => {
            console.log("name", r.user.name);
            setName(r.user.name);
            setEmail(r.user.email);
         });
      fetch("http://localhost:9999/allActiveUser", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      })
         .then((r) => r.json())
         .then((r) => {
            setTotolActive(r.success);
         });
      fetch("http://localhost:9999/allUserCount", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      })
         .then((r) => r.json())
         .then((r) => {
            console.log("result1:", r.success);
            setUserCount([...r.success]);
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
      <>
         <div className="container">
            <div className="subcontainer">
               <h3>Stack holder Name :{name} </h3>
               <Button color="primary" onClick={emailHandler}>
                  Get email
               </Button>
               <Button onClick={logout} color="danger" outline>
                  logout
               </Button>
            </div>
            <h4>Total Active Users in the system : {totalActive}</h4>
            <Table>
               <thead>
                  <tr>
                     <th>Date of Parsing</th>
                     <th>User Added</th>
                     <th>Users Updated</th>
                     <th>Users Rejected</th>
                     <th>Total Users Parsed</th>
                     <th>Api link</th>
                  </tr>
               </thead>
               <tbody>
                  {userCount.map((oneUser, index) => {
                     return (
                        <tr key={`${index}${oneUser}`}>
                           <td>{oneUser[0]}</td>
                           <td>{oneUser[2]}</td>
                           <td>{oneUser[3]}</td>
                           <td>{oneUser[4]}</td>
                           <td>{oneUser[1]}</td>
                           <td>
                              <Button
                                 onClick={() => {
                                    allUserDataHandler(oneUser[0]);
                                 }}
                              >
                                 view link
                              </Button>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </Table>
            <br />
            <hr />
            {allUserData ? (
               <Table dark>
                  <thead>
                     <tr>
                        <th>User_id</th>
                        <th>Empid</th>
                        <th>Emp Name</th>
                        <th>DOJ</th>
                        <th>Mobile No</th>
                        <th>Status</th>
                        <th>State</th>
                        <th>Added_on</th>
                        <th>Upddate_on</th>
                        <th>User Status</th>
                        <th>Reason for Rejection</th>
                        <th>Upload Source</th>
                     </tr>
                  </thead>
                  <tbody>
                     {allUserData.map((oneUser, index) => {
                        return (
                           <tr key={`${index}${oneUser}`}>
                              <td>{index + 1}</td>
                              <td>{oneUser.EMPID}</td>
                              <td>{oneUser.EMPNAME}</td>
                              <td>{oneUser.DOJ}</td>
                              <td>{oneUser.MOBILENO}</td>
                              <td>{oneUser.STATUS}</td>
                              <td>{oneUser.STATE}</td>
                              <td>{oneUser.ADDEDON}</td>
                              <td>{oneUser.UPDATEDON}</td>
                              <td>{oneUser.USERSTATUS}</td>
                              <td>{oneUser.REASON}</td>
                              <td>{oneUser.SOURCE}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
            ) : null}
         </div>
      </>
   );
}
export default Home;
