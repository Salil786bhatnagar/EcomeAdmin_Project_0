import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getData,ServerURL,postData} from '../FetchServices';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    abCard:{
        // width:'100%',
    }
  }));

export default function Brandad(){
 const classes = useStyles();

 const [getBrandList, setBrandList]=useState([]);

 useEffect(function(){
    fetBrandad()
 },[])

 const fetBrandad=async()=>{
    let list = await getData('brand/fetchbrandadlist');
    setBrandList(list)
 }

 const brandAdData=()=>{
     return(
         getBrandList.map((item)=>{
           
            return(
                <div className={classes.abCard}>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <img src={`${ServerURL}/images/${item.ad}`}/>
                    </Paper>
                  </Grid>
                </div>
            )
         })
     )
 }


return(

    <Grid container spacing={3}>
     {brandAdData()}
    </Grid>
)

}