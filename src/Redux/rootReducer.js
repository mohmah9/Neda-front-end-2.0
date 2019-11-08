import {combineReducers} from 'redux'
import {Login_reducer} from "./Login/Login_reducer"
import {Homepage_reducer} from "./Homepage/Homepage_reducer"
import {Signup_reducer} from "./Signup/Signup_reducer"
import {Viewinfo_reducer} from "./Home_viewinfo/viewinfo_reducer"
import {PatientProfile_reducer} from "./PatientProfile/PatientProfile_reducer"
import {DoctorPage_reducer} from "./DoctorPage/DoctorPage_reducer"
import {DoctorProfile_reducer} from "./DoctorProfile/DoctorProfile_reducer"
import {Rate_reducer} from "./Rate/Rate_reducer"

const rootReducer = combineReducers({
    Login_reducer,
    Homepage_reducer,
    Signup_reducer,
    Viewinfo_reducer,
    PatientProfile_reducer,
    DoctorPage_reducer,
    DoctorProfile_reducer,
    Rate_reducer
})

export default rootReducer;
