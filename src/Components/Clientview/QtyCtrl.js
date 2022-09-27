import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({      
      purple: {
        // color: theme.palette.getContrastText(deepPurple[500]),
        color:'#C0E3F2',
        backgroundColor: '#008ECC',
        width:36,
        height:36,
        margin:20,
        fontSize:32,
      },
      divcontainer:{
          display:'flex',
          flexDirection:'row',
          position: 'relative',
          left: '40px',
      }
}));

 var qty = 0;   
 function QtyCtrl(props){
    const classes = useStyles();
    const [counter, setCounter]=useState(1)
    const handlePlus=()=>{
       var qty = counter + 1
       setCounter(qty)
       props.onChange(qty);
    }

    const handleMinus=()=>{
        if(counter>=1)
        {
          var qty = counter - 1
          setCounter(qty)
          props.onChange(qty);
        }
        
        
    }
    
    return(
     <div >
       <div className={classes.divcontainer}>
        <Avatar className={classes.purple} onClick={(qty)=>handlePlus(qty)}>+</Avatar>
          <span style={{margin:30,}}>{counter}</span>
        <Avatar className={classes.purple} onClick={(qty)=>handleMinus(qty)}>-</Avatar>
        </div> 
    </div>
    )
}
export {QtyCtrl,qty}
