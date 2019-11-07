import React from 'react';
import Paper from '@material-ui/core/Paper';
import DoctorProfile from "../DoctorProfile/DoctorProfile"
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Rate from '../Rate/Rate'
import * as viewinfo_success_api from "../../Redux/Home_viewinfo/viewinfo_action"
import { connect } from "react-redux";

class ViewInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.go_to_doctor) return <Redirect to={{ pathname: '/DoctorProfile' }} />
        return (
            <div>
                <Button fullWidth onClick={() => this.props.viewinfo_success(this.props.Doctor)}>
                    <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
                        <div>
                            <div>
                                <img src={this.props.Doctor.picture} style={{
                                    width: "75px",
                                    height: "75px", position: "absolute", left: "5%", paddingTop: "2%"
                                }} alt=" " />
                            </div>
                            <div style={{ position: "absolute", top: "60%", left: "5.5%" }}>
                                <Rate Rate={this.props.Doctor.doctor_rates.rate} />
                            </div>
                            <div style={{ 'textAlign': "right", 'marginLeft': "30%", paddingRight: "2%" }}>
                                <br />
                                <p>دکتر {this.props.Doctor.user.first_name + " " + this.props.Doctor.user.last_name}</p>
                                <p>تخصص و فوق تخصص :  {this.props.Doctor.expertise}</p>
                                <p> درباره پزشک : {this.props.Doctor.bio}</p>
                                <br />
                            </div>
                        </div>
                    </Paper>
                </Button>
                <br />
            </div>

        )
    }
}
const mapStateToProps = state => ({
    go_to_doctor: state.Viewinfo_reducer.go_to_doctor,
    
});

const mapDispatchToProps = dispatch => ({
    viewinfo_success: (res) => dispatch(viewinfo_success_api.viewinfo_success(res))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewInfo);