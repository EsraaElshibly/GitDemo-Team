import "./App.css";
import Header from "./components/navbar/navbar";
import React from "react";
import Users from './components/users/users'
import Usersfunctional from './components/users/usersFunctional'
import AddUserForm from './components/form/form'
function App() {
  return (
    <>
 
     {/* <button className="btn btn-primary btn-sm">click me</button> */}
      <Header/>
      <div className="container">

      <AddUserForm/>

      </div>
    


       {/* <Usersfunctional/> */}


      {/* <Users/> */}
    </>
  );
}

export default App;
