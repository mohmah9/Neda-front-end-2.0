import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import * as doctorProfile_api from "../../Redux/DoctorProfile/DoctorProfile_action"


function ViewAppointmentInformation(props) {

  return (
    <div style={{ 'textAlign': "right" }}>
      <p>  کاربر عزیز</p>
      <p>رزرو موقت با موفقیت انجام شد </p>
      <p>برای قطعی شدن رزرو کلید پرداخت را بزنید</p>

    </div>

  )
}


class DiologOpen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };

  }

  
  handleClose() {
    this.setState({open : false})
  }

  reserveTime = async (e) => {      
      this.props.reserve_time(this.props.time.id)
      await this.setState({open : false})
      
  };

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
              <ViewAppointmentInformation  time = {this.props.time}/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({open : false})} color="primary">
              انصراف
            </Button>
            <Button onClick={this.reserveTime} color="primary" autoFocus>
              پرداخت
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );

  }

}
const mapStateToProps = state => ({
  ...state,
  appointment_times : state.DoctorProfile_reducer.appointmentTime_result,
 
});

const mapDispatchToProps = dispatch => ({
  reserve_time : (id) => dispatch(doctorProfile_api.reserve_time(id)),
  appointmenttime_load: (id) => dispatch(doctorProfile_api.appointmenttime_load(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiologOpen)


