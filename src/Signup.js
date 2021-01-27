import { useState } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
function Signup(props) {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const SignupHandler = (evt) => {
      evt.preventDefault(false);
      console.log(name, email, password);
      fetch("http://localhost:9999/signup", {
         method: "POST",
         body: JSON.stringify({
            email,
            name,
            password,
         }),
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      }).then((r) => {
         if (r.ok) {
            props.active("login");
         }
         console.log(r);
      });
   };
   return (
      <>
         <Form className="formContainer" onSubmit={SignupHandler}>
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
               <Label for="Email">Email</Label>
               <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter your email"
                  required
                  onChange={(evt) => {
                     setEmail(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Password">Password</Label>
               <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Enter your password"
                  required
                  onChange={(evt) => {
                     setPassword(evt.target.value);
                  }}
               />
            </FormGroup>
            <FormGroup>
               <Button color="primary" type="submit">
                  sign-up
               </Button>
            </FormGroup>
            <div className="group">
               <FormGroup style={{ marginRight: "5px" }}>
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
               <FormGroup>
                  <Button
                     color="primary"
                     size="sm"
                     onClick={() => {
                        props.active("form");
                     }}
                  >
                     user form
                  </Button>
               </FormGroup>
            </div>
         </Form>
      </>
   );
}
export default Signup;
