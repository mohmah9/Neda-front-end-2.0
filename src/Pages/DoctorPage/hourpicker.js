import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";


const styles = {
    grid: {
        width: '60%',
    },
};
const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

class UIPickers extends React.Component {
    state = {
        selectedDate: new Date('2014-08-18T21:11:54'),
        selectedDateE: new Date('2014-08-18T21:11:54'),
        dclinic: '',
        period:'',
        price:''
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
    handleDateChangeE = date => {
        this.setState({ selectedDateE: date });
    };

    componentWillMount() {
        this.props.doctorPage_load()
    }

    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });

    };
    handleChangerr = event => {
        this.selectedFilters = event.target.value
        this.setState({ dclinic: event.target.value })
    }
    render() {
        const { selectedDate , selectedDateE } = this.state;
        return (
            <div style={{marginLeft:"30%"}}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker
                        margin="normal"
                        label="زمان شروع را انتخاب کنید"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        locale="sv-sv"
                    />

                    <TimePicker
                        margin="normal"
                        label="زمان پایان را انتخاب کنید"
                        value={selectedDateE}
                        onChange={this.handleDateChangeE}
                        locale="sv-sv"
                    />
                </MuiPickersUtilsProvider>
                <div className="fields">
                    <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="userttext" label="Period(minutes)" name="period" type="number" margin="normal" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="userttext" label="Price" name="price" type="number" margin="normal" />
                </div>
                <div className="fields">
                    <FormControl className="fields" style={{ display: "block" }}>
                        <InputLabel htmlFor="age-customized-select" >
                            clinic
                      </InputLabel>
                        <Select
                            value={this.state.dclinic}
                            onChange={this.handleChangerr}
                            name="dclinic"
                            input={<BootstrapInput name="age" id="age-customized-select" />}
                            style={{ 'marginLeft': "50%" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.props.clinics.map(p => (<MenuItem name={p.name} value={p.name} onclick={this.handleChanger.bind(this)}>{p.name}</MenuItem>))}

                        </Select>
                    </FormControl>
                </div>
                <br />
                <div>
                    <Button variant="contained" style={{ background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)" }} fullWidth onClick={() => this.props.doctorPage_addWorkingHour(this.state.dclinic, this.props.day, this.state.price, this.state.period,this.state.selectedDate, this.state.selectedDateE, this.props.clinics)}>
                        ثبت</Button>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    ...state,
    clinics: state.DoctorPage_reducer.doctorPage_load_result[0].doctor_clinics
});

const mapDispatchToProps = dispatch => ({

    doctorPage_load: () => dispatch(doctorPage_api.doctorPage_load()),
    doctorPage_addWorkingHour: (dclinic, day, price, period,selectedDate, selectedDateE, clinics) => dispatch(doctorPage_api.doctorPage_addWorkingHour(dclinic, day, price, period,selectedDate, selectedDateE, clinics))

});

// export default ;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UIPickers));
