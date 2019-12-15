import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ViewAndEditDoctorInformation from './Viewinfo';
import ViewAppointment from "./ViewAppointment"
import Addclinic from './Addclinic';
import WorkingHour from './WorkingHour';
import MenuAppBar from '../Home/NavBar';
import Chat from '../Chat/Chat'
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Person from '@material-ui/icons/Person';
import InsertInvitation from '@material-ui/icons/InsertInvitation';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import AddAlarm from '@material-ui/icons/AddAlarm';
import Forward from '@material-ui/icons/Forward';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";


class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // doctor: [],
            // addclinic: false,
            info: false,
            reserve: true,
            clinic: false,
            workhours: false,
        }
    }

    

    componentWillMount() {
        this.props.doctorPage_load()
    }

    // handleclinic = (e) => {
    //     this.setState({
    //         addclinic: true
    //     })
    // }

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
        return (
            <div>
                <MenuAppBar />
                <div>
                    <Grid container spacing={24}>
                        <Grid item sm={9} style={{ paddingTop: "5%", paddingLeft: "15%", paddingRight: "5%" ,  marginTop : "4%"}}>
                            {this.state.reserve & this.props.doctor.length >= 1?
                                <ViewAppointment Doctor={this.props.doctor[0]} />
                                : this.state.info ?
                                <Paper><ViewAndEditDoctorInformation /></Paper>   
                                    : this.state.clinic ?
                                    <Paper><Addclinic/></Paper>
                                        : this.state.workhours & this.props.doctor.length >= 1?
                                            <WorkingHour/>
                                            :<CircularProgress color="primary" />
                            }
                        </Grid>
                        <Grid item sm={3} style={{ paddingTop: "5%", paddingRight: "10%" ,  marginTop : "3%"}}>
                        <Paper>
                            <div>
                            <List onClick={this.handleinfo}>
                                <ListItem button>
                                <ListItemText primary="اطلاعات کاربری" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                </ListItem>
                            </List>
                            <Divider />
                            <List onClick={this.handlereserve}>
                                <ListItem button>
                                <ListItemText primary="وقت های رزرو شده" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <InsertInvitation />
                                </ListItemIcon>
                                </ListItem>
                            </List>
                            <Divider />
                            <List onClick={this.handleclinic}>
                                <ListItem button>
                                <ListItemText primary="اضافه کردن مطب" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <LibraryAdd />
                                </ListItemIcon>    
                                </ListItem>
                            </List>
                            <Divider />
                            <List onClick={this.handleworkhours}>
                                <ListItem button>
                                <ListItemText primary="ثبت وقت کاری" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <AddAlarm />
                                </ListItemIcon>    
                                </ListItem>
                            </List>
                            <Divider />
                            <List> 
                                <ListItem button>
                                <ListItemText primary="خروج" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <Forward />
                                </ListItemIcon>    
                                </ListItem>
                            </List>
                            </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <Chat />
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