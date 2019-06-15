import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


let Doctor = {
    Name : 'رامین',
    LastName : 'محمدی',
    Image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbpodSecGGEBqQrCtXK4iq9CHc2zWZg8aS9pkU6haUX4YgVm5',
    MedicalSystemNumber : 84771,
    Expertise : 'جراح مغز و اعصاب',
    Address : "تهران خیابان شریعتی بالاتر از ظفر قبل از بیمارستان ایرانمهر خیابان پور مشکانی یا کودکان غزه ساختمان پزشکان بزرگمهر طبقه پنجم",
    phone : "۰۲۱-۲۲۶۱۷۳۰۵",
    Bio : "انجام نوار مغز نوار عصب داپلر گردن نوار چشم"
  };
  
  let patient = {
    Name : 'مریم',
    LastName : 'افشار',
  };

  function ViewAppointmentInformation(props){

    return(
      <div style = {{'textAlign' : "right"}}>
        <p> {props.patient.Name} {props.patient.LastName} عزیز</p>
        <p>برای تاریخ 10  تیر ساعت 4 بعد از ظهر در مطب دکتر {props.Doctor.Name} {props.Doctor.LastName} برای شمارزرو موقت شد </p>
        <p>برای قطعی شدن رزرو کلید پرداخت را بزنید</p>
    
      </div>
      
    )
  }

  

  export default function DiologOpen(props) {
  const [open, setOpen] = React.useState(true);

  function handleClose() {
    setOpen(false);
  }

  function handleOpenNewPage()
   {
      window.location.assign("/Login")
   }  

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <ViewAppointmentInformation Doctor = {Doctor} patient = {patient}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            انصراف
          </Button>
          <Button onClick={handleOpenNewPage} color="primary" autoFocus>
            پرداخت
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

