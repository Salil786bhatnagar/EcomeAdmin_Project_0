import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { postDataAndImage, postData, getData } from "../FetchServices";
import {
  checkRequire,
  checkMobile,
  checkno,
  checkGstno,
  checkEmail,
  checkPassword,
} from "../Checks";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    textAlign: "center",
    // padding:'40px',
    width: "90%",
  },

  div: {
    padding: "34px 30px 2px",
  },

  mainPaper: {
    backgroundColor: "#63596396",
    height: "975px",
  },

  paperContain: {
    backgroundColor: "#7d7979",
    padding: "20px 0px 25px 0px",
    backgroundColor: "#7d7979",
    margin: "20px 20px",
  },

  outletaddress: {
    //  padding:'5px 5px 5px 5px',
    width: "96%",
  },
  div2: {
    padding: "20px 10px 0px 10px",
    margin: "0px 25px 0px 20px",
  },
  input: {
    display: "none",
  },
  uploadbtn1: {
    margin: "0px 15px 0px 10px",
  },
  imgAvater: {
    margin: "23px 0px 0px 35px",
  },
  adStatus: {
    position: "relative",
    top: "15px",
    right: "112px",
  },
  message: {
    margin: "12px 40px 0px 0px",
  },
  subBtn: {
    margin: "0px 0px 0px 140px",
  },
  resBtn: {
    margin: "0px 0px 0px 140px",
  },
  valImg: {
    position: "relative",
    right: "5%",
    top: "0%",
  },
  valImgAddress: {
    position: "relative",
    top: "6px",
    right: "12px",
  },
  valImgLocation: {
    position: "relative",
    top: "6px",
    right: "2%",
  },

  location: {
    width: "95%",
    margin: "5px 8px 0px 0px",
  },

  formControl2: {
    position: "relative",
    top: "30px",
    right: "55%",
  },

  epd: {
    width: "95%",
    padding: "0px 0px 0px 0px",
  },

  valepd: {
    position: "relative",
    right: "3%",
    top: "0%",
  },

  valImgstatus: {
    position: "relative",
    right: "25%",
    top: "0%",
  },
  status: {
    position: "relative",
    bottom: "6px",
  },
  hadingAd: {
    position: "relative",
    right: "10%",
  },
  formControl1: {
    margin: "0px 17px",
    width: "92%",
    position: "relative",
    bottom: "10px",
  },

  formControl2: {
    margin: "0px 17px",
    width: "92%",
    position: "relative",
    bottom: "10px",
  },

  message: {
    margin: "3px 0px 0px 120px",
  },
  valImgstate: {
    position: "relative",
    right: "50%",
    top: "8%",
  },
  valImgcity: {
    position: "relative",
    right: "50%",
    top: "8%",
  },
}));

function OutletInterfacr() {
  const classes = useStyle();
  const [getFirmname, setFirmname] = useState("");
  const [getOwnerName, setOwnerName] = useState("");
  const [getMobileNo, setMobileNo] = useState("");
  const [getPhoneNo, setPhoneNo] = useState();
  const [getRegistrationNo, setRegistrationNo] = useState();
  const [getGstNo, setGstNo] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getState, setState] = useState("");
  const [getCity, setCity] = useState("");
  const [getLocation, setLocation] = useState("");
  const [getIcon, setIcon] = useState({ icon: "", file: "" });
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getAveragePrice, setAveragePrice] = useState("");
  const [getRating, setRating] = useState("");
  const [getLat, setLat] = useState("");
  const [getLng, setLng] = useState("");
  const [getStatus, setStatus] = useState("");
  const [getMessage, setMessage] = useState("");

  const [getErrFirmname, setErrFirmname] = useState("");
  const [getErrOwnerName, setErrOwnerName] = useState("");
  const [getErrMobileNo, setErrMobileNo] = useState("");
  const [getErrPhoneNo, setErrPhoneNo] = useState("");
  const [getErrRegistrationNo, setErrRegistrationNo] = useState("");
  const [getErrGstNo, setErrGstNo] = useState("");
  const [getErrAddress, setErrAddress] = useState("");
  const [getErrState, setErrState] = useState("");
  const [getErrCity, setErrCity] = useState("");
  const [getErrLocation, setErrLocation] = useState("");
  const [getErrIcon, setErrIcon] = useState({ icon: "", file: "" });
  const [getErrEmail, setErrEmail] = useState("");
  const [getErrPassword, setErrPassword] = useState("");
  const [getErrDescription, setErrDescription] = useState("");
  const [getErrAveragePrice, setErrAveragePrice] = useState("");
  const [getErrRating, setErrRating] = useState("");
  const [getErrLat, setErrLat] = useState("");
  const [getErrLng, setErrLng] = useState("");
  const [getErrStatus, setErrStatus] = useState("");
  const [getStateList, setStateList] = useState([]);
  const [getCityList, setCityList] = useState([]);

  /* use to useEffect function */
  useEffect(function () {
    fetchStatCity();
  }, []);

  /* fetch all state data */
  const fetchStatCity = async () => {
    let list = await getData("state_city/displayallstates");
    setStateList(list);
  };

  /* menuitem fetch state data */
  const fillStateItem = () => {
    return getStateList.map((item, key) => {
      return <MenuItem value={item.stateid}>{item.statename}</MenuItem>;
    });
  };

  /* handle in state */
  const handleStateChange = (event) => {
    setState(event.target.value);
    fetchCity(event.target.value);
  };

  /* fetch all city data */
  const fetchCity = async (stateid) => {
    var body = { stateid: stateid };
    var list = await postData("state_city/displayallcity", body);
    setCityList(list);
  };

  /* menu item fetch city data */
  const fillCityItem = () => {
    return getCityList.map((item, key) => {
      return <MenuItem value={item.citiesid}>{item.citiesname}</MenuItem>;
    });
  };

  /* handle in city */
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  /* handle in Photograph */
  const handlePhotograph = (event) => {
    setIcon({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };

  /* handle in adstatus */
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  /* handle in reset */
  const handleReset = () => {
    setFirmname("");
    setOwnerName("");
    setMobileNo("");
    setPhoneNo("");
    setRegistrationNo("");
    setGstNo("");
    setAddress("");
    setState("");
    setCity("");
    setLocation("");
    setIcon({ icon: "", file: "" });
    setEmail("");
    setPassword("");
    setDescription("");
    setAveragePrice("");
    setRating("");
    setLat("");
    setLng("");
    setStatus("");
    setMessage("");

    setErrFirmname("");
    setErrOwnerName("");
    setErrMobileNo("");
    setErrPhoneNo("");
    setErrRegistrationNo("");
    setErrGstNo("");
    setErrAddress("");
    setErrState("");
    setErrCity("");
    setErrLocation("");
    setErrIcon({ icon: "", file: "" });
    setErrEmail("");
    setErrPassword("");
    setErrDescription("");
    setErrAveragePrice("");
    setErrRating("");
    setErrLat("");
    setErrLng("");
    setErrStatus("");
  };

  /* handle in Submit */
  const handleSubmit = async () => {
    var err = false;

    //firmname validation
    if (!checkRequire(getFirmname)) {
      err = true;
      setErrFirmname("image/cross.png");
    }

    if (checkRequire(getFirmname)) {
      setErrFirmname("image/tick.png");
    }

    //ownername validation
    if (!checkRequire(getOwnerName)) {
      err = true;
      setErrOwnerName("image/cross.png");
    }

    if (checkRequire(getOwnerName)) {
      setErrOwnerName("image/tick.png");
    }

    //mobile validation
    if (!checkMobile(getMobileNo)) {
      err = true;
      setErrMobileNo("image/cross.png");
    }

    if (checkMobile(getMobileNo)) {
      setErrMobileNo("image/tick.png");
    }

    //phon no validation
    if (!checkno(getPhoneNo)) {
      err = true;
      setErrPhoneNo("image/cross.png");
    }

    if (checkno(getPhoneNo)) {
      setErrPhoneNo("image/tick.png");
    }

    //registration validation
    if (!checkno(getRegistrationNo)) {
      err = true;
      setErrRegistrationNo("image/cross.png");
    }

    if (checkno(getRegistrationNo)) {
      setErrRegistrationNo("image/tick.png");
    }

    //gst validation
    if (!checkGstno(getGstNo)) {
      err = true;
      setErrGstNo("image/cross.png");
    }

    if (checkGstno(getGstNo)) {
      setErrGstNo("image/tick.png");
    }

    //address validation
    if (!checkRequire(getAddress)) {
      err = true;
      setErrAddress("image/cross.png");
    }

    if (checkRequire(getAddress)) {
      setErrAddress("image/tick.png");
    }

    //state validation
    if (!checkRequire(getState)) {
      err = true;
      setErrState("image/cross.png");
    }

    if (checkRequire(getState)) {
      setErrState("image/tick.png");
    }

    //city validation
    if (!checkRequire(getCity)) {
      err = true;
      setErrCity("image/cross.png");
    }
    if (checkRequire(getCity)) {
      setErrCity("image/tick.png");
    }

    //location validation
    if (!checkRequire(getLocation)) {
      err = true;
      setErrLocation("image/cross.png");
    }

    if (checkRequire(getLocation)) {
      setErrLocation("image/tick.png");
    }

    //photograph validation
    if (!checkRequire(getIcon.icon)) {
      err = true;
      setErrIcon("image/cross.png");
    }

    if (checkRequire(getIcon.icon)) {
      setErrIcon("image/tick.png");
    }

    //email validation
    if (!checkEmail(getEmail)) {
      err = true;
      setErrEmail("image/cross.png");
    }

    if (checkEmail(getEmail)) {
      setErrEmail("image/tick.png");
    }

    //password validation
    if (!checkPassword(getPassword)) {
      err = true;
      setErrPassword("image/cross.png");
    }

    if (checkPassword(getPassword)) {
      setErrPassword("image/tick.png");
    }

    //description validation
    if (!checkRequire(getDescription)) {
      err = true;
      setErrDescription("image/cross.png");
    }

    if (checkRequire(getDescription)) {
      setErrDescription("image/tick.png");
    }

    //averageprice validation
    if (!checkRequire(getAveragePrice)) {
      err = true;
      setErrAveragePrice("image/cross.png");
    }

    if (checkRequire(getAveragePrice)) {
      setErrAveragePrice("image/tick.png");
    }

    //rating validation
    if (!checkRequire(getRating)) {
      err = true;
      setErrRating("image/cross.png");
    }

    if (checkRequire(getRating)) {
      setErrRating("image/tick.png");
    }

    //lat validation
    if (!checkRequire(getLat)) {
      err = true;
      setErrLat("image/cross.png");
    }

    if (checkRequire(getLat)) {
      setErrLat("image/tick.png");
    }

    //lan validation
    if (!checkRequire(getLng)) {
      err = true;
      setErrLng("image/cross.png");
    }

    if (checkRequire(getLng)) {
      setErrLng("image/tick.png");
    }

    //status validation
    if (!checkRequire(getStatus)) {
      err = true;
      setErrStatus("image/cross.png");
    }

    if (checkRequire(getStatus)) {
      setErrStatus("image/tick.png");
    }

    if (!err) {
      var formData = new FormData();
      formData.append("firmname", getFirmname);
      formData.append("ownername", getOwnerName);
      formData.append("mobile", getMobileNo);
      formData.append("phone", getPhoneNo);
      formData.append("registrationno", getRegistrationNo);
      formData.append("gstno", getGstNo);
      formData.append("address", getAddress);
      formData.append("state", getState);
      formData.append("city", getCity);
      formData.append("location", getLocation);
      formData.append("photograph", getIcon.file);
      formData.append("emailid", getEmail);
      formData.append("password", getPassword);
      formData.append("description", getDescription);
      formData.append("averageprice", getAveragePrice);
      formData.append("rating", getRating);
      formData.append("lat", getLat);
      formData.append("lng", getLng);
      formData.append("status", getStatus);

      var config = { header: { "content-type": "multipart/form-data" } };
      var result = await postDataAndImage(
        "outlet/outletInformation",
        formData,
        config
      );

      if (result) {
        setMessage("Record Submitted...");
      } else {
        setMessage("Fail to submit record...");
      }
    }
  };

  return (
    <center>
      <div className={classes.root}>
        <Paper className={classes.mainPaper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.div1}>
                <Paper className={classes.paperContain}>
                  <Typography>
                    <b>Outlet's</b>
                  </Typography>
                </Paper>
              </div>
            </Grid>
          </Grid>
          <div className={classes.div2}>
            <Grid container spacing={2}>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrFirmname}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Firm name"
                  value={getFirmname}
                  onChange={(event) => {
                    setFirmname(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrOwnerName}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Owner name"
                  value={getOwnerName}
                  onChange={(event) => {
                    setOwnerName(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrMobileNo}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Mobile number"
                  value={getMobileNo}
                  onChange={(event) => {
                    setMobileNo(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrPhoneNo}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Phone number"
                  value={getPhoneNo}
                  onChange={(event) => {
                    setPhoneNo(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrRegistrationNo}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Registration no"
                  value={getRegistrationNo}
                  onChange={(event) => {
                    setRegistrationNo(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrGstNo}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Gst no"
                  value={getGstNo}
                  onChange={(event) => {
                    setGstNo(event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrIcon}
                  width="12"
                  height="12"
                  className={classes.valImgphotograph}
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(event) => {
                    handlePhotograph(event);
                  }}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className={classes.uploadbtn1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Photograph
                  </Button>
                </label>
              </Grid>
              <Grid item xs={6} className={classes.container}>
                <Avatar
                  alt="Remy Sharp"
                  src={getIcon.icon}
                  variant="rounded"
                  style={{ width: 70, height: 50 }}
                  className={classes.imgAvater}
                />
              </Grid>
              <Grid itme xs={12} sm={12} md={12} lg={12}>
                <img
                  src={getErrEmail}
                  width="12"
                  height="12"
                  className={classes.valepd}
                />
                <TextField
                  id="standard-basic"
                  label="Email id"
                  fullWidth
                  value={getEmail}
                  className={classes.epd}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={12} sm={12} md={12} lg={12}>
                <img
                  src={getErrPassword}
                  width="12"
                  height="12"
                  className={classes.valepd}
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  fullWidth
                  value={getPassword}
                  className={classes.epd}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={12} sm={12} md={12} lg={12}>
                <img
                  src={getErrDescription}
                  width="12"
                  height="12"
                  className={classes.valepd}
                />
                <TextField
                  id="standard-basic"
                  label="Description"
                  fullWidth
                  value={getDescription}
                  className={classes.epd}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrAveragePrice}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Average price"
                  value={getAveragePrice}
                  onChange={(event) => {
                    setAveragePrice(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrRating}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Rating"
                  value={getRating}
                  onChange={(event) => {
                    setRating(event.target.value);
                  }}
                />
              </Grid>

              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrState}
                  width="12"
                  height="12"
                  className={classes.valImgstate}
                />
                <FormControl className={classes.formControl1}>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={getState}
                    onChange={(event) => handleStateChange(event)}
                  >
                    {fillStateItem()}
                  </Select>
                </FormControl>
              </Grid>

              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrCity}
                  width="12"
                  height="12"
                  className={classes.valImgcity}
                />
                <FormControl className={classes.formControl2}>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={getCity}
                    onChange={(event) => handleCityChange(event)}
                  >
                    {fillCityItem()}
                  </Select>
                </FormControl>
              </Grid>

              <Grid itme xs={12} sm={12} md={12} lg={12}>
                <img
                  src={getErrAddress}
                  width="12"
                  height="12"
                  className={classes.valImgAddress}
                />
                <TextField
                  id="standard-basic"
                  label="Address"
                  value={getAddress}
                  fullWidth
                  className={classes.outletaddress}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={12} sm={12} md={12} lg={12}>
                <img
                  src={getErrLocation}
                  width="12"
                  height="12"
                  className={classes.valImgLocation}
                />
                <TextField
                  label="Location"
                  className={classes.location}
                  fullWidth
                  value={getLocation}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrLat}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Lat"
                  value={getLat}
                  onChange={(event) => {
                    setLat(event.target.value);
                  }}
                />
              </Grid>
              <Grid itme xs={6} sm={6} md={6} lg={6}>
                <img
                  src={getErrLng}
                  width="12"
                  height="12"
                  className={classes.valImg}
                />
                <TextField
                  label="Lng"
                  value={getLng}
                  onChange={(event) => {
                    setLng(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <div className={classes.adStatus}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <img
                    src={getErrStatus}
                    width="12"
                    height="12"
                    className={classes.valImgstatus}
                  />
                  <div className={classes.status}>
                    <div className={classes.hadingAd}>Ad Status:</div>
                    <Radio
                      checked={getStatus === "Active"}
                      //onChange={handleChange}
                      value="Active"
                      name="radio-button-demo"
                      onChange={(event) => {
                        handleStatus(event);
                      }}
                      // inputProps={{ 'aria-label': 'A' }}
                    />{" "}
                    Active
                    <Radio
                      checked={getStatus === "Deactive"}
                      //onChange={handleChange}
                      value="Deactive"
                      name="radio-button-demo"
                      onChange={(event) => {
                        handleStatus(event);
                      }}
                      //inputProps={{ 'aria-label': 'B' }}
                    />{" "}
                    Deactive
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.subBtn}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleReset();
                    }}
                    className={classes.resBtn}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.message}>
                    <b>Message:</b>&nbsp;&nbsp;
                  </div>
                  {getMessage}
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </div>
    </center>
  );
}

export default OutletInterfacr;
