import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
  },
  media: {
    // height: 140,
    height:175
  },
paper1:{
    backgroundColor:'#cccccc9c',
    padding:'45px 45px 45px 45px',
    textAlign:'center',
    border: '1px solid grey',
},
totalUser:{
    // padding:'5px 5px 5px 5px',
    position: 'relative',
    bottom: '24px',
    right: '40%',
},
paper2:{
    backgroundColor:'#86f0ffa8',
    padding:'45px 45px 45px 45px',
    textAlign:'center',
    border: '1px solid lightseagreen',
},
totalBrand:{
  // padding:'5px 5px 5px 5px',
  position: 'relative',
  bottom: '24px',
  right: '40%',
},
paper3:{
    backgroundColor:'#edbae7b8',
    padding:'45px 45px 45px 45px',
    textAlign:'center',
    border: '1px solid palevioletred',
},
totalSale:{
  // padding:'5px 5px 5px 5px',
  position: 'relative',
  bottom: '24px',
  right: '40%',
},
paper4:{
    backgroundColor:'#f7cf68cc',
    padding:'45px 45px 45px 45px',
    textAlign:'center',
    border: '1px solid #d0d009f5',
},
totalOrder:{
  // padding:'5px 5px 5px 5px',
  position: 'relative',
  bottom: '24px',
  right: '40%',
},
}));

export default function IndexPage(){
const classes = useStyles();
  return(
      <div>
          <Grid container spacing={2}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
                {/* <Paper className={classes.paper1}>
                  <Typography><b className={classes.totalUser}>Total User:</b></Typography>
                </Paper> */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/dashbord_img/totalUser.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Total User's
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
                {/* <Paper className={classes.paper2}>
                  <Typography><b className={classes.totalBrand}>Total Bramd:</b></Typography>
                </Paper> */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/dashbord_img/totalBrand.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Total Brand's
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
                {/* <Paper className={classes.paper3}>
                  <Typography><b className={classes.totalSale}>Total Sale:</b></Typography>
                </Paper> */}

               <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/dashbord_img/totalSale2.png"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Total Sale
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
                {/* <Paper className={classes.paper4}>
                  <Typography><b className={classes.totalOrder}>Total Order:</b></Typography>
                </Paper> */}
                 <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/dashbord_img/totalOrder2.png"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Total Order
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
      </div>
  )

}