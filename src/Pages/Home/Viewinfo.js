import React from 'react';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Rate from '../Rate/Rate'
import Divider from '@material-ui/core/Divider';
import Fade from 'react-reveal/Fade';
import * as viewinfo_success_api from "../../Redux/Home_viewinfo/viewinfo_action"
import { connect } from "react-redux"; 

class ViewInfo extends React.Component {

    render() {
        if(this.props.go_to_doctor) return <Redirect to={{ pathname: '/DoctorProfile' }} />
        return (
            <div>
                <Fade bottom>
                    <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available"}}>
                        <div>
                            <div>
                                <img src={this.props.Doctor.picture} style={{
                                    width: "75px",
                                    height: "75px",paddingTop: "2%", float : "right", paddingRight : "2%", overflow : "auto", clear : "both"
                                }} alt=" " />
                                <Rate Rate={this.props.Doctor.rate} />
                            </div>
                            <div style={{ 'textAlign': "right", 'marginLeft': "30%", paddingRight: "20%" }}>
                                <p style={{ color: "grey" }}> {this.props.Doctor.expertise}</p>
                                <h2>دکتر {this.props.Doctor.user.first_name + " " + this.props.Doctor.user.last_name}</h2>
                            </div>
                        </div>
                        <Divider/>
                        <Button style= {{'marginLeft': "15%", marginTop : "1%", marginBottom : "1%"}} variant="outlined" color="primary" onClick={() => this.props.viewinfo_success(this.props.Doctor)}>! همین الان نوبت بگیرید</Button>
                        <br/>
                         
                    </Paper>
                    </Fade>
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