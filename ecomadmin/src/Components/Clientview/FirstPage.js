import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { getData, ServerURL, postData } from "../FetchServices";
import Avatar from "@material-ui/core/Avatar";
import Productdataslider from "../Productitem/Productdataslider";
import Categorydataslider from "../Category/Categorydataslider";
import Brandad from "../Brand/Brandad";
import BrandTopSlider from "../Brand/BrandTopSlider";
import BrandNewSlider from "../Brand/BrandNewSlider";
import Header from "./Header";
import Footer from "../Footercontain/Footer";
import ViewListOfProducts from "./ViewListOfProducts";
import ProductView from "./ProductView";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";

var Carousel = require("react-responsive-carousel").Carousel;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titlemenu: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mainmenu: {
    display: "flex",
    flexDirection: "row",
  },
  mainmenuitems: {
    // marginRight: 20,
  },
  cardroot: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 15,
    width: 200,
    height: 220,
    margin: 15,
    borderRadius: 12,
  },
  action: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 15,
  },

  text: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 20,
  },
  media: {
    display: "flex",
    width: 150,
    height: 150,
  },
  cardview: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  title_section: {
    fontSize: "20px",
    fontFamily: "JioBold",
    color: "#000",
    lineHeight: "25px",
    margin: 0,
    padding: 0,
    padding: "32px 0px 0px 32px",
  },
  mainu: {
    background: "#ECECED",
    padding: "5px 10px 5px 0px",
    position: "relative",
    bottom: "8px",
  },
  Footer_contain: {
    padding: "35px 35px 35px 35px",
  },
}));

export default function FirstPage(props) {
  const classes = useStyles();

  var cartitem = useSelector((state) => state.cart);
  const [getCount, setCount] = React.useState(cartitem.length);
  const [getList, setList] = useState([]);
  const [getListBrand, setListBrand] = useState([]);
  const [anchorMM, setAnchorMM] = React.useState(null);
  const [getListAd, setListAd] = useState([]);
  const [getSliderData, setSliderData] = useState([]);
  const [getProductData, setProductData] = useState([]);

  // fetch brand data
  const fetchDataBrand = async (categoryid) => {
    let body = { categoryid: categoryid };
    let list = await postData("brand/displaybybrandidMainMenu", body);
    setListBrand(list);
  };
  //fetch category status condition
  const fetchDataAd = async () => {
    let list = await getData("category/fetchcategorybyadstatus");
    setListAd(list);
  };
  //fetch category data
  const fetchData = async (props) => {
    let list = await getData("category/fetchcategory");
    setList(list);
  };

  //fetch product data
  const fetchproductData = async () => {
    let list = await getData("productitem/fetchproduct");
    setProductData(list);
  };

  const handleShowProduct = (categoryid) => {
    // alert(categoryid);
    // props.changeView(1, { categoryid: categoryid });
    props.history.push({ pathname: `/ViewListOfProducts/${categoryid}` });
  };

  useEffect(function () {
    fetchData();
    fetchDataAd();
    fetchproductData();
  }, []);

  ////////////////////////////////////////// Start Slider ///////////////////////////////////////////////////////
  const Slider = () => {
    /* onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */
    return getListAd.map((item, key) => {
      return (
        <div>
          <img src={`${ServerURL}/images/${item.ad}`} />
        </div>
      );
    });
  };

  ///////////////////////////////////////// end of Slider ///////////////////////////////////////////////////////

  /////////////////////////////////////////////// card start /////////////////////////////////////////////

  const showCategoryDiv = () => {
    var colors = ["#f6e58d", "#c7ecee", "#e056fd", "#f0932b"];
    return getListAd.map((item, key) => {
      return (
        <div onClick={() => handleShowProduct(item.categoryid)}>
          <div
            className={classes.cardroot}
            style={{ background: `${colors[Math.floor(Math.random() * 3)]}` }}
          >
            <Avatar
              variant="rounded"
              className={classes.media}
              alt={item.categoryname}
              src={`${ServerURL}/images/${item.icon}`}
            />
          </div>
          <div className={classes.text}>{item.categoryname}</div>
        </div>
      );
    });
  };
  ////////////////////////////////////////// end of card /////////////////////////////////////////////////////////

  return (
    <div className={classes.grow}>
      <Header />
      {/* show the slider */}
      <div>
        <Carousel showArrows={true} autoPlay={true} showThumbs={false}>
          {Slider()}
        </Carousel>
      </div>
      {/* end the slider */}

      {/* show the category */}
      <h1 className={classes.title_section}> Shop from Top Categories </h1>
      <div className={classes.cardview}>{showCategoryDiv()}</div>
      {/* end category */}

      {/* show the product item */}
      <h1 className={classes.title_section}> Bestival Sale Top Offers </h1>
      <div className={classes.cardview}>
        <Productdataslider
          setCount={(v) => setCount(v)}
          history={props.history}
        />
      </div>
      {/* end product item */}

      {/* show the category item */}
      <h1 className={classes.title_section}> Shop by categories</h1>
      <div className={classes.cardview}>
        <Categorydataslider />
      </div>
      {/* end category item */}
      <div>
        <br />
        <br />
      </div>

      {/* show the brand ad image*/}
      <div>
        <Brandad />
      </div>
      {/* end brand item */}

      {/* show the brand top slider image*/}
      <h1 className={classes.title_section}>Top Brand</h1>
      <div className={classes.cardview}>
        <BrandTopSlider />
      </div>
      {/* end brand top item */}

      {/* show the brand top slider image*/}
      <h1 className={classes.title_section}>Top New Berand</h1>
      <div className={classes.cardview}>
        <BrandNewSlider />
      </div>
      {/* end brand top item */}

      <div className={classes.Footer_contain}>
        <div className={classes.categorylist}>
          <Footer />
        </div>
      </div>

      <div>
        <br />
        <br />
      </div>
    </div>
  );
}
