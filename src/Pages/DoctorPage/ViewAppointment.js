import React from 'react';
import Appointment from './Appointments';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";


class ViewAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.load_all_appointments(this.props.Doctor.medical_system_number);
    }

    render() {
        return (
            <div>
                {this.props.timeresult.length >= 1 ?
                    <div>
                        {this.props.timeresult.map(time => time.has_reserved !== false & time.visited === false
                            ? <Appointment Appointment={time} /> : null)}
                    </div>
                    : <CircularProgress  color="primary" />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    timeresult: state.DoctorPage_reducer.timeresult
});

const mapDispatchToProps = dispatch => ({
    load_all_appointments: (medical_number) => dispatch(doctorPage_api.load_all_appointments(medical_number))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewAppointment);
