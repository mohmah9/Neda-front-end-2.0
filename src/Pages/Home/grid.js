import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Filters from "./Filters"
import ViewInfo from "./Viewinfo"
import { connect } from "react-redux";

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

class FullWidthGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      filters: []
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={9}>
              <div>
                {this.props.doctor_result.home_default_result.map(doctor => <ViewInfo Doctor={doctor} />)}
              </div>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.paper} style = {{background : "linear-gradient(to right, #9796f0, #fbc7d4)"}}>
              <Filters />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  doctor_result: state.Homepage_reducer
});

export default connect(mapStateToProps, undefined)(withStyles(styles)(FullWidthGrid));