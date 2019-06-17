import React from 'react';
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Homepage from './Pages/Home/Home'
import Docprofile from './Pages/DoctorProfile/DoctorProfile'
import Searched from './Pages/Home/Searched'
import { BrowserRouter as Router, Route} from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Homepage" component={Homepage} />
            <Route path="/DoctorProfile" component={Docprofile} />
            <Route path="/Searched" component={Searched} />
        </div>
    </Router>
)
export default routing
