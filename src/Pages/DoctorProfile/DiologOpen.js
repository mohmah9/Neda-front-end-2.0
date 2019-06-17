import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// let Doctor = {
//     Name : 'رامین',
//     LastName : 'محمدی',
//     Image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbpodSecGGEBqQrCtXK4iq9CHc2zWZg8aS9pkU6haUX4YgVm5',
//     MedicalSystemNumber : 84771,
//     Expertise : 'جراح مغز و اعصاب',
//     Address : "تهران خیابان شریعتی بالاتر از ظفر قبل از بیمارستان ایرانمهر خیابان پور مشکانی یا کودکان غزه ساختمان پزشکان بزرگمهر طبقه پنجم",
//     phone : "۰۲۱-۲۲۶۱۷۳۰۵",
//     Bio : "انجام نوار مغز نوار عصب داپلر گردن نوار چشم"
//   };

let patient = {
  Name: 'مریم',
  LastName: 'افشار',
};

function ViewAppointmentInformation(props) {

  return (
    <div style={{ 'textAlign': "right" }}>
      <p> {props.patient.Name} {props.patient.LastName} عزیز</p>
      <p>برای تاریخ 10  تیر ساعت 4 بعد از ظهر در مطب دکتر {props.Doctor.first_name} {props.Doctor.last_name} برای شمارزرو موقت شد </p>
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

      let x = await fetch('http://nedabackend.pythonanywhere.com/appointment_times/'+ this.props.time.id+'/' , {
          mode: "cors",
          method: 'PUT',
          body: JSON.stringify({
              has_reserved : true,
          }),
          headers: {
              "Content-type": "application/json;charset=UTF-8",
              "Authorization" : "Token " + this.props.token.token
          }
      })
      
      this.setState({open : false})
      // x = await x.json()
      console.log(x)
  };

  

  render() {
    //const [open, setOpen] = React.useState(true);
    console.log(this.props.token)
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
              <ViewAppointmentInformation Doctor={this.props.Doctor} patient={patient} />
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

