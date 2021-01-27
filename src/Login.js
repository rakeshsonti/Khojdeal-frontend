import { useState } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
function Login(props) {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const LoginHandler = (evt) => {
      evt.preventDefault(false);
      // console.log(email, password);
      fetch("http://localhost:9999/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
            password,
         }),
         credentials: "include",
      }).then((r) => {
         console.log(r);
         if (r.ok) {
            props.active("home");
         }
      });
   };
   return (
      <>
         <Form className="formContainer" onSubmit={LoginHandler}>
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
                  log-in
               </Button>
            </FormGroup>
            <div className="group">
               <FormGroup>
                  <Button
                     color="primary"
                     size="sm"
                     onClick={() => {
                        props.active("signup");
                     }}
                     style={{ marginRight: "5px" }}
                  >
                     sign-up
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
export default Login;
