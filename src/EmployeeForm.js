import { useState } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
function EmployeeForm(props) {
   const [id, setEmpId] = useState();
   const [name, setName] = useState();
   const [doj, setDoj] = useState();
   const [mobileNumber, setMobileNumber] = useState();
   const [status, setStatus] = useState();
   const [state, setState] = useState();
   const [city, setCity] = useState();
   const [addedOn, setAddedOn] = useState();
   const [updateOn, setUpdateOn] = useState();
   const [userStatus, setUserStatus] = useState();
   const [reason, setReason] = useState();
   const [source, setSource] = useState();
   const FormHandler = (evt) => {
      evt.preventDefault(false);
      // console.log(
      //    id,
      //    name,
      //    doj,
      //    mobileNumber,
      //    status,
      //    state,
      //    city,
      //    addedOn,
      //    updateOn,
      //    userStatus,
      //    reason,
      //    source
      // );
      const obj = {
         EMPID: id,
         EMPNAME: name,
         DOJ: doj,
         MOBILENO: mobileNumber,
         STATUS: status,
         STATE: state,
         CITY: city,
         ADDEDON: addedOn,
         UPDATEDON: updateOn,
         USERSTATUS: userStatus,
         REASON: reason,
         SOURCE: source,
      };
      console.log(obj);
      fetch("http://localhost:9999/saveData", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            obj,
         }),
         credentials: "include",
      }).then((r) => {
         if (r.ok) {
            console.log("success", r);
         } else {
            console.log("error:", r);
         }
      });
   };
   return (
      <>
         <h2>User Form</h2>
         <hr />
         <Form className="formContainer" onSubmit={FormHandler}>
            <FormGroup>
               <Label for="EmpId">Emp Id</Label>
               <Input
                  type="Number"
                  name="empId"
                  id="EmpId"
                  placeholder="Enter your Emp Id"
                  required
                  onChange={(evt) => {
                     setEmpId(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Name">Name</Label>
               <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Enter your Name"
                  required
                  onChange={(evt) => {
                     setName(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Date">DOJ</Label>
               <Input
                  type="date"
                  name="date"
                  id="Date"
                  placeholder="Today date"
                  onChange={(evt) => {
                     setDoj(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Name">Mobile Number</Label>
               <Input
                  type="MobileNumber"
                  name="mobile number"
                  id="MobileNumber"
                  placeholder="Enter your Mobile Number"
                  required
                  onChange={(evt) => {
                     setMobileNumber(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="status">Status</Label>
               <Input
                  type="text"
                  name="status"
                  id="status"
                  placeholder="Enter your status"
                  required
                  onChange={(evt) => {
                     setStatus(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="state">State</Label>
               <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter your state"
                  required
                  onChange={(evt) => {
                     setState(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="city">City</Label>
               <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter your city"
                  required
                  onChange={(evt) => {
                     setCity(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="DateAdded">Added_on</Label>
               <Input
                  type="date"
                  name="dateAdded"
                  id="DateAdded"
                  placeholder="Added date"
                  onChange={(evt) => {
                     setAddedOn(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="DateUpdated">Updated_on</Label>
               <Input
                  type="date"
                  name="dateUpdate"
                  id="DateUpdated"
                  placeholder="Update date"
                  required
                  onChange={(evt) => {
                     setUpdateOn(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="UserStatus">User Status</Label>
               <Input
                  type="text"
                  name="userstatus"
                  id="UserStatus"
                  placeholder="User Status"
                  required
                  onChange={(evt) => {
                     setUserStatus(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Rejection">Reason for Rejection</Label>
               <Input
                  type="text"
                  name="rejection"
                  id="Rejection"
                  placeholder="Reason for Rejection"
                  onChange={(evt) => {
                     setReason(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Source">Upload Source</Label>
               <Input
                  type="text"
                  name="source"
                  id="Source"
                  placeholder="Upload source"
                  required
                  onChange={(evt) => {
                     setSource(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Button color="primary" type="submit">
                  submit
               </Button>
            </FormGroup>
            <div className="group">
               <FormGroup>
                  <Button
                     color="primary"
                     size="sm"
                     style={{ marginRight: "5px" }}
                     onClick={() => {
                        props.active("signup");
                     }}
                  >
                     sign-up
                  </Button>
               </FormGroup>
               <FormGroup>
                  <Button
                     color="primary"
                     size="sm"
                     onClick={() => {
                        props.active("login");
                     }}
                  >
                     login
                  </Button>
               </FormGroup>
            </div>
         </Form>
      </>
   );
}
export default EmployeeForm;
