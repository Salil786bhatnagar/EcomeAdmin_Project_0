import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import {
  getData,
  postData,
  postDataAndImage,
  ServerURL,
} from "../FetchServices";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { checkRequire } from "../Checks";

const useStyles = makeStyles((theme) => ({
  mainTable: {
    padding: "35px 35px 35px 35px",
    backgroundColor: "#efeaea",
  },
  root: {
    display: "flex",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  tablediv: {
    width: 900,
    height: "auto",
  },

  maindiv: {
    // margin:'15px 15px 15px 15px',
  },
  leftside: {
    margin: "10px 10px 10px 10px",
  },
  mainPaper: {
    backgroundColor: "#63596396",
  },
  input: {
    display: "none",
  },

  leftside: {
    margin: "0px 35px 0px 35px",
    padding: "10px 30px 0px 30px",
    width: "35%",
  },

  rightside: {
    width: "35%",
    margin: "0px 35px 0px 35px",
    padding: "10px 0px 0px 0px",
    position: "relative",
    right: "5%",
  },

  leftpaper: {
    backgroundColor: "#63596396",
    padding: "20px 0px 0px 0px",
    position: "relative",
    left: "25%",
  },

  rightpaper: {
    backgroundColor: "#63596396",
    padding: "20px 0px 0px 0px",
    position: "relative",
    left: "25%",
    height: "85%",
  },

  text1: {
    width: "95%",
    margin: "5px 0px 0px 10px",
  },
  text2: {
    width: "95%",
    margin: "5px 0px 0px 10px",
  },
  radioStatus: {
    margin: "10px 0px 0px 30px",
    width: "125%",
  },

  // paperheading:{
  //   height: '10px',
  //   margin: '0px 10px 10px 10px',
  //   padding: '18px 0px 18px 0px',
  //   backgroundColor:'#7d7979',
  //   textAlign: 'center',
  // },

  paperheading2: {
    height: "10px",
    margin: "0px 10px 10px 10px",
    padding: "18px 0px 18px 0px",
    backgroundColor: "#7d7979",
    textAlign: "center",
  },

  subBtn: {
    // margin:'30px 0px 10px 20px',
    margin: "10px 0px 35px 30px",
  },

  reBtn: {
    margin: "10px 0px 0px 160px",
    position: "relative",
    bottom: "56px",
  },

  message: {
    margin: "0px 0px 0px 20px",
    padding: "0px 0px 0px 7px",
    position: "relative",
    bottom: "20px",
  },

  uploadbtn1: {
    margin: "5px 0px 0px 0px",
    position: "relative",
    left: "24px",
  },

  uploadbtn2: {
    position: "relative",
    left: "24px",
    margin: "10px 0px",
  },

  avater1: {
    bottom: "40px",
    position: "relative",
    margin: "0px 0px 0px 216px",
  },
  avater2: {
    bottom: "70px",
    position: "relative",
    margin: "0px 0px 0px 216px",
  },

  updateIcon: {
    position: "relative",
    left: "0px",
  },

  updateAd: {
    position: "relative",
    left: "0px",
  },

  messageImage: {
    margin: "0px 0px 0px 25px",
    position: "relative",
    bottom: "65px",
  },
  status: {
    margin: "5px 0px 0px 22px",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  valImg: {
    position: "relative",
    right: "0%",
    top: "0%",
  },
}));

export default function DisplayAllCategories() {
  const [getCategoryList, setCategoryList] = useState([]);
  const [getOpen, setOpen] = useState(false);

  const [getCategoryId, setCategoryId] = useState("");
  const [getCotegoryName, setCotegoryName] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getIcon, setIcon] = useState({ icon: "", file: "" });
  const [getAd, setAd] = useState({ icon: "", file: "" });
  const [getAdStatus, setAdStatus] = useState("");
  const [getMessage, setMessage] = useState("");
  const [getErrorCn, setErrorCn] = useState("");
  const [getErrorDes, setErrorDes] = useState("");
  const [getErrorIcon, setErrorIcon] = useState("");
  const [getErrorAd, setErrorAd] = useState("");
  const [getErrorAdStatus, setErrorAdStatus] = useState("");
  const classes = useStyles();
  const [getColumn, setColumn] = useState({
    columns: [
      { title: "User Id ", field: "userid" },
      { title: "Name", field: "name" },
      { title: "Email	", field: "email" },
      { title:  "role", field: "role" },
      { title: "Naddressame", field: "address" },
      { title: "uniqueid			", field: "uniqueid	" },
      {
        title: "Icon",
        render: (rowData) => (
          <div>
            <Avatar
              variant="rounded"
              src={`${ServerURL}/images/${rowData.icon}`}
            />
          </div>
        ),
      },
      {
        title: "Ad Image",
        render: (rowData) => (
          <div>
            <Avatar
              variant="rounded"
              src={`${ServerURL}/images/${rowData.ad}`}
            />
          </div>
        ),
      },
      { title: "AdStatus", field: "adstatus" },
    ],
  });

  useEffect(function () {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    let list = await getData("category/displayallData");
    setCategoryList(list);
  };

  const handleDelete = async (oldData) => {
    let body = { category_id: oldData.categoryid };
    await postData("category/deleteRecord", body);
  };

  const handleClickOpen = (rowData) => {
    setOpen(true);
    setCategoryId(rowData.categoryid);
    setCotegoryName(rowData.categoryname);
    setDescription(rowData.description);
    setAdStatus(rowData.adstatus);
    setIcon({ icon: `${ServerURL}/images/${rowData.icon}`, file: "" });
    setAd({ icon: `${ServerURL}/images/${rowData.ad}`, file: "" });
  };

  const handleClose = () => {
    setOpen(false);
    fetchCategoryData();
  };

  /* handle in icon*/
  const handleIcon = (event) => {
    setIcon({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };
  /* handle in ad*/
  const handleAd = (event) => {
    setAd({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };
  /* handle in status*/
  const handleAdStatus = (event) => {
    setAdStatus(event.target.value);
  };

  /* clear data*/
  const ClearData = () => {
    setCotegoryName("");
    setDescription("");
    setIcon({ icon: "", file: "" });
    setAd({ icon: "", file: "" });
    setAdStatus("");
    setMessage("");
    setErrorCn("");
    setErrorDes("");
    setErrorIcon("");
    setErrorAd("");
    setErrorAdStatus("");
  };

  /* handle submit*/
  const handleEditData = async () => {
    var err = false;
    if (!checkRequire(getCotegoryName)) {
      err = true;
      setErrorCn("/image/cross.png");
    }
    if (checkRequire(getCotegoryName)) {
      setErrorCn("/image/tick.png");
    }

    if (!checkRequire(getDescription)) {
      err = true;
      setErrorDes("/image/cross.png");
    }
    if (checkRequire(getDescription)) {
      setErrorDes("/image/tick.png");
    }

    if (!checkRequire(getIcon.icon)) {
      err = true;
      setErrorIcon("/image/cross.png");
    }

    if (checkRequire(getIcon.icon)) {
      setErrorIcon("/image/tick.png");
    }

    if (!checkRequire(getAd.icon)) {
      err = true;
      setErrorAd("/image/cross.png");
    }

    if (checkRequire(getAd.icon)) {
      setErrorAd("/image/tick.png");
    }

    if (!checkRequire(getAdStatus)) {
      err = true;
      setErrorAdStatus("/image/cross.png");
    }

    if (checkRequire(getAdStatus)) {
      setErrorAdStatus("/image/tick.png");
    }

    if (!err) {
      var formData = new FormData();
      formData.append("categoryid", getCategoryId);
      formData.append("categoryname", getCotegoryName);
      formData.append("description", getDescription);
      formData.append("icon", getIcon.file);
      formData.append("ad", getAd.file);
      formData.append("adstatus", getAdStatus);
      var config = { header: { "content-type": "multipart/form-data" } };
      var result = await postDataAndImage(
        "category/editDataImage",
        formData,
        config
      );

      if (result) {
        setMessage("Record Submitted");
      } else {
        setMessage("Fail to Submit Record");
      }
    }
  };
  // end

  const editDialog = () => {
    return (
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
          <DialogTitle id="alert-dialog-title">
            {"Update Categories"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className={classes.paper}>
                <Paper className={classes.mainPaper}>
                  <Grid contianer spacing={2}>
                    {/* <div className={classes.div1}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper className={classes.paperheading}>
                            <Typography><b>Add Category </b></Typography>
                        </Paper>
                      </Grid>
                    </div>  */}
                  </Grid>
                  <div className={classes.div2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img
                          src={getErrorCn}
                          width="12"
                          height="12"
                          className={classes.valImg}
                        />
                        <TextField
                          label="Category Name"
                          className={classes.text1}
                          value={getCotegoryName}
                          onChange={(event) => {
                            setCotegoryName(event.target.value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img
                          src={getErrorDes}
                          width="12"
                          height="12"
                          className={classes.valImg}
                        />
                        <TextField
                          label="Description"
                          className={classes.text2}
                          value={getDescription}
                          onChange={(event) => {
                            setDescription(event.target.value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={(event) => handleIcon(event)}
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            className={classes.uploadbtn1}
                            startIcon={<CloudUploadIcon />}
                          >
                            Upload Icon
                          </Button>
                        </label>
                      </Grid>
                      <Grid item xs={6} className={classes.container}>
                        <Avatar
                          alt="Remy Sharp"
                          variant="rounded"
                          className={classes.updateIcon}
                          style={{ width: 70, height: 50 }}
                          src={getIcon.icon}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="ad-contained-button-file"
                          multiple
                          type="file"
                          onChange={(event) => handleAd(event)}
                        />
                        <label htmlFor="ad-contained-button-file">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            className={classes.uploadbtn2}
                            startIcon={<CloudUploadIcon />}
                          >
                            Upload Ad
                          </Button>
                        </label>
                      </Grid>
                      <Grid item xs={6} className={classes.container}>
                        <Avatar
                          alt="Remy Sharp"
                          variant="rounded"
                          className={classes.updatead}
                          style={{ width: 70, height: 55 }}
                          src={getAd.icon}
                        />
                      </Grid>
                    </Grid>
                    <div className={classes.div3}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <img
                            src={getErrorAdStatus}
                            width="12"
                            height="12"
                            className={classes.valImg}
                          />
                          <div style={{ fontWeight: "bold", marginLeft: 30 }}>
                            {" "}
                            Ad Status:{" "}
                          </div>
                          <div>
                            <Radio
                              checked={getAdStatus === "yes"}
                              onChange={handleAdStatus}
                              value="yes"
                              color="default"
                              name="radio-button-demo"
                            />
                            Yes
                            <Radio
                              checked={getAdStatus === "no"}
                              onChange={handleAdStatus}
                              value="no"
                              color="default"
                              name="radio-button-demo"
                            />
                            No
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
                        <Grid item xs={12} className={classes.container}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEditData}
                          >
                            Edit Above Data
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          {/* <Button variant="contained" color="primary" onClick={()=>ClearData()}>Reset</Button> */}
                        </Grid>
                        <Grid item xs={12}>
                          <b>Message:</b>&nbsp;&nbsp;{getMessage}
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Paper>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
                Disagree
              </Button> */}
            <Button onClick={handleClose} color="primary" autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <div className={classes.mainTable}>
      <MaterialTable
        title="Category List"
        columns={getColumn.columns}
        data={getCategoryList}
        actions={[
          
          {
            icon: "edit",
            tooltip: "Edit",
            onClick: (event, rowData) => handleClickOpen(rowData),
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setColumn((prevState) => {
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

                const data = [...getCategoryList];
                data.splice(data.indexOf(oldData), 1);
                setCategoryList(data);
                handleDelete(oldData);
              }, 600);
            }),
        }}
      />
      {editDialog()}
    </div>
  );
}
