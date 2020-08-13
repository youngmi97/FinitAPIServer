import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 200,
    backgroundColor: 'transparent',
  },
  media: {
    width:100,
    height: 100,
  },
}));

export default function Profile_Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="Ellipse.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Elice Yoo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            eli.ceryu@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}