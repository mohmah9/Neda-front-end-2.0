import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";

class Dialogfalse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            medicine_name:"",
            medicine_period:"",
            medicine_start:"",
            medicine_count:""

        };

    }
    handleClose=()=> {
        this.props.medicine_dialog_trans()
        this.setState({ open: false }) 
    }
    handle_medicine_submit = () => {
        this.props.medicine_reminder([this.state.medicine_name , this.state.medicine_start , this.state.medicine_period , this.state.medicine_count])
        this.props.medicine_dialog_trans()
    }
    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleChangerr = event => {
        this.setState({ clinicprovince: event.target.value })
    }
    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"></DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        <h5>اضافه کردن دارو</h5>
                        <Divider/>
                        <div className="fields" style ={{ paddingRight : "2%", paddingLeft : "2%"}}>
                            <TextField id="outlined-email-input"  required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام دارو" type="Name" name="medicine_name" margin="normal" />
                        </div>
                        <div className="fields" style ={{ paddingRight : "2%", paddingLeft : "2%"}}>
                            <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="userttext" label="دوره مصرف" name="medicine_period" type="tel" margin="normal" />
                        </div>
                        <div className="fields">
                            <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="زمان شروع مصرف" type="Name" name="medicine_start" margin="normal" />
                        </div>
                        <div className="fields">
                            <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="تعداد دارو" type="Name" name="medicine_count" margin="normal" />
                        </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handle_medicine_submit} color="primary">
                            ثبت
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state,
    dialog_open: state.PatientProfile_reducer.dialog_medicine_open,
});

const mapDispatchToProps = dispatch => ({
    medicine_reminder: (info) => dispatch(patientProfile_api.medicine_reminder(info)),
    medicine_dialog_trans: () => dispatch(patientProfile_api.medicine_dialog_trans())
});
export default connect(mapStateToProps, mapDispatchToProps)(Dialogfalse)
