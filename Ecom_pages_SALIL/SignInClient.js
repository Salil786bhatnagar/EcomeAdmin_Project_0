import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MainPage from './MainPage';
import {checkMobile} from '../Checks';

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
    height: '570px',
    width:'1250px',
    //display: 'flex',
    //justifyContent:'center',
    //alignItems: 'center',
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
    backgroundColor:'white'
  },
  paper: {
    paddingLeft:120,
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    fontSize:32,
    color:'white'
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
 
}));

 function SignInClient(props) {
  const classes = useStyles();
  const [getMobile,setMobile]=useState('')
  const [getMsg,setMsg]=useState('')
  
    
  const SignInForm=()=>{            
    return(
      <div>
      <h1>Hello world</h1>    
      </div>            
    )
    }

    const handleSubmit=async()=>{
      var err=false;
     
    if(getMobile.length==0)
    {err=true
     setMsg(<font color='red' size='2'><i>Please enter your mobile no!</i></font>)
    }
      
    else if(!checkMobile(getMobile))
    { err=true
      setMsg(<font color='red' size='2'><i>Please enter valid mobile no!</i></font>) }
   
      else if(checkMobile(getMobile))
      { setMsg('')    }
  
      if(!err)
    { props.history.push({pathname:`/SignInUserForm`},getMobile); }
   
  }

 

  return (
    <Grid style={{backgroundColor:'#f1f2f6'}}><br/>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} style={{display:'flex',alignItems:'center',justifyContent:'center'}} />
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square style={{paddingTop:'50px'}}>
       
        <div className={classes.paper}>

          <Grid >
          <h1>Sign In</h1>
          <h4>Sign in to access your Orders, Offers and Wishlist.</h4>
          </Grid>

           <Grid style={{padding:'20px'}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              placeholder="Enter your mobile no"
              name="mobile"
              autoComplete="mobile"
              autoFocus
              size="small"
              value={getMobile} 
              onChange={(event)=>{setMobile(event.target.value)}}
              
            />
            {getMsg}
            </Grid>

            <Grid style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Button
              //type="submit"              
              color="primary"
              //className={classes.submit}
              //display= 'flex'
              //flexDirection= 'column'
              //alignItems= 'center'
              //onClick={<a href="/Mainpage">View React Commits</a>}
              onClick={()=>handleSubmit()}
            >
              
              <Avatar className={classes.blue}  >
              {/*<a href="/SignInUserForm" style={{ textDecoration: 'none' }} >*/}<font color="white" size='6' >&gt;</font>{/*</a>*/}  
            </Avatar>
            
            </Button>
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

export default SignInClient;