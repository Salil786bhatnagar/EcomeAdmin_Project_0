import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getData, ServerURL, postData } from "../FetchServices";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { QtyCtrl, qty } from "../Clientview/QtyCtrl";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footercontain/Footer";
const useStyles = makeStyles((theme) => ({
  media: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 15,
    width: 190,
    height: 210,
    margin: 15,
    borderRadius: 12,
    maxHeight: "175px",
  },

  pslider: {
    width: "96%",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 20,
  },
  toproot: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 5,
    width: "auto",
    height: "auto",
    margin: 5,
    border: "1px solid #dcdde1",
    borderRadius: 8,
  },

  topmedia: {
    display: "flex",
    width: 150,
    height: 150,
  },
  text: {
    display: "flex",
    paddingTop: 10,
    position: "relative",
    left: "11%",
    fontSize: "15px",
    fontFamily: "JioBold",
    lineHeight: "15px",
    textAlign: "left",
    letterSpacing: ".01px",
    color: "#000",
  },
  cartbtn: {
    padding: 5,
    width: 150,
    position: "relative",
    left: "40px",
  },

  scardview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

function ViewListOfProducts(props) {
  const classes = useStyles();
  const [getDataList, setDataList] = useState([]);
  const [getProductList, setProductList] = useState([]);
  const [getCount, setCount] = React.useState(0);

  var params = useParams();
  var despatch = useDispatch();

  useEffect(function () {
    // alert(props.location.state);
    fetchDataList();
    fetchProductData();
  }, []);

  const fetchDataList = async () => {
    // alert(props.categoryid);
    let body = { categoryid: params.cid };
    let list = await postData("productitem/listproductbycategory", body);
    setDataList(list);
    console.log("showResult:", list);
  };

  const handleQtyChange = (value, item, key) => {
    if (value == 0) {
      item["qtydemand"] = value;
      let list = getProductList;
      list[key]["cartstatus"] = 0;
      setProductList(list);
      despatch({ type: "REMOVE_ITEM", payload: [item.productid, item] });
      props.setCount(value); //only for rendring
    } else {
      item["qtydemand"] = value;
      despatch({ type: "ADD_CART", payload: [item.productid, item] });
      console.log("Product id:", item.productid);
      props.setCount(value); //only for rendring
    }
  };

  // Using Redux start code //
  const addCart = (item, key) => {
    item["qtydemand"] = 1;
    var list = getProductList;
    list[key]["cartstatus"] = 1;
    setProductList(list);
    despatch({ type: "ADD_CART", payload: [item.productid, item] });
    console.log("Product id:", item.productid);
    props.setCount(item.productid); //only for rendring
  };
  // end the code //

  const fetchProductData = async () => {
    let list = await getData("productitem/fetchproduct");
    setProductList(list);
  };

  const showProducts = () => {
    return getDataList.map((item, key) => {
      var save = item.price - item.offerprice;
      return (
        <div className={classes.toproot}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Avatar
              variant="rounded"
              className={classes.media}
              alt={item.categoryname}
              src={`${ServerURL}/images/${item.ad}`}
            />
            <div className={classes.text}>{item.productname}</div>
            <div className={classes.text}>
              M.R.P &nbsp;
              <del>
                <span>&#8377;</span> {item.price}
              </del>
            </div>
            <div className={classes.text}>
              <b>
                <span>&#8377;</span> {item.offerprice}
              </b>
            </div>
            <div className={classes.text}>
              <small>
                <font color="green">
                  Save <span>&#8377;</span>
                  {save}
                </font>
              </small>
            </div>
            <div className={classes.text}>
              {item.cartstatus == 0 ? (
                <Button
                  onClick={() => addCart(item, key)}
                  className={classes.cartbtn}
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
              ) : (
                <QtyCtrl
                  onChange={(value) => handleQtyChange(value, item, key)}
                />
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.scardview}>{showProducts()}</div>;
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewListOfProducts;
