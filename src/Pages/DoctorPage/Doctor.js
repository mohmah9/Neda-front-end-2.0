import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './NavBar'

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

class ViewInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patient: '',
            Clinic: '',
        }
    }

    componentWillMount() {
        console.log( this.props.Appointment.patient)
        console.log( this.props.Appointment.clinic)
        Promise.all([
            fetch('http://nedabackend.pythonanywhere.com/patients/' + this.props.Appointment.patient + '/').then(value => value.json()),
            fetch('http://nedabackend.pythonanywhere.com/clinics/' + this.props.Appointment.clinic + '/').then(value => value.json()),
        ])
            .then((value) => {
                console.log(value)
                this.setState({
                    patient: value[0],
                    Clinic: value[1]
                });
            })
            .catch((err) => {
                console.log(err);
            });

    }

    render(){
        return (
            <div>
                     
                  <Paper /*onClick={this.movetodoctor}*/ style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
                    <div>
                     
                      <div style={{ 'textAlign': "right", 'marginLeft': "30%", paddingRight: "2%" }}>
                        <br />
                        <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                        <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                        {this.state.Clinic ? 
                        <div>
                          <p>آدرس مطب : {this.state.Clinic.address}</p>
                          <p>تلفن : {this.state.Clinic.phone_number}</p>
                        </div>
                        : null
                        }
                        
                        
                        <br />
                      </div>
                    </div>
                  </Paper>
                
              
              <br />
            </div>
      
          )
    }

}
class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            filters: [],
            social: "د156-589",
            timeresult: []
        }
    }


    componentWillMount() {
        return fetch('http://nedabackend.pythonanywhere.com/appointment_times/?doctor=' + this.state.social, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            this.setState({
                timeresult: json
            })
            console.log(json)
            this.handlepatient(json)
        });
    }
    handlepatient(times) {

        // this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <MenuAppBar />
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item sm={9}>
                            <Paper className={classes.paper}>
                                {this.state.timeresult ?
                                    <div>
                                        {this.state.timeresult.map(time => <ViewInfo Appointment={time} />)}
                                    </div>
                                    : "loading ...."
                                }
                            </Paper>
                        </Grid>
                        <Grid item sm={3}>
                            <Paper className={classes.paper}>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Doc);


