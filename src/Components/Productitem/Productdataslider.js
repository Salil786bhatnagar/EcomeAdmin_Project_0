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
import ProductView from "../Clientview/ProductView";
const useStyle = makeStyles((theme) => ({
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
}));

export default function Productdataslider(props) {
  const classes = useStyle();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrow: true,
  };

  const [getProductList, setProductList] = useState([]);

  // useState using ADD CART redux processing code start //
  var despatch = useDispatch();

  const handleShowProductView = (productid) => {
    // alert(categoryid);
    // props.changeView(1, { categoryid: categoryid });
    props.history.push({ pathname: `/ProductView/${productid}` });
  };

  // Redux end the code

  useEffect(function () {
    fetchProductData();
  }, []);

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

  const ProductSlider = (props) => {
    return getProductList.map((item, key) => {
      var save = item.price - item.offerprice;
      return (
        <div className={classes.toproot}>
          <div onClick={() => handleShowProductView(item.productid)}>
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
            </div>
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
      );
    });
  };

  return (
    <div className={classes.pslider}>
      <Slider {...settings}>{ProductSlider()}</Slider>
    </div>
  );
}
