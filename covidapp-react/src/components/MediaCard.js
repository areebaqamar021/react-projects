import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';


export default function MediaCard({text, value, color}) {
console.log(color)
  return (
    <Card className='mycard' style={{backgroundColor:color}}>
      <CardActionArea>
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
            <div className='headtypo'>{text}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h1 style={{color: 'white', fontWeight: 400}}>
            <CountUp className='headtypo' start= {1000} duration={3} end={value}/></h1>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
