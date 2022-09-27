import React,{useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {getData, ServerURL} from '../FetchServices';
const useStyles = makeStyles((theme)=>({
    footer:{
        height:400,
        background:'#9a949438',
        position: 'relative',
        top: '60px',
    },
    category:{
        padding:'55px 0px 0px 20px',
        fontSize: 12,
        color:'#333',
        textTransform: 'uppercase',
        fontFamily: 'JioBold',
        fontWeight: 700,
    },
    customer:{
        padding:'55px 0px 0px 20px',
        fontSize: 12,
        color:'#333',
        textTransform: 'uppercase',
        fontFamily: 'JioBold',
        fontWeight: 700,
    },
    contact:{
        padding:'55px 0px 0px 20px',
        fontSize: 12,
        color:'#333',
        textTransform: 'uppercase',
        fontFamily: 'JioBold',
        fontWeight: 700,
    },
    categorylist:{
      color:'#101010c7'
    }
    
}));


export default function Footer(){
  const classes = useStyles();

  useEffect(function(){
    fetchCategoryList();
  },[])
  
  const [getCategoryList, setCategoryList]=useState([]);
  
  const fetchCategoryList=async()=>{
    let list = await getData('category/fetchcategory');
    setCategoryList(list);
    
  }

     const CategoryList=()=>{
       return(
           getCategoryList.map((item)=>{
             return(
              <div className={classes.categorylist}>
                  <ul>
                    <li>{item.categoryname}</li>
                  </ul>
              </div>
            )
          })
        )
      }   
    return(

        <div className={classes.footer}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <p className={classes.category}>MOST POPULAR CATEGORIES</p>
              {CategoryList()}
          </Grid>
            <Grid item xs={4}>
               <p className={classes.customer}>CUSTOMER SERVICES</p> 
            </Grid>
            <Grid item xs={4}>
              <p className={classes.contact}> CONTACT US</p>   
            </Grid>
          </Grid>
        </div>
    )

}