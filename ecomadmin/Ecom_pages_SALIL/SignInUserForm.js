import React,{useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {checkRequire,checkEmail,checkMobile,checkPassword} from '../Checks';
import { postData, getData,ServerURL } from '../FetchNodeServices';

import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from '@material-ui/core/styles';
import MainPage from './MainPage';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '1030px',
    width:'1250px',
   marginTop:90,
   marginLeft:'125px',  
  },
  
  image: {
    backgroundImage: 'url(images/signinclient.jpg)',
    backgroundRepeat: 'no-repeat',
    //backgroundColor:
      //theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    //backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor:'white',    
  },
  paper: {
    paddingLeft:120,
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    fontSize:32
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  blue: {
    backgroundColor:'#0984e3',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  button:{
      width:550,
  },
  margin: {
    margin: theme.spacing(1),
  },
  
  textField: {
    width: '30ch',
  },
 
}));

 function SignInUserForm(props) {
  const classes = useStyles();
  const [getFirstName,setFirstName]=useState('')
  const [getLastName,setLastName]=useState('')
  const [getEmail,setEmail]=useState('')  
  const [getOTP,setOTP]=useState('')
  const [getFirstNameMsg,setFirstNameMsg]=useState('')
  const [getLastNameMsg,setLastNameMsg]=useState('')
  const [getEmailMsg,setEmailMsg]=useState('')
  const [getPasswordMsg,setPasswordMsg]=useState('')
  const [getConfirmPasswordMsg,setConfirmPasswordMsg]=useState('')
  const [getOTPMsg,setOTPMsg]=useState('')
  const [getMsg,setMsg]=useState('')
      

//useEffect(function(){  
//   console.log("Hello",props.location.state)   
// },[])


 const [values, setValues] = React.useState({
  password: '',
  showPassword: false,
});

const [CPvalues, setCPValues] = React.useState({
  confirmPassword: '',
  showConfirmPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

////////////////////////////
const handleChangeCP = (prop) => (event) => {
  setCPValues({ ...CPvalues, [prop]: event.target.value });
};

const handleClickShowConfirmPassword = () => {
  setCPValues({ ...CPvalues, showConfirmPassword: !CPvalues.showConfirmPassword });
};

const handleMouseDownConfirmPassword = (event) => {
  event.preventDefault();
};

{/*const handleSubmit=()=>{
  if(values.password==CPvalues.confirmPassword)
  {alert('matched')}
  else
  {alert('not matched')}
}*/}

const handleSubmit=async()=>{
setFirstNameMsg('')
setLastNameMsg('')
setEmailMsg('')
setPasswordMsg('')
setConfirmPasswordMsg('')
setOTPMsg('')

  var err=false;
if(!checkRequire(getFirstName))
{err=true
  setFirstNameMsg(<font color='red' size='2'><i>Please enter your First Name</i></font>)    
}


else if(!checkRequire(getLastName))
{err=true
  setLastNameMsg(<font color='red' size='2'><i>Please enter your Last Name</i></font>)    
}

else if(getEmail.length==0)
{ err=true
  setEmailMsg(<font color='red' size='2'><i>Please enter your Email Id</i></font>) }

else if(!checkEmail(getEmail))
{err=true
  setEmailMsg(<font color='red' size='2'><i>Invalid Email Id</i></font>)    
}

else if(values.password.length==0)
{ err=true
  setPasswordMsg(<font color='red' size='2'><i>Please enter your Password</i></font>)    
}
else if(!checkPassword(values.password))
{err=true
  setPasswordMsg(<font color='red' size='2'><i>Password must be alphanumeric and between 8-20 characters! Allowed special characters are !@#$%^&*</i></font>)     
}

else if(CPvalues.confirmPassword.length==0)
{ err=true
   setConfirmPasswordMsg(<font color='red' size='2'><i>Please re-enter your password</i></font>)     
}

 else if(!checkPassword(CPvalues.confirmPassword))
{err=true
  setConfirmPasswordMsg(<font color='red' size='2'><i>Password must be alphanumeric and between 8-20 characters! Allowed special characters are !@#$%^&*</i></font>)     
}
  
else if(!checkRequire(getOTP))
{err=true
  setOTPMsg(<font color='red' size='2'><i>Please enter OTP</i></font>)    
}


else if(values.password!=CPvalues.confirmPassword)
{ err=true
  setConfirmPasswordMsg(<font color='red' size='2'><i>Confirm password you entered doesnot match to your original password
  </i></font>)     
}  
  
  if(!err)
{ 
  let body={mobileno:props.location.state,firstname:getFirstName,lastname:getLastName,emailaddress:getEmail,password:values.password}
        console.log(body)          
        var result= await postData('userdetails/addnewrecord',body)  
               
        if(result)
        {setMsg("Record Submitted ...")}
        else
        {setMsg("Fail to submit Record ..")}
    
 }
}


  return (
    <Grid style={{backgroundColor:'#f1f2f6'}}><br/>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/*</Grid><Grid item xs={false} sm={4} md={5} className={classes.image} ></Grid> */}
      <Grid item xs={false} sm={4} md={5} component={Paper} elevation={0} style={{padding:'20px'}}>
          <img src='images/signinclient.jpg'/>
          <div style={{height:'390px'}}>
          </div>

      </Grid>
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square style={{paddingTop:'50px'}}>
       
        <div className={classes.paper}>

          <Grid >
          <h1>Sign Up</h1>
          <h4>Please enter your details.</h4>
          </Grid>

           <Grid style={{padding:'10px',paddingRight:'50px'}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              placeholder="Your First Name"
              name="firstname"
              //autoComplete="email"
              autoFocus
              size="small"      
              onChange={(event)=>{setFirstName(event.target.value)}}        
            />
            {getFirstNameMsg}
            </Grid>

            <Grid style={{padding:'10px',paddingRight:'50px'}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              placeholder="Your Last Name"
              name="lastname"
              //autoComplete="email"
              autoFocus
              size="small"
              onChange={(event)=>{setLastName(event.target.value)}}              
            />
            {getLastNameMsg}
            </Grid>


            <Grid style={{padding:'10px',paddingRight:'50px'}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Enter your Email Id"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"       
              onChange={(event)=>{setEmail(event.target.value)}}       
            />
            {getEmailMsg}
            </Grid>


          <Grid style={{padding:'10px',paddingRight:'50px',paddingTop:'25px'}}>
          <FormControl fullWidth='true' size="small" >
          {/*<InputLabel htmlFor="outlined-adornment-password"></InputLabel>*/}
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder="Enter your Password"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            //labelWidth={70}
          />
        </FormControl>
        <small>Use 8 or more characters with a mix of letters & numbers</small><br/>
        {getPasswordMsg}
           </Grid>


           <Grid style={{padding:'10px',paddingRight:'50px',paddingTop:'25px'}}>
           <FormControl fullWidth='true' size="small" >
          {/*<InputLabel htmlFor="outlined-adornment-password"></InputLabel>*/}
          <OutlinedInput
            id="outlined-adornment-password"
            type={CPvalues.showConfirmPassword ? 'text' : 'confirmPassword'}
            value={CPvalues.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChangeCP('confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {CPvalues.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            //labelWidth={70}
          />
          {getConfirmPasswordMsg}
        </FormControl>
          </Grid>


          <Grid style={{padding:'25px'}}>
          <h4><img src='images/whatsapp.jpg' width='30' height='30'/>&nbsp;&nbsp;&nbsp;&nbsp;Enable order updates and important information on 
          Whatsapp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FormControlLabel control={<Checkbox name="checkedC" />} /></h4>      
          <Divider orientation="horizontal" />         
          </Grid>
            
         
          <Grid style={{padding:'10px'}}>
             <h2>Verify</h2> 
            <small>We have sent 6 digit OTP on <font size='2'><b>+{props.location.state}</b></font>
             <font color='red' style={{paddingLeft:'230px'}} >Change</font></small>
          </Grid>  

          <Grid style={{padding:'10px',paddingRight:'50px'}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="otp"
              placeholder="Enter your OTP"
              name="otp"
              //autoComplete="email"
              autoFocus
              size="small"      
              onChange={(event)=>{setOTP(event.target.value)}}                             
            />
            {getOTPMsg}
            <small style={{paddingLeft:'350px'}}><font color='red'>Resend OTP</font></small>
            
            </Grid>

            <Grid style={{padding:'10px'}}>
             <Button variant="contained"  width='200' color="primary" className={classes.button} onClick={()=>handleSubmit()}>
              Verify
             </Button>
             {getMsg}
            </Grid>

          
        </div>
      </Grid>
           
    </Grid>

  <br/>
  <Grid item xs={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
  <small>By continuing you agree to our&nbsp;<font color='red'> Terms of service</font>&nbsp;
   <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   and<font color='red' >&nbsp; Privacy & Legal Policy.</font></small>
  </Grid><br/>


  </Grid>


  );
}

export default SignInUserForm;