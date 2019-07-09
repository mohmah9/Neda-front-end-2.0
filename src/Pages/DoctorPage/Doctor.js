import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ViewAndEditDoctorInformation from './Viewinfo'
import Appointment from './Appointments'
import Addclinic from './Addclinic'
import WorkingHour from './WorkingHour'
import MenuAppBar from '../Home/NavBar'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class ViewAppointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timeresult: [],
            
        }
    }

    componentDidMount() {
        console.log(this.props.Doctor.medical_system_number)
        return fetch("http://nedabackend.pythonanywhere.com/appointment_times/?doctor=" + this.props.Doctor.medical_system_number, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
                this.setState({ timeresult: json })
            });
    }

    

    render() {
        return (
            <div>
                {this.state.timeresult.length >= 1 ?
                    <div>
                        {this.state.timeresult.map(time => time.has_reserved != false
                            ? <Appointment Appointment={time} /> : null)}

                    </div>
                    : "loading ..."}
            </div>
        )
    }

}


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
        fetch('http://nedabackend.pythonanywhere.com/doctors/', {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            this.setState({ doctor: json })
        });


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
        const { classes } = this.props;
        console.log(this.state.doctor)
        console.log(this.state.timeresult)
        return (
            <div>
                <MenuAppBar />
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item sm={9} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {this.state.reserve & this.state.doctor.length >= 1 ?
                                <ViewAppointment Doctor={this.state.doctor[0]} />
                                : this.state.info & this.state.doctor.length >= 1 ?
                                    <ViewAndEditDoctorInformation doctor={this.state.doctor[0]} />
                                    : this.state.clinic ?
                                        <Addclinic doctor={this.state.doctor[0]} />
                                        : this.state.workhours & this.state.doctor.length >= 1 ?
                                            <WorkingHour data={this.state.doctor[0].doctor_clinics} />
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
                {/* <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item sm={7} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {this.state.doctor.length >= 1 ?
                                <ViewAppointment Doctor={this.state.doctor[0]} />
                                : "loading ...."
                            }
                        </Grid>
                        <Grid item sm={5} style={{ paddingTop: "2%", paddingRight: "2%" }}>
                            <Paper className={classes.paper}>
                                {this.state.doctor.length >= 1 ?
                                    <ViewAndEditDoctorInformation doctor={this.state.doctor[0]} />
                                    : null
                                }
                            </Paper>
                            <Paper className={classes.paper} style={{ marginTop: "3%" }}>
                                {this.state.addclinic ?
                                    <Addclinic doctor={this.state.doctor[0]} />
                                    : <Button variant="contained" color="primary" fullWidth onClick={this.handleclinic}>
                                        <h4>Add clinic</h4>
                                    </Button>}
                                    
                            </Paper>
                            <br/>
                            {this.state.doctor.length >= 1 ?
                                    <WorkingHour data={this.state.doctor[0].doctor_clinics}/>
                                    : null
                                }
                            
                        </Grid>
                    </Grid>

                    <Grid container spacing={24}>
                        <Grid item sm={12} style={{paddingRight:"2%", paddingLeft:"2%"}}>
                           
                        </Grid>
                    </Grid>
                </div> */}
            </div>
        )
    }
}
export default withStyles(styles)(Doc);