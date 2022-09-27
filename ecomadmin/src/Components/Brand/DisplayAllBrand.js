import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import {getData,ServerURL} from '../FetchServices';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {postDataAndImage,postData} from '../FetchServices';
import {checkRequire} from '../Checks';
const useStyles = makeStyles((theme)=>({
mainTable:{
  padding:'35px 35px 35px 35px',
  backgroundColor: '#efeaea',
},
root:{
  padding:theme.spacing(3),
  textAlign:'center',
},
mainPaper:{
  color:'#ff8520',
  backgroundColor:'#63596396',
  height:'550px',
},
paperheading:{
  backgroundColor:'#7d7979',
  height:'10px',
  padding:'20px'
},
div1:{
  padding:'0px 0px 15px'
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
  right: '5%',
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



function DisplayAllBrand(){

    const classes = useStyles();
    const [getList, setList]=useState([])
    const [getOpen, setOpen]=useState(false)
    const [getCotegoryId, setCategoryId]=useState('')
    const [getModleName, setBrandName]=useState('')
    const [getDescription, setDescription]=useState('')
    const [getIcon, setIcon]=useState({icon:'', file:''})
    const [getAd, setAd]=useState({icon:'',file:''})
    const [getTopbrand, setTopbrand]=useState('')
    const [getNewbrand, setNewbrand]=useState('')
    const [getStatus, setStatus]=useState('')
    const [getMessage, setMessage]=useState('')
    
    const [getErrCotegoryId, setErrCategoryId]=useState('')
    const [getErrModleName, setErrBrandName]=useState('')
    const [getErrDescription, setErrDescription]=useState('')
    const [getErrIcon, setErrIcon]=useState({icon:'', file:''})
    const [getErrAd, setErrAd]=useState({icon:'',file:''})
    const [getErrTopbrand, setErrTopbrand]=useState('')
    const [getErrNewbrand, setErrNewbrand]=useState('')
    const [getErrStatus, setErrStatus]=useState('')

    const [getstate, setState]=useState({
        columns: [
          { title: 'Id', field: 'brandid'},
          { title: 'category Id', field: 'categoryid'},
          { title: 'Brand Name', field: 'brandname'},
          { title: 'Description', field: 'description'},
          { title: 'picture',render: rowData => <img src={`${ServerURL}/images/${rowData.picture}`} style={{width: 50, borderRadius: '20%'}}/>},
          { title: 'Ad',render: rowData => <img src={`${ServerURL}/images/${rowData.ad}`} style={{width: 50, borderRadius: '20%'}}/>},
          { title: 'Topbrand', field: 'topbrand'},
          { title: 'Newbrand', field: 'newbrand'},
          { title: 'Status',field: 'adstatus'},
        ]
      });
     
   /* fetch all modle data */  
    const fetchData =async()=>{
        let list= await getData('brand/brandalldata')
        setList(list)
    }

    /* delete single record */
     const handleDelete =async(oldData)=>{
       let body={brand_id:oldData.brandid}
       await postData('brand/deleteRecord',body);
     }

    useEffect(function(){
        fetchData()
    },[])

    const handleClickOpen=()=>{
      setOpen(true)
    }

    const handleClose=()=>{
      setOpen(false)
    }

    /* handle in icon*/
  const handleIcon=(event)=>{
    setIcon({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})

   }
  /* handle in ad*/
   const handleAd=(event)=>{
     setAd({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
  }

  /* handle in topbarand*/
  const handleTopbrand=(event)=>{
   setTopbrand(event.target.value)
}
  
  /* handle in newbrand */
  const handleNewbrand=(event)=>{
   setNewbrand(event.target.value)
  }

  /* handle in status*/
  const handleStatus=(event)=>{
    setStatus(event.target.value)
  }

  const handleCategoryChange=(event)=>{
    setCategoryId(event.target.value)
    }


    const fillCategoryItem=()=>{

    }


 /* clear data*/
  const ClearData=()=>{
     setCategoryId('')
     setBrandName('')
     setDescription('')
     setIcon({icon:'', file:''})
     setAd({icon:'', file:''})
     setTopbrand('')
     setNewbrand('')
     setStatus('')
     setMessage('')
     setErrCategoryId('')
     setErrBrandName('')
     setErrDescription('')
     setErrIcon('')
     setErrAd('')
     setErrTopbrand('')
     setErrNewbrand('')
     setErrStatus('')
   }

 /* handle submit*/
 const handleEditData=async()=>{

  var err=false
   if(!checkRequire(getCotegoryId))
     {
       err=true
       setErrCategoryId('image/cross.png')
     }
     if(checkRequire(getCotegoryId))
     {
       setErrCategoryId('image/tick.png')
     }
   
     if(!checkRequire(getModleName))
     {
       err=true
       setErrBrandName('image/cross.png')
     }
     if(checkRequire(getModleName))
     {
      setErrBrandName('image/tick.png')
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

     if(!checkRequire(getIcon.icon))
     {
       err=true
       setErrIcon('image/cross.png')
     }
     if(checkRequire(getIcon.icon))
     {
      setErrIcon('image/tick.png')
     }

     if(!checkRequire(getAd.icon))
     {
       err=true
       setErrAd('image/cross.png')
     }
     if(checkRequire(getAd.icon))
     {
      setErrAd('image/tick.png')
     }


     if(!checkRequire(getTopbrand))
     {
       err=true
       setErrTopbrand('image/cross.png')
     }
     if(checkRequire(getTopbrand))
     {
      setErrTopbrand('image/tick.png')
     }


     if(!checkRequire(getNewbrand))
     {
       err=true
       setErrNewbrand('image/cross.png')
     }
     if(checkRequire(getNewbrand))
     {
      setErrNewbrand('image/tick.png')
     }

     if(!checkRequire(getStatus))
     {
       err=true
       setErrStatus('image/cross.png')
     }
     if(checkRequire(getStatus))
     {
      setErrStatus('image/tick.png')
     }

   
    if(!err) {
   var formData =new FormData()
      formData.append('categoryid',getCotegoryId)
      formData.append('brandname',getModleName)
      formData.append('description',getDescription)
      formData.append('picture',getIcon.file)
      formData.append('ad',getAd.file)
      formData.append('topbrand',getTopbrand)
      formData.append('newbrand',getNewbrand)
      formData.append('adstatus',getStatus)
   var config={header:{'content-type':'multipart/form-data'}}
   var result=await postDataAndImage('brand/brandInformation',formData,config)

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

    const showData=()=>{
       
       return(
            <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Open alert dialog
            </Button> */}
            <Dialog
              open={getOpen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title"><center>{"Update Brand"}</center></DialogTitle>   
            <DialogContent>
              <div className={classes.root}>
                <Paper className={classes.mainPaper}>
                  <Grid contianer spacing={2}> 
                       <div className={classes.div1}>
                        {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Paper className={classes.paperheading}>
                              <Typography><b>Brand's</b></Typography>
                          </Paper>
                        </Grid> */}
                      </div>  
                    </Grid>    
                      <div className={classes.div2}>
                          <Grid container spacing={2}>
                          <Grid itme xs={6} sm={6} md={6} lg={6}>
                              <img src={getErrCotegoryId}  width='12' height='12' className={classes.valImg}  />
                              <FormControl className={classes.formControl}>
                                  <InputLabel id="demo-simple-select-label">Category Id</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={getCotegoryId}
                                  onChange={(event)=>handleCategoryChange(event)}
                                >
                                {fillCategoryItem()}
                              </Select>
                            </FormControl>
                          </Grid>


                          <Grid itme xs={6} sm={6} md={6} lg={6}>
                              <img src={getErrModleName}  width='12' height='12' className={classes.valImgbn}  />
                              <TextField label="Brand name" value={getModleName} onChange={(event)=>setBrandName(event.target.value)}/>  
                          </Grid>
                          <Grid itme xs={12} sm={12} md={12} lg={12}>
                            <img src={getErrDescription}  width='12' height='12' className={classes.valImgds}  />
                              <TextField id="standard-basic" value={getDescription} label="Description" fullWidth className={classes.outletaddress}
                              onChange={(event)=>{setDescription(event.target.value)}}/>
                          </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                            <img src={getErrIcon}  width='12' height='12' className={classes.valImgicon}  />  
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
                            <img src={getErrAd}  width='12' height='12' className={classes.valImgAd}  />
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

                        <div className={classes.topbrand}>

                        <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                        <div>Top Brand:</div>    
                        <img src={getErrTopbrand}  width='12' height='12' className={classes.valImgtop}  />
                        <Radio
                        checked={getTopbrand === 'Yes'}
                        onChange={(event)=>{handleTopbrand(event)}}
                        value="Yes"
                        name="radio-button-demo"
                        
                        // inputProps={{ 'aria-label': 'A' }}
                        /> Yes
                        <Radio
                        className={classes.radio2}
                        checked={getTopbrand === 'No'}
                        onChange={(event)=>{handleTopbrand(event)}}
                        value="No"
                        name="radio-button-demo"
                      
                        //inputProps={{ 'aria-label': 'B' }}
                        /> No
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <div>New Brand:</div>    
                        <img src={getErrNewbrand}  width='12' height='12' className={classes.valImgtop}  />
                        <Radio
                        checked={getNewbrand === 'Yes'}
                        onChange={(event)=>{handleNewbrand(event)}}
                        value="Yes"
                        name="radio-button-demo"
        
                        // inputProps={{ 'aria-label': 'A' }}
                        /> Yes
                        <Radio
                        checked={getNewbrand === 'No'}
                        onChange={(event)=>{handleNewbrand(event)}}
                        value="No"
                        name="radio-button-demo"
        
                        //inputProps={{ 'aria-label': 'B' }}
                        /> No
                        </Grid>
                      </Grid>
                      </div>

                        <div className={classes.div3}>
                        <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <div>Ad Status:</div>    
                          <img src={getErrNewbrand}  width='12' height='12' className={classes.valImgtop}  />
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
                        <Button variant="contained" color="primary" className={classes.subBtn} onClick={()=>handleEditData()}>Save</Button>
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
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
       );
    }

  
    return(
     <div className={classes.mainTable}>
       <MaterialTable
      title="Brand List"
      columns={getstate.columns}
      data={getList}
      actions={[
        {
          icon: 'edit',
          tooltip: 'Edit',
          onClick: (event, rowData) => handleClickOpen(rowData)
        }
      ]}

      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
          
      
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();

              
                const data = [...getList];
                data.splice(data.indexOf(oldData), 1);
                setList(data)
                handleDelete(oldData);
            }, 600);
          }),
      }}
    />
    {showData()}
      </div>
      
    )
    
}

export default DisplayAllBrand;