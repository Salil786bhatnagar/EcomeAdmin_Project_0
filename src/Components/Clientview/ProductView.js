import React, { useState, useEffect } from "react";
import { getData, ServerURL, postData } from "../FetchServices";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footercontain/Footer";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function ProductView() {
  const classes = useStyles();
  var params = useParams();
  const [getList, setList] = useState([]);

  useEffect(function () {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    let body = { productid: params.pid };
    let list = await postData("productitem/displaybyid", body);
    setList(list[0]);
  };

  return (
    <div className={classes.grow}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src={`${ServerURL}/images/${getList.picture}`} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {getList.productname}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductView;
