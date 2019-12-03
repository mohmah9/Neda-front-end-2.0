import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";
import * as doctorpage_api from "../../Redux/DoctorPage/DoctorPage_action";

class MedicalHistory extends React.Component {
    constructor(props) {
        super(props);
        // let neww = true;
        this.state = {
            content: "",
            neww:true
        }
    }
    componentWillMount() {
        this.props.medicalhistory_load(this.props.Appointment.patient)
    }
    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };
    handlenew() {
        // console.log("newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
        if(this.state.neww){
            this.setState({ neww:false })
        }
        
    };
    render() {
        console.log(this.props.doctor)
        console.log(this.props.medichistory)
        console.log(this.props.Appointment.patient)
        return (
            <div style={{ paddingLeft: "2%" }}>
                <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
                    {
                        this.props.medichistory.length > 0 ?
                            this.props.medichistory.map(history =>
                                history.doctor.split("/")[4] === this.props.doctor[0].medical_system_number ? 
                                <div>
                                    {this.handlenew()}
                                    <Paper  style = {{ background: "linear-gradient(to top, #8e9eab, #eef2f3)"}}>
                                        <p style={{ textAlign: "right", direction: "rtl", paddingRight:"7.5%" }}>
                                            تاریخ :{history.date}
                                            <br />
                                            متن توضیحات :{history.content}
                                            <br />
                                            </p>
                                            <div style={{textAlign:"center"}}>
                                            <TextField id="outlined-email-input" value={this.state.content} onChange={this.handleChanger.bind(this)} style={{ width: "85%" }} fullWidth className="usertext" label="تغییرات" type="Name" name="content" margin="normal" variant="outlined" />
                                            </div>
                                            <br />
                                        <Button variant="contained" color="primary" onClick={() => this.props.edit_medicalhistory([history, this.state.content])} style={{ background: "linear-gradient(60deg, #2196f3 30%, #21cbf3 90%)" }} fullWidth>
                                            تغییر
                                        </Button>
                                    </Paper >
                                </div> :
                                    <div>
                                        <Paper  style = {{ background: "linear-gradient(to top, #8e9eab, #eef2f3)"}}>
                                            <p style={{ textAlign: "right", direction: "rtl" }}>
                                                زمان :{history.date}
                                                <br />
                                                متن توضیحات :{history.content}
                                                <br />
                                            </p>
                                        </Paper>
                                    </div>)
                            : 
                            <Paper  style = {{ background: "linear-gradient(to top, #8e9eab, #eef2f3)"}}>
                                <p style={{ textAlign: "center", direction: "rtl" }}>
                                    <TextField id="outlined-email-input" value={this.state.content} onChange={this.handleChanger.bind(this)} style={{ width: "85%" }} fullWidth className="usertext" label="سابقه پزشکی" type="Name" name="content" margin="normal" variant="outlined" />
                                    <br />
                                </p>
                                <Button variant="contained" color="primary" onClick={() => this.props.add_medicalhistory([this.props.Appointment.patient, this.state.content])} style={{ background: "linear-gradient(60deg, #2196f3 30%, #21cbf3 90%)" }} fullWidth>
                                    ایجاد سابقه</Button>
                            </Paper>
                    }
                    {/* {
                        this.state.neww? <div>
                            <Paper  style = {{ background: "linear-gradient(to top, #8e9eab, #eef2f3)"}}>
                                <p style={{ textAlign: "center", direction: "rtl" }}>
                                    <TextField id="outlined-email-input" value={this.state.content} onChange={this.handleChanger.bind(this)} style={{ width: "85%" }} fullWidth className="usertext" label="سابقه پزشکی" type="Name" name="content" margin="normal" variant="outlined" />
                                    <br />
                                </p>
                                <Button variant="contained" color="primary" onClick={() => this.props.add_medicalhistory([this.props.Appointment.patient ,this.state.content])} style={{ background: "linear-gradient(60deg, #2196f3 30%, #21cbf3 90%)" }} fullWidth>
                                    ایجاد سابقه</Button>
                            </Paper>
                        </div>
                        :null
                    } */}
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    doctor: state.DoctorPage_reducer.doctorPage_load_result,
    medichistory: state.PatientProfile_reducer.medicalHistory_result
});

const mapDispatchToProps = dispatch => ({
    medicalhistory_load: (p_id) => dispatch(patientProfile_api.patientProfile_medicalhistory(p_id)),
    edit_medicalhistory: (url_content) => dispatch(doctorpage_api.edit_medicalhistory(url_content)),
    add_medicalhistory: (url_content) => dispatch(doctorpage_api.add_medicalhistory(url_content))
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalHistory)