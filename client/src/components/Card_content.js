import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from 'reactstrap';
import { IconButton } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/SupervisedUserCircleRounded';

const useStyles = makeStyles({
  root: {
    maxWidth: 186,
  },
  media: {
    height: 186,
  },
  overlay: {
    position: 'absolute',
    top: '0%',
    left: '75%',
 },
  Buttoncolor : {
    color:'#800080'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="netflix.jpeg"
          title="Contemplative Reptile"
        />
        <div className={classes.overlay}>
          <IconButton variant='outlined' className={classes.Buttoncolor}>
              <PeopleIcon/>
          </IconButton>
        </div>
      </CardActionArea> 
    </Card>

  );
}
