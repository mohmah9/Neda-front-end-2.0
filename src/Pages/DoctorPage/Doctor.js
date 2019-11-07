import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import ViewAndEditDoctorInformation from './Viewinfo';
import ViewAppointment from "./ViewAppointment"
import Addclinic from './Addclinic';
import WorkingHour from './WorkingHour';
import MenuAppBar from '../Home/NavBar';
import { connect } from "react-redux";
import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";


class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
            addclinic: false,
            info: false,
            reserve: true,
            clinic: false,
            workhours: false,
        }
    }

    componentWillMount() {
        this.props.doctorPage_load()
    }

    handleclinic = (e) => {
        this.setState({
            addclinic: true
        })
    }

    handleinfo = (e) => {
        this.setState({
            info: true,
            reserve: false,
            clinic: false,
            workhours: false
        })
    }

    handlereserve = (e) => {
        this.setState({
            reserve: true,
            clinic: false,
            workhours: false,
            info: false
        })
    }

    handleclinic = (e) => {
        this.setState({
            clinic: true,
            reserve: false,
            info: false,
            workhours: false
        })
    }

    handleworkhours = (e) => {
        this.setState({
            workhours: true,
            info: false,
            reserve: false,
            clinic: false
        })
    }

    render() {
        // console.log(this.props.doctor)
        return (
            <div>
                <MenuAppBar />
                <div>
                    <Grid container spacing={24}>
                        <Grid item sm={9} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {this.state.reserve & this.props.doctor.length >= 1?
                                <ViewAppointment Doctor={this.props.doctor[0]} />
                                : this.state.info ?
                                <ViewAndEditDoctorInformation />        
                                    : this.state.clinic ?
                                        <Addclinic/>
                                        : this.state.workhours & this.props.doctor.length >= 1?
                                            <WorkingHour/>
                                            :"WELCOME ..."
                            }
                        </Grid>
                        <Grid item sm={3} style={{ paddingTop: "2%", paddingRight: "2%" }}>

                            <Button variant="outlined" fullWidth onClick={this.handleinfo} style={{ paddingBottom: "0", paddingTop: "0",marginBottom:"3%",  borderRadius: '12%' }}>
                                <h4>مشخصات</h4>
                            </Button>
                            <Button variant="outlined" fullWidth onClick={this.handlereserve} style={{ paddingBottom: "0", paddingTop: "0",marginBottom:"3%", borderRadius: '12%' }}>
                                <h4>وقت های رزرو شده</h4>
                            </Button>
                            <Button variant="outlined" fullWidth onClick={this.handleclinic} style={{ paddingBottom: "0", paddingTop: "0",marginBottom:"3%" , borderRadius: '12%' }}>
                                <h4>اضافه کردن مطب</h4>
                            </Button>
                            <Button variant="outlined" fullWidth onClick={this.handleworkhours} style={{ paddingBottom: "0", paddingTop: "0",marginBottom:"3%", borderRadius: '12%' }}>
                                <h4>تغییر وقت کاری</h4>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    doctor: state.DoctorPage_reducer.doctorPage_load_result
});

const mapDispatchToProps = dispatch => ({
    doctorPage_load: () => dispatch(doctorPage_api.doctorPage_load())
});
export default connect(mapStateToProps, mapDispatchToProps)(Doc);