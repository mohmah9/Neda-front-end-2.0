import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Province from './Province'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { Fab } from '@material-ui/core'; 
import Add from '@material-ui/icons/Add';
import  Dialogfalse from './DialogAdd';
import { connect } from "react-redux";
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import { ListContent } from 'semantic-ui-react';
import ViewMedic from './ViewMedic';


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


class Medic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
      
    }
    componentWillMount(){
        console.log(this.props.Patient[0].social_number)
        this.props.medicine_load(this.props.Patient[0].social_number)
    }
    handle_dialog = () =>{
        this.props.medicine_dialog_trans()
    }
    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleChangerr = event => {
        this.setState({ clinicprovince: event.target.value })
    }

    render() {
        console.log(this.props.medicine_result)
        return (
            <div>
                <br/>
                <h2 style = {{textAlign : "right" , paddingRight : "10%", paddingTop : "1%"}}>داروهای من</h2>
                <Divider/>
                <br/>
                <br/>
               {this.props.medicine_result .map(medic => <ViewMedic medicine = {medic}/>)}
               <div style = {{paddingTop : "40%"}}>
                <Fab color="primary" aria-label="add" onClick={this.handle_dialog}>
                 <Add />
                </Fab>
               </div>
                <br/>
                {this.props.dialog_medicine_open  ? <Dialogfalse /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    Patient: state.PatientProfile_reducer.patientProfile_load_result,
    medicine_result: state.PatientProfile_reducer.medicine_load_result,
    dialog_medicine_open: state.PatientProfile_reducer.dialog_medicine_open,
    
});

const mapDispatchToProps = dispatch => ({
    medicine_load: (url) => dispatch(patientProfile_api.medicine_load(url)),
    medicine_dialog_trans: () => dispatch(patientProfile_api.medicine_dialog_trans())
    
});
export default connect(mapStateToProps, mapDispatchToProps)(Medic)
