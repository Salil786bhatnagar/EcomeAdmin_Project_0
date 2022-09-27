import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItems from './ListItems';
import IndexPage from './IndexPage';
import CategoryInterface from '../Category/CategoryInterface';
import DisplayAllCategories from '../Category/DisplayAllCategories';
import BrandInterface from '../Brand/BrandInterface';
import DisplayAllBrand from '../Brand/DisplayAllBrand';
import OutletInterface from '../Outlet/OutletInterface';
import DisplayAllOutlets from '../Outlet/DisplayAllOutlets';
import ModleInterface from '../Modle/ModleInterface';
import DisplayAllModle from '../Modle/DisplayAllModle';
import {getData, ServerURL} from '../FetchServices';
import Avatar from '@material-ui/core/Avatar';
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // backgroundColor:'#ececd9',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [ShowComponents, setComponet]= React.useState(<IndexPage/>);
  const [admin,setAdmin]=React.useState([])
  const CheckSession=async()=>{
  var result=await getData('admin/chktoken')
  if(!result)
  {
   props.history.replace({pathname:'/Signin'})
  }
  else{
    var admin=JSON.parse(localStorage.getItem('admin'))
   console.log("ADMIN",admin)
   setAdmin(admin)
  }
}

useEffect(function(){
  CheckSession();
},[])




  const handleComponents=async(ShowData)=>{
    switch(ShowData)
    { case 0:
      setComponet(<IndexPage/>);
      break
      case 1: 
      setComponet(<CategoryInterface/>)
      break
      case 2:
      setComponet(<DisplayAllCategories/>)
      break
      case 3:
      setComponet(<BrandInterface/>) 
      break
      case 4:
       setComponet(<DisplayAllBrand/>) 
      break
      case 5:
        setComponet(<OutletInterface/>)
       break
       case 6:
         setComponet(<DisplayAllOutlets/>)
       break
       case 7:
         setComponet(<ModleInterface/>)  
        break
       case 8:
         setComponet(<DisplayAllModle/>)  
         break
       case 9:
        var result= await getData('admin/logout')
        props.history.replace({pathname:'/SignIn'})
        break
    }
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          <div className={classes.heading}>
             {/* <div>
              Admin Dashboard
              </div> */}
              <div>
                {admin.adminname}
              </div>
            </div>
          </Typography>

           <Avatar alt="Remy Sharp" src={`${ServerURL}/images/${admin.picture}`} className={classes.large} />

          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List><ListItems handle_Components={handleComponents}/></List>
       </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
              {ShowComponents}
              </Grid>
            </Grid>
           <div>
            <Box pt={12}>
              <Copyright />
            </Box>
            </div>  
          </Container>
      </main>
    </div>
  );
}