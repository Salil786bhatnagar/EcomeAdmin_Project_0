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
  offer:{
    position:'relative',
    right:'25%',
    width:'35%',
  },
  mainPaper:{
    color:'#131212',
    backgroundColor:'#63596396',
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
//   uploadbtn1:{
//    margin:'0px 30px 0px 11px',
//   },

//   uploadbtn2:{
//     margin:'6px 46px 0px 0px',
//   },

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
function Productitem(){
   const classes = useStyles();
   const [getBanderId, setBanderId]=useState('')
   const [getCategoryId, setCategoryId]=useState('')
   const [getBrandId, setBrandId]=useState('')
   const [getModleId, setModleId]=useState('')
   const [getProductName, setProductName]=useState('')
   const [getDescription, setDescription]=useState('')
   const [getPrice, setPrice]=useState('')
   const [getOfferPrice, setOfferPrice]=useState('')
   const [getDelivery, setDelivery]=useState('')
   const [getRatings, setRatings]=useState('')
   const [getColor, setColor]=useState('')
  //  const [getOfferType, setOfferType]=useState('')
   const [getStock, setStock]=useState('')
   const [getIcon, setIcon]=useState({icon:'', file:''})
   const [getAd, setAd]=useState({icon:'',file:''})
   const [getAdStatus, setAdStatus]=useState('')
   const [getVenderStatus, setVenderStatus]=useState('')
   const [getCategoryData, setCategoryData]=useState([])
   const [getBrandData, setBrandData]=useState([])
   const [getModleData, setModleData]=useState([])
   const [getMessage, setMessage]=useState('')

   const [getOfferType, setOfferType] = React.useState('');
   const [open, setOpen] = React.useState(false); 

   const [getErrBanderId, setErrBanderId]=useState('')
   const [getErrCategoryId, setErrCategoryId]=useState('')
   const [getErrBrandId, setErrBrandId]=useState('')
   const [getErrModleId, setErrModleId]=useState('')
   const [getErrProductName, setErrProductName]=useState('')
   const [getErrDescription, setErrDescription]=useState('')
   const [getErrPrice, setErrPrice]=useState('')
   const [getErrOfferPrice, setErrOfferPrice]=useState('')
   const [getErrDelivery, setErrDelivery]=useState('')
   const [getErrRatings, setErrRatings]=useState('')
   const [getErrColor, setErrColor]=useState('')
   const [getErrOfferType, setErrOfferType]=useState('')
   const [getErrStock, setErrStock]=useState('')
   const [getErrIcon, setErrIcon]=useState({icon:'', file:''})
   const [getErrAd, setErrAd]=useState({icon:'',file:''})
   const [getErrAdStatus, setErrAdStatus]=useState('')
   const [getErrVenderStatus, setErrVenderStatus]=useState('')
   const [getErrMessage, setErrMessage]=useState('')

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
    setAdStatus(event.target.value)
  }

  /* handle in status*/
  const handleVenderStatus=(event)=>{
    setVenderStatus(event.target.value)
  }
  
  const handleChange=(event) => {
    setOfferType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleOpen = () => {
    setOpen(true);
  };

 /* clear data*/
const ClearData=()=>{
    setBanderId('')
    setCategoryId('')
    setBrandId('')
    setModleId('')
    setProductName('')
    setDescription('')
    setPrice('')
    setOfferPrice('')
    setDelivery('')
    setRatings('')
    setColor('')
    setOfferType('')
    setStock('')
    setIcon({icon:'', file:''})
    setAd({icon:'', file:''})
    setAdStatus('')
    setVenderStatus('')
}

 /* handle submit*/
 const handleSumit=async()=>{
  var err=false

    // if(!checkRequire(getBanderId))
    // {
    //     err=true
    //     setErrBanderId('image/cross.png')
    // }
    // if(checkRequire(getBanderId))
    // {
    //     setErrBanderId('image/tick.png')
    // }


    // if(!checkRequire(getCategoryId))
    // {
    //     err=true
    //     setErrCategoryId('image/cross.png')
    // }
    //  if(checkRequire(getCategoryId))
    //  {
    //   setErrCategoryId('image/tick.png')
    //  }

    
    // if(!checkRequire(getBrandId))
    //  {
    //    err=true
    //    setErrBrandId('image/cross.png')
    //  }
    //  if(checkRequire(getBrandId))
    //  {
    //    setErrBrandId('image/tick.png')
    //  }


    //  if(!checkRequire(getModleId))
    //  {
    //    err=true
    //    setErrModleId('image/cross.png')
    //  }
    //  if(checkRequire(getModleId))
    //  {
    //     setErrModleId('image/tick.png')
    //  }


    //  if(!checkRequire(getProductName))
    //  {
    //    err=true
    //    setErrProductName('image/cross.png')
    //  }
    //  if(checkRequire(getProductName))
    //  {
    //     setErrProductName('image/tick.png')
    //  }

    //  if(!checkRequire(getDescription))
    //  {
    //    err=true
    //    setErrDescription('image/cross.png')
    //  }
    //  if(checkRequire(getDescription))
    //  {
    //     setErrDescription('image/tick.png')
    //  }


    //  if(!checkRequire(getPrice))
    //  {
    //    err=true
    //    setErrPrice('image/cross.png')
    //  }  
    //  if(checkRequire(getPrice))
    //  {
    //   setErrPrice('image/tick.png')
    //  }


    //  if(!checkRequire(getOfferPrice))
    //  {
    //    err=true
    //    setErrOfferPrice('image/cross.png')
    //  }  
    //  if(checkRequire(getOfferPrice))
    //  {
    //     setErrOfferPrice('image/tick.png')
    //  }

     
    //  if(!checkRequire(getDelivery))
    //  {
    //    err=true
    //    setErrDelivery('image/cross.png')
    //  } 
    //  if(checkRequire(getDelivery))
    //  {
    //     setErrDelivery('image/tick.png')
    //  }


    //  if(!checkRequire(getRatings))
    //  {
    //    err=true
    //    setErrRatings('image/cross.png')
    //  } 
    //  if(checkRequire(getRatings))
    //  {
    //     setErrRatings('image/tick.png')
    //  }


    //  if(!checkRequire(getColor))
    //  {
    //    err=true
    //    setErrColor('image/cross.png')
    //  } 
    //  if(checkRequire(getColor))
    //  {
    //     setErrColor('image/tick.png')
    //  }


    //  if(!checkRequire(getOfferType))
    //  {
    //    err=true
    //    setErrOfferType('image/cross.png')
    //  } 
    //  if(checkRequire(getOfferType))
    //  {
    //     setErrOfferType('image/tick.png')
    //  }


    //  if(!checkRequire(getStock))
    //  {
    //    err=true
    //    setErrStock('image/cross.png')
    //  } 
    //  if(checkRequire(getStock))
    //  {
    //     setErrStock('image/tick.png')
    //  }  

    //  if(!checkRequire(getIcon.icon))
    //  {
    //    err=true
    //    setErrIcon('image/cross.png')
    //  }
    //  if(checkRequire(getIcon.icon))
    //  {
    //   setErrIcon('image/tick.png')
    //  }


    //  if(!checkRequire(getAd.icon))
    //  {
    //    err=true
    //    setErrAd('image/cross.png')
    //  }
    //  if(checkRequire(getAd.icon))
    //  {
    //   setErrAd('image/tick.png')
    //  }

    //  if(!checkRequire(getAdStatus))
    //  {
    //    err=true
    //    setErrAdStatus('image/cross.png')
    //  }
    //  if(checkRequire(getAdStatus))
    //  {
    //   setErrAdStatus('image/tick.png')
    //  }


    //  if(!checkRequire(getVenderStatus))
    //  {
    //    err=true
    //    setErrVenderStatus('image/cross.png')
    //  }
    //  if(checkRequire(getVenderStatus))
    //  {
    //   setErrVenderStatus('image/tick.png')
    //  }


    //  if(!checkRequire(getMessage))
    //  {
    //    err=true
    //    setErrMessage('image/cross.png')
    //  }
    //  if(checkRequire(getMessage))
    //  {
    //   setErrMessage('image/tick.png')
    //  }

    // if(!err) {
            
      var formData =new FormData()
          formData.append('bander_id',getBanderId)
          formData.append('categoryid',getCategoryId)
          formData.append('brandid',getBrandId)
          formData.append('modleid',getModleId)
          formData.append('productname',getProductName)
          formData.append('description',getDescription)
          formData.append('price',getPrice)
          formData.append('offerprice',getOfferPrice)
          formData.append('delivery',getDelivery)
          formData.append('rating',getRatings)
          formData.append('color',getColor)
          formData.append('offertype',getOfferType)
          formData.append('stock',getStock)
          formData.append('picture',getIcon.file)
          formData.append('ad',getAd.file)
          formData.append('ad_status',getAdStatus)
          formData.append('vender_status',getVenderStatus)

          var config ={header:{'content-type':'multipart/form-data'}}
          var result = await postDataAndImage('productitem/productitem_data',formData,config)
   
          if(result){
            // setMessage('Record Submitted...')
            Swal.fire(
              {icon: 'success',
              title: 'Record Submitted'},
            )
          }
           else{
            //  setMessage('Fail to submit record...')
            Swal.fire(
              ({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Fail to Submit Record',
                })
              )
        }
    //  }
 }

useEffect(function(){
  fetchAllProductitem()
}, [])

const fetchAllProductitem=async()=>{
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
  fetchModle(event.target.value);
}

// modle...

const fetchModle=async(brandid)=>{
  var body={'brandid':brandid}
  var list =await postData('modle/model_data',body);
  setModleData(list);
}  

const fillModleItem=()=>{
  return(
    getModleData.map((item,key)=>{
       return(
       <MenuItem value={item.modleid}>{item.modlename}</MenuItem>
       )})
    )
}
const handleModleChange=(event)=>{
  setModleId(event.target.value);
}

    return(
      <center>
        <div className={classes.root}>
          <Paper className={classes.mainPaper}>
             <Grid contianer spacing={2}> 
                <div className={classes.div1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper className={classes.paperheading}>
                        <Typography><b>Product Item</b></Typography>
                    </Paper>
                  </Grid>
                 </div> 
              </Grid>    
                <div className={classes.div2}>
                 <Grid container spacing={2}>
                     <Grid itme xs={12} sm={12} md={12} lg={12}>
                      <img src={getErrBanderId}  width='12' height='12' className={classes.valImgbn}  />
                        <TextField  id="standard-basic" label="Bander Id" fullWidth value={getBanderId} className={classes.outletaddress} onChange={(event)=>{setBanderId(event.target.value)}} />  
                     </Grid>

                     <Grid itme xs={4} sm={4} md={4} lg={4}>
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

                     <Grid itme xs={4} sm={4} md={4} lg={4}>
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

                     <Grid itme xs={4} sm={4} md={4} lg={4}>
                      <img src={getErrModleId}  width='12' height='12' className={classes.valImg}  />
                         <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Modle </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={getModleId}
                            onChange={(event)=>handleModleChange(event)}
                          >
                            {fillModleItem()}
                          </Select>
                         </FormControl>
                      </Grid>

                      <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrProductName}  width='12' height='12' className={classes.valImgbn}  />
                          <TextField  id="standard-basic" label="Product Name" fullWidth value={getProductName} className={classes.outletaddress} onChange={(event)=>{setProductName(event.target.value)}} />  
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrDescription}  width='12' height='12' className={classes.valImgds}  /> 
                          <TextField id="standard-basic" value={getDescription} label="Description" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setDescription(event.target.value)}}/>
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrPrice}  width='12' height='12' className={classes.valImgds}  />
                          <TextField id="standard-basic" value={getPrice} label="Price" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setPrice(event.target.value)}}/>
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrOfferType}  width='12' height='12' className={classes.valImgds}  />
                          <TextField id="standard-basic" value={getOfferPrice} label="Offer Price" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setOfferPrice(event.target.value)}}/>
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrDelivery}  width='12' height='12' className={classes.valImgds}  />
                          <TextField id="standard-basic" value={getDelivery} label="Delivery" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setDelivery(event.target.value)}}/>
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrRatings}  width='12' height='12' className={classes.valImgds}  />
                          <TextField id="standard-basic" value={getRatings} label="Ratings" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setRatings(event.target.value)}}/>
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrColor}  width='12' height='12' className={classes.valImgds}  />
                          <TextField id="standard-basic" value={getColor} label="Color" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setColor(event.target.value)}}/>
                        </Grid>

                        <Grid itme xs={6} sm={6} md={6} lg={6}>
                        <img src={getErrOfferType}  width='12' height='12' className={classes.valImgds}  />
                          {/* <TextField id="standard-basic" value={getOfferType} label="Offer Type" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setOfferType(event.target.value)}}/> */}
                          
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                            <Select
                              labelId="demo-controlled-open-select-label"
                              id="demo-controlled-open-select"
                              open={open}
                              onClose={handleClose}
                              onOpen={handleOpen}
                              value={getOfferType}
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={'No offer'}>No Offer</MenuItem>
                              <MenuItem value={'Discounted'}>Discounted</MenuItem>
                              <MenuItem value={'Cashback'}>Cashback</MenuItem>
                              <MenuItem value={'Upgraded'}>Upgraded</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid itme xs={12} sm={12} md={12} lg={12}>
                        <img src={getErrIcon}  width='12' height='12' className={classes.valImgds}  />
                          <TextField id="standard-basic" value={getStock} label="Stock" fullWidth className={classes.outletaddress}
                          onChange={(event)=>{setStock(event.target.value)}}/>
                        </Grid>
                    

                    <Grid container spacing={2}> 
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                      <div className={classes.upload}>  
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
                        </div>
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
                        <Button variant="contained" color="primary" component="span" className={classes.uploadbtn2} startIcon={<CloudUploadIcon/>}>
                          Upload Ad
                        </Button>
                      </label>
                    </Grid>
                    <Grid item xs={6} className={classes.container}>
                    <Avatar alt="Remy Sharp" variant='rounded' style={{width:70,height:55}} src={getAd.icon} />
                    </Grid> 
                   </Grid>   
                   <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                          <div>Ad Status:</div>    
                         <img src={getErrAdStatus}  width='12' height='12' className={classes.valImgtop}  />
                            <Radio
                                checked={getAdStatus === 'Yes'}
                                //onChange={handleChange}
                                value="Yes"
                                name="radio-button-demo"
                                onChange={(event)=>{handleStatus(event)}}
                                // inputProps={{ 'aria-label': 'A' }}
                                /> Yes
                            <Radio
                                checked={getAdStatus === 'No'}
                                //onChange={handleChange}
                                value="No"
                                name="radio-button-demo"
                                onChange={(event=>{handleStatus(event)})}
                                //inputProps={{ 'aria-label': 'B' }}
                                /> No
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <div>Vender Status:</div>    
                          <img src={getErrVenderStatus}  width='12' height='12' className={classes.valImgtop}  />
                            <Radio
                                checked={getVenderStatus === 'Not_verify'}
                                //onChange={handleChange}
                                value="Yes"
                                name="radio-button-demo"
                                onChange={(event)=>{handleVenderStatus(event)}}
                                // inputProps={{ 'aria-label': 'A' }}
                                />Not Verify
                            <Radio
                                checked={getVenderStatus === 'verify'}
                                //onChange={handleChange}
                                value="No"
                                name="radio-button-demo"
                                onChange={(event=>{handleVenderStatus(event)})}
                                //inputProps={{ 'aria-label': 'B' }}
                                /> Verify
                        </Grid>
                    </Grid>
                     </Grid>   
                      <div className={classes.div3}>
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <Button variant="contained" color="primary" className={classes.subBtn} 
                           onClick={()=>handleSumit()}>
                           Save
                        </Button>
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

export default Productitem;