import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Icon } from '@material-ui/core';
import 'react-day-picker/lib/style.css'
import Calender from './Calender';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuAppBar from './NavBar' 

// 8let Doctor = {
//   Name : 'رامین',
//   LastName : 'محمدی',
//   Image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D5lfr0312HCDhvFVqdZSuBHiQrvY_ZfRnNn_Uwlo0g9N-tJl',
//   MedicalSystemNumber : 84771,
//   Expertise : 'جراح مغز و اعصاب',
//   Address : "تهران خیابان شریعتی بالاتر از ظفر قبل از بیمارستان ایرانمهر خیابان پور مشکانی یا کودکان غزه ساختمان پزشکان بزرگمهر طبقه پنجم",
//   phone : "۰۲۱-۲۲۶۱۷۳۰۵",
//   Bio : "انجام نوار مغز نوار عصب داپلر گردن نوار چشم"
// };
let backImage="https://s3.amazonaws.com/media-p.slid.es/uploads/1015675/images/5881492/computer-1149148_1920.jpg"
function Image(props){

  return(
     <div>
       <div style = {{'marginTop' : "3%",  'marginRight' : "15%"}}>
            <img src= {props.Doctor.picture}
              alt = {props.Doctor.first_name + " " + props.Doctor.last_name} 
              style = 
              {{
                'alignSelf' : "right",
                'marginLeft' : "90%",
                 width: "135px",
                 height: "135px",
                 'borderRadius' : "50%",

                 }}/>                
          </div>
     </div>
  );
}

function Information(props){

  return(
      <div style = {{'textAlign' : "right",'marginLeft' : "30%"}}>
          <div style = {{'paddingTop' : "2%"}}>
          <p>دکتر {props.Doctor.first_name + " " + props.Doctor.last_name}</p> 
          </div>
          <div style = {{'paddingTop' : "2%"}}>
              <p>درباره پزشک</p>
              <p style = {{color : "grey"}}>{props.Doctor.bio}</p>
          </div>
          <p  style = {{'paddingTop' : "2%"}}>شماره نظام پزشکی  {props.Doctor.medical_system_number}</p>
          <div style = {{'paddingTop' : "2%"}}>
              <p>تخصص و فوق تخصص</p>
              <p style = {{color : "grey"}}>{props.Doctor.expertise}</p>
          </div>
      </div> 
  );

}


export default class DoctorProfile extends React.Component {
  constructor(props){
    super(props);
  }


  state={
    clickOnClinic : false,
  };

 changestate = () => {
    this.setState({clickOnClinic : true})
  };

  render()
  {
    console.log(this.props.location.Doctor)
  return (

    <div style={{  backgroundimage:{backImage},
    backgroundsize: "cover"}}>
      <MenuAppBar/>
      <Grid container spacing = {24}>

        <Grid item xs={12}>
          <Paper></Paper>

        </Grid>
        {/* <Grid item sm={2}></Grid> */}
        <Grid item sm={5} style={{paddingTop:"2%" , paddingLeft:"5%" , paddingRight:"5%"}}>
          <Paper style={{ opacity: "0.9"}}>
            {this.state.clickOnClinic ? <Calender/> : null}
          </Paper>
        </Grid>
        <Grid item sm={2} style = {{paddingTop:"2%" , paddingRight:"5%"}}>
        <Paper style={{ opacity: "0.9"}}>
           <MenuList>
            <p style = {{'paddingRight' : "5%", 'textAlign' : "right"}}>مطب ها و بیمارستان ها</p>
            <MenuItem style = {{'paddingRight' : "5%", 'textAlign' : "right"}}  onClick = {this.changestate}><p style={{direction:'rtl'}}>بیمارستان مهر</p></MenuItem>
            <MenuItem style = {{'paddingRight' : "5%", 'textAlign' : "right"}}  onClick = {this.changestate}><p style={{direction:'rtl'}}>بیمارستان نجمیه</p></MenuItem>
          </MenuList> 
        </Paper>
        </Grid>
        
        <Grid style = {{paddingRight : "4%"}} item sm={5}>
          <Paper  elevation={5} style = {{'paddingRight' : "4%", 'paddingLeft' : "1%", opacity: "0.9"}}>
            
            <Image Doctor = {this.props.location.Doctor}/>
            <Information Doctor = {this.props.location.Doctor}/>  
            <br />
          </Paper>  
        </Grid>
      </Grid>
    </div>
    
  )
  }
}




