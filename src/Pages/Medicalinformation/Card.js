import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

export default class ReviewCard extends React.Component {

  state ={
    click : false
  }

render(){
  if(this.state.click) return <Redirect to={{ pathname: '/LearnInfo' , info:{title:"Shrimp and Chorizo Paella" , typo:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." , detail:"this is where we vomit cuz we are so tired of this shit ..." , image:this.props.image} }} />
  return (
    
    <Card style = {{marginRight : "10%", marginLeft : " 10%"}} onClick={console.log("heloo")}>
      <CardHeader
        avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <img src={this.props.image}alt = " " style = {{height : "300px", width : "380px"}} />
      <CardMedia
        image="../../Images/comp.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary" onClick = {()=> this.setState({click : true})}>
          LearnMore
        </Button>
      </CardActions>
    </Card>
    

    );
    }
}