import React,{useState} from 'react';
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
import {postDataAndImage} from '../FetchServices';
import {checkRequire} from '../Checks';
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
    height:'600px',
  },
  paperheading:{
    backgroundColor:'#7d7979',
    height:'10px',
    padding:'20px'
  },
  div1:{
    padding:'34px 30px 2px'
  },
  div2:{
    padding:'10px 30px',
    margin:'0px'
  },
  uploadbtn1:{
   margin:'0px 35px 0px 0px',
  },

  uploadbtn2:{
    margin:'0px 50px 0px 0px',
  },

  imgAvater:{
    margin: '5px 55px',
    padding: '4px 4px 4px 4px',
  },

  div3:{
    position:'relative',
    right:'0%',
    color:'black',
    margin:'5px 50px 0px 0px',
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
  valImg:{
    position: 'relative',
    right: '53%',
    top: '20%',
  },

}));
function CategoryInterface(){
   const classes = useStyles();
   const [getCotegoryName, setCotegoryName]=useState('')
   const [getDescription, setDescription]=useState('')
   const [getIcon, setIcon]=useState({icon:'', file:''})
   const [getAd, setAd]=useState({icon:'',file:''})
   const [getStatus, setStatus]=useState('')
   const [getMessage, setMessage]=useState('')
   const [getErrorCn,setErrorCn]=useState('')
   const [getErrorDes,setErrorDes]=useState('')
   const [getErrorIcon,setErrorIcon]=useState('')
   const [getErrorAd,setErrorAd]=useState('')
   const [getErrorAdStatus,setErrorAdStatus]=useState('')

  /* handle in icon*/
  const handleIcon=(event)=>{
    setIcon({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})

   }
  /* handle in ad*/
   const handleAd=(event)=>{
     setAd({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})

  }
  /* handle in status*/
  const handleStatus=(event)=>{
    setStatus(event.target.value)
  }

  /* clear data*/
  const ClearData=()=>{
    setCotegoryName('')
    setDescription('')
    setIcon({icon:'', file:''})
    setAd({icon:'', file:''})
    setStatus('')
    setMessage('')
    setErrorCn('')
    setErrorDes('')
    setErrorIcon('')
    setErrorAd('')
    setErrorAdStatus('')
   
  }

 /* handle submit*/
 const handleSumit=async()=>{
   var err=false;
   if(!checkRequire(getCotegoryName))
    {err=true
     setErrorCn('/image/cross.png')
    }
    if(checkRequire(getCotegoryName))
    {setErrorCn('/image/tick.png')
    }

    if(!checkRequire(getDescription))
    {err=true
     setErrorDes('/image/cross.png')
    }
    if(checkRequire(getDescription))
    {setErrorDes('/image/tick.png')
    }

    if(!checkRequire(getIcon.icon))
      { err=true
        setErrorIcon('/image/cross.png')
      }

     if(checkRequire(getIcon.icon))
      { 
        setErrorIcon('/image/tick.png')
      }
      
      if(!checkRequire(getAd.icon))
       { err=true
         setErrorAd('/image/cross.png')
        
      }

      if(checkRequire(getAd.icon))
       { 
         setErrorAd('/image/tick.png')
       }

       if(!checkRequire(getStatus))
        { err=true
          setErrorAdStatus('/image/cross.png')
         
       }
   
       if(checkRequire(getStatus))
        { 
          setErrorAdStatus('/image/tick.png')
        }
          
    
    if(!err)
    { 
   var formData =new FormData()
   formData.append('categoryname',getCotegoryName)
   formData.append('description',getDescription)
   formData.append('icon',getIcon.file)
   formData.append('ad',getAd.file)
   formData.append('adstatus',getStatus)
   var config={header:{'content-type':'multipart/form-data'}}
   var result=await postDataAndImage('category/addnewrecord',formData,config)

    if(result)
    { //alert("Record Submitted")
    setMessage('Record Submitted')
    }
    else{
  // alert('Fail to Submit Record')
    setMessage('Fail to Submit Record')
    }
  }
 }

    return(
      <center>
        <div className={classes.root}>
          <Paper className={classes.mainPaper}>
             <Grid contianer spacing={2}> 
                <div className={classes.div1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper className={classes.paperheading}>
                        <Typography><b>Add Category </b></Typography>
                    </Paper>
                  </Grid>
                 </div> 
              </Grid>    
                <div className={classes.div2}>
                 <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}> 
                      <img src={getErrorCn} width='12' height='12' className={classes.valImg} />
                      <TextField label="Category Name" fullWidth value={getCotegoryName} onChange={(event)=>{setCotegoryName(event.target.value)}}/>  
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <img src={getErrorDes} width='12' height='12' className={classes.valImg} />
                      <TextField label="Description" fullWidth value={getDescription}  onChange={(event)=>{setDescription(event.target.value)}}/>
                    </Grid> 

                      <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img src={getErrorIcon} width='12' height='12' className={classes.valImg} />
                      <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(event)=>handleIcon(event)}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span" className={classes.uploadbtn1} startIcon={<CloudUploadIcon / >}>
                        Upload Icon
                      </Button>
                    </label>
                      </Grid>
                      <Grid item xs={6} className={classes.container}>
                       <Avatar alt="Remy Sharp" variant='rounded' style={{width:70,height:50}} src={getIcon.icon} />
                      </Grid>
                    
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img src={getErrorAd} width='12' height='12' className={classes.valImg} />
                      <input
                      accept="image/*"
                      className={classes.input}
                      id="ad-contained-button-file"
                      multiple
                      type="file"
                      onChange={(event)=>handleAd(event)}
                    />
                    <label htmlFor="ad-contained-button-file">
                      <Button variant="contained" color="primary" component="span" className={classes.uploadbtn2} startIcon={<CloudUploadIcon / >}>
                        Upload Ad
                      </Button>
                    </label>
                    </Grid>
                    <Grid item xs={6} className={classes.container}>
                    <Avatar alt="Remy Sharp" variant='rounded' style={{width:70,height:55}} src={getAd.icon} />
                    </Grid>
                  </Grid>   
                  <div className={classes.div3}>
                  <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                  <img src={getErrorAdStatus} width='12' height='12' className={classes.valImg} />
                    <div>Ad Status:</div>    
                    <Radio
                  checked={getStatus === 'Yes'}
                    //onChange={handleChange}
                    value="Yes"
                    name="radio-button-demo"
                    onChange={(event)=>{handleStatus(event)}}
                  // inputProps={{ 'aria-label': 'A' }}
                  /> Yes
                  <Radio
                    checked={getStatus === 'No'}
                    //onChange={handleChange}
                    value="No"
                    name="radio-button-demo"
                    onChange={(event=>{handleStatus(event)})}
                    //inputProps={{ 'aria-label': 'B' }}
                  /> No
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" className={classes.subBtn} onClick={()=>handleSumit()}>Save</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" onClick={()=>ClearData()}>Reset</Button>
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

export default CategoryInterface;