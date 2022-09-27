import React,{useState,useEffect} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import {postDataAndImage,postData,getData} from '../FetchServices';
import {checkRequire} from '../Checks';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme)=>({
  root:{
    padding:theme.spacing(3),
    textAlign:'center',
    // padding:'40px',
    width:'90%',
  },
  mainPaper:{
    color:'#ff8520',
    backgroundColor:'#63596396',
    height:'390px',
  },
  paperheading:{
    backgroundColor:'#7d7979',
    height:'10px',
    padding:'20px'
  },
  div1:{
    padding:'37px 31px 20px'
  },
  div2:{
    padding:'10px 30px',
    margin:'0px'
  },
  uploadbtn1:{
   margin:'0px 30px 0px 11px',
  },

  uploadbtn2:{
    margin:'6px 46px 0px 0px',
  },

  imgAvater:{
    margin: '5px 55px',
    padding: '4px 4px 4px 4px',
  },

  div3:{
    position:'relative',
    right:'10%',
    color:'black',
    margin:'30px 10px',
  },
  div4:{
    padding:'35px 20px'
  },
  div5:{
    margin:'40px 12px 0px 14px',
    position:'absolute',
    color:'black',
  },
  input:{
    display:'none'
  },
  topbrand:{
   position:'relative',
   top:'15px',
   right:'38px',
   color:'black',
},
showMes:{
   margin:'15px 190px 0px 0px',
},
valImg:{
    position: 'relative',
    right: '9%',
    top: '0%',
},
outletaddress:{
  margin: '5px 0px 5px 10px',
  width: '94%',
},
valImgbn:{
    position: 'relative',
    right: '2%',
    top: '0%',
},
valImgds:{
    position: 'relative',
    right: '2%',
    top: '8%',
},
valImgicon:{
    position: 'relative',
    right: '56%',
    top: '35%',
},
valImgAd:{
    position: 'relative',
    right: '9%',
    top: '5%',
},
valImgtop:{
  position: 'relative',
  right: '1%',
  top: '0%',
},
radio1:{
  margin:'10px 10px 10px 10px'
},

formControl: {
  //margin: theme.spacing(1),
  minWidth:180,
},

}));
function ModleInterface(){
   const classes = useStyles();
   const [getCategoryId, setCategoryId]=useState('')
   const [getBrandId, setBrandId]=useState('')
   const [getModleName, setModleName]=useState('')
   const [getDescription, setDescription]=useState('')
   const [getMessage, setMessage]=useState('')
   const [getCategoryData, setCategoryData]=useState([]);
   const [getBrandData, setBrandData]=useState([]);
   
   const [getErrCategoryId , setErrCategoryId]=useState('')
   const [getErrBrandId, setErrBrandId]=useState('')
   const [getErrModleName, setErrModleName]=useState('')
   const [getErrDescription, setErrDescription]=useState('')
   const [getErrMessage, setErrMessage]=useState('')

  
 /* clear data*/
  const ClearData=()=>{
     setCategoryId('')
     setBrandId('')
     setModleName('')
     setDescription('')
     setMessage('')
     setErrCategoryId('')
     setErrBrandId('')
     setErrModleName('')
     setErrDescription('')
     setErrMessage('')
     
   }

 /* handle submit*/
 const handleSumit=async()=>{

  var err=false

  if(!checkRequire(getCategoryId))
     {
       err=true
       setErrCategoryId('image/cross.png')
     }
     if(checkRequire(getCategoryId))
     {
      setErrCategoryId('image/tick.png')
     }
    

   if(!checkRequire(getBrandId))
     {
       err=true
       setErrBrandId('image/cross.png')
     }
     if(checkRequire(getBrandId))
     {
        setErrBrandId('image/tick.png')
     }
   
     if(!checkRequire(getModleName))
     {
       err=true
       setErrModleName('image/cross.png')
     }
     if(checkRequire(getModleName))
     {
        setErrModleName('image/tick.png')
     }

     if(!checkRequire(getDescription))
     {
       err=true
       setErrDescription('image/cross.png')
     }
     if(checkRequire(getDescription))
     {
      setErrDescription('image/tick.png')
     }

    if(!err) {
            
    let body={'brandid':getBrandId,'modlename':getModleName,'description':getDescription} 
    var result=await postData('modle/modleInsertData',body)
    if(result)
    { //alert("Record Submitted")
    // setMessage('Record Submitted')
    Swal.fire(
      {icon: 'success',
      title: 'Record Submitted'},
    )
    }
    else{
  // alert('Fail to Submit Record')
    // setMessage('Fail to Submit Record')
    Swal.fire(
      ({
          icon: 'error',
          title: 'Oops...',
          text: 'Fail to Submit Record',
        })
      )
    }
  }
 }



useEffect(function(){
  fetchAllModel()
},[])

const fetchAllModel=async()=>{
  var list =await getData('category/displayallData')
  setCategoryData(list);
}

const fillCotegoryItem=()=>{
  return(
    getCategoryData.map((item,key)=>{
      return(
        <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
      )
    })
  )
}

const handleCategoryChange=(event)=>{
  setCategoryId(event.target.value);
  fetchBrand(event.target.value);
  }


const fetchBrand=async(categoryid)=>{
  var body={'categoryid':categoryid}
  var list =await postData('brand/brandDisplayName',body);
  setBrandData(list);
}  
 
const fillBrandItem=()=>{
  return(
    getBrandData.map((item,key)=>{
       return(
       <MenuItem value={item.brandid}>{item.brandname}</MenuItem>
       )})
    )
}
const handleBrandChange=(event)=>{
  setBrandId(event.target.value);
}


    return(
      <center>
        <div className={classes.root}>
          <Paper className={classes.mainPaper}>
             <Grid contianer spacing={2}> 
                <div className={classes.div1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper className={classes.paperheading}>
                        <Typography><b>Model Information</b></Typography>
                    </Paper>
                  </Grid>
                 </div> 
              </Grid>    
                <div className={classes.div2}>
                    <Grid container spacing={2}>
                     <Grid itme xs={6} sm={6} md={6} lg={6}>
                         <img src={getErrCategoryId}  width='12' height='12' className={classes.valImg}  />
                         <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Category Id</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={getCategoryId}
                            onChange={(event)=>handleCategoryChange(event)}
                          >
                           {fillCotegoryItem()}
                        </Select>
                      </FormControl>
                     </Grid>

                     <Grid itme xs={6} sm={6} md={6} lg={6}>
                         <img src={getErrBrandId}  width='12' height='12' className={classes.valImg}  />
                         <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Brand Id</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={getBrandId}
                            onChange={(event)=>handleBrandChange(event)}
                          >
                           {fillBrandItem()}
                        </Select>
                      </FormControl>
                     </Grid>
                     <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrModleName}  width='12' height='12' className={classes.valImgbn}  />
                        <TextField  id="standard-basic" label="Modle name" fullWidth value={getModleName} className={classes.outletaddress} onChange={(event)=>{setModleName(event.target.value)}} />  
                     </Grid>
                    <Grid itme xs={12} sm={12} md={12} lg={12}>
                    <img src={getErrDescription}  width='12' height='12' className={classes.valImgds}  />
                        <TextField id="standard-basic" value={getDescription} label="Description" fullWidth className={classes.outletaddress}
                        onChange={(event)=>{setDescription(event.target.value)}}/>
                    </Grid>
                      
                     </Grid>   
                      <div className={classes.div3}>
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <Button variant="contained" color="primary" className={classes.subBtn} onClick={()=>handleSumit()}>Save</Button>
                        </Grid>
                        <Grid item xs={6}>
                        <Button variant="contained" color="primary" onClick={()=>ClearData()} >Reset</Button>
                        </Grid>
                        <Grid item xs={12}><b>Message:</b>&nbsp;&nbsp;{getMessage}</Grid>
                    </Grid>  
                   </div>
                 </div>   
              </Paper>   
            </div>
        </center> 
    )
}

export default ModleInterface;