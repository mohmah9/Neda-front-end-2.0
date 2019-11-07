import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";

class MedicalHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.props.medicalhistory_load(this.props.Patient[0].url.split("/")[4])
    }
    render() {
        return (
            <div>
                <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
                    {
                        this.props.medichistory != ""? this.props.medichistory.map(history => <div>
                            <Paper>
                            <p style={{textAlign:"center" , direction:"rtl"}}>
                                زمان :{history.date}
                                <br />
                                متن توضیحات :{history.content}
                                <br />
                            </p>
                            </Paper>
                        </div>)
                        :null
                    }
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    Patient: state.PatientProfile_reducer.patientProfile_load_result,
    medichistory:state.PatientProfile_reducer.medicalHistory_result
});

const mapDispatchToProps = dispatch => ({
    medicalhistory_load: (p_id) => dispatch(patientProfile_api.patientProfile_medicalhistory(p_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalHistory)