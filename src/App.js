import React from 'react';
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Homepage from './Pages/Home/Home'
import Docprofile from './Pages/DoctorProfile/DoctorProfile'
import PatientProfile from './Pages/PatientProfile/PatientProfile'
import Doc from './Pages/DoctorPage/Doctor'
import { BrowserRouter as Router, Route } from "react-router-dom";
 
export default class Routing extends  React.Component {
  render (){
    return(
    <Router>
      <div>
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/DoctorProfile" component={Docprofile} />
        <Route path="/PatientProfile" component={PatientProfile} />
        <Route path="/Doctor" component={Doc} />
      </div>
    </Router>
    )
  }
}

