import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function ViewAppointmentInformation(props) {

  return (
    <div style={{ 'textAlign': "right" }}>
      <p>  کاربر عزیز</p>
      <p>رزرو موقت با موفقیت انجام شد </p>
      <p>برای قطعی شدن رزرو کلید پرداخت را بزنید</p>

    </div>

  )
}



export default class DiologOpen extends React.Component {

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
      localStorage.setItem("btncolor" , "secondary")
      let x = await fetch('http://nedabackend.pythonanywhere.com/appointment_times/'+ this.props.time.id+'/' , {
          mode: "cors",
          method: 'PUT',
          body: JSON.stringify({
              has_reserved : true,
              visiting:false,
              visited:false
          }),
          headers: {
              "Content-type": "application/json;charset=UTF-8",
              "Authorization" : "Token " + localStorage.getItem('token')
          }
      })
      
      await this.setState({open : false})
      /// this.props.color = "secondary"
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

