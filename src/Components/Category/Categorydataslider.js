import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getData, ServerURL, postData } from "../FetchServices";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme) => ({
  media: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 1,
    width: 190,
    height: 210,
    margin: 15,
    borderRadius: 12,
    maxHeight: "175px",
    // padding: '10px 10px 10px 10px',
    // background:'#f3f9f3',
    border: "1px solid rgba(111,114,132,.25)",
  },

  pslider: {
    width: "96%",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 20,
    // textAlign:'center',
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
    left: "30%",
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
  },
}));

export default function Categorydataslider() {
  const classes = useStyle();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrow: true,
  };

  const [getCategoryDataList, setCategoryDataList] = useState([]);

  useEffect(function () {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    let list = await getData("category/fetchaddata");
    setCategoryDataList(list);
  };

  const CategorySlider = () => {
    return getCategoryDataList.map((item) => {
      return (
        <div>
          <div className={classes.cardroot}>
            <Avatar
              variant="rounded"
              className={classes.media}
              alt={item.categoryname}
              src={`${ServerURL}/images/${item.icon}`}
            />
            <div className={classes.text}>{item.categoryname}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.pslider}>
      <Slider {...settings}>{CategorySlider()}</Slider>
    </div>
  );
}
