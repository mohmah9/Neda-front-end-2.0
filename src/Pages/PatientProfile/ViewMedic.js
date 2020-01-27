import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Fade from 'react-reveal/Fade';
import drug from '../../Images/drug.png';
import CircularProgress from '@material-ui/core/CircularProgress';


class ViewMedic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Doctor: '',
      Clinic: '',
    }
  }

  render() {
    return (
      <div>
        <Fade bottom>

          {/* <Paper> */}
            <div style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginRight : "20%", paddingTop:"2%", marginLeft : "20%", width: "-webkit-fill-available" }}>
              <div >

                <img src={drug} style={{
                  width: "75px",
                  height: "75px", paddingTop: "2%", float: "right",paddingRight: "5%" , overflow: "auto", clear: "both"
                }} alt=" " />
              </div>

              <div style={{ 'textAlign': "right", paddingTop: "5%", 'marginRight': "15%", paddingRight: "15%" }}>
                {this.props.medicine ?
                <h2>{this.props.medicine.name}</h2>
                  : <CircularProgress variant="determinate" color="primary" />}
                <p>زمان مصرف : هر {this.props.medicine.period} ساعت یکبار</p>
                
                <Divider />

              </div>
            </div>

            <br />
          {/* </Paper> */}
        </Fade>
        <br />
        <br />
      </div>
    )
  }
}

export default ViewMedic
