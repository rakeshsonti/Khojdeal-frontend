# Data Parsing App

## Introduction:

This is simple data parsing app whoose take json data from employee and parse thoose data and store in database , when stack holder login using valid email and password he get back all important info related to employee, In this application stack holder have a option to get email from application if stack holder click on get email button stack holder get back all employee data as a email.

## Modules:

**There are various modules in this application**

### Login Module:

In login module stack holder put email and password and login , if email and password is wrong it will throw an error otherwise stack holder reach to the home page.

### Signup Module:

In Signup module stack holder put name, email and password, email should be unique other wise it will throw an error . Once Stack holder successfully signup it will nove to the login page where stack holder can login.

### EmployeeForm Module:

This module don't require authentication, any one with the link can fill this form. This form for survey purpose. Once the employee fill the form employee data will be saved into the database that would be later on analyed by stack holder.
In EmployeeForm module we have following field.
Emp Id,Name,DOJ,Mobile Number,Status, State, City,Added_on,Updated_on,User Status,Reason for Rejection,Upload Source, and submit button for submitting the form.

### Home Module:

Home module is authenticated means without authentication no one can come to the home page. This module for stack holder, stack holder can come and analyse the employye data on home module. In Home module the is a button on which click stack holder can see data of employee that was added,updated and deletd on various date.
There is option to get email . So stack holder can click and get email button and get all data on email.

## Tools and teachnology:

-  ReactJS (16+).
-  MongoDB.
-  NodeJS.

## How to run locally

-  open new window in vscode and clone the following git repo.
-  > git clone https://github.com/rambhajansonti/Khojdeal-frontend
-  open Khojdeal-frontend folder.
-  run following command on terminal.
-  > npm install
-  above command install all dependency locally, now start tha application using following command.
-  > npm start
-  after some time you can see application has started in new tab.
-  play with your application , make sure you started backend application.

## Project Link

[project link](https://github.com/rambhajansonti/Khojdeal-frontend).
