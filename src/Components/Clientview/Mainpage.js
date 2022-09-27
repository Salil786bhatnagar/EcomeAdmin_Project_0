import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { getData, ServerURL, postData } from "../FetchServices";
import Button from "@material-ui/core/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";
import ShowCartIcon from "./ShowCartIcon";
import FirstPage from "../Clientview/FirstPage";
import ViewListOfProducts from "./ViewListOfProducts";

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

export default function MainPage(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [getSClist, setSCList] = React.useState([]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  /////////////////Main Menu Implimentaation///////////

  var cartitem = useSelector((state) => state.cart);
  const [getCount, setCount] = React.useState(cartitem.length);
  const [getList, setList] = useState([]);
  const [getListBrand, setListBrand] = useState([]);
  const [anchorMM, setAnchorMM] = React.useState(null);
  const [getListAd, setListAd] = useState([]);
  const [getSliderData, setSliderData] = useState([]);
  const [getProductData, setProductData] = useState([]);

  const changeView = (value, parameter) => {
    // alert(value);
    if (value == 1)
      setContainer(<ViewListOfProducts categoryid={parameter.categoryid} />);
  };
  const [getContainer, setContainer] = React.useState(
    <FirstPage changeView={changeView} />
  );

  const handleClose = () => {
    setAnchorMM(null);
  };

  const handleClick = (event) => {
    //alert(event.currentTarget.value)
    fetchDataBrand(event.currentTarget.value);
    setAnchorMM(event.currentTarget);
  };
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
  const fetchData = async () => {
    let list = await getData("category/fetchcategory");
    setList(list);
  };

  //fetch product data
  const fetchproductData = async () => {
    let list = await getData("productitem/fetchproduct");
    setProductData(list);
  };

  useEffect(function () {
    fetchData();
    fetchDataAd();
    fetchproductData();
  }, []);

  const displayBrandMenu = () => {
    return getListBrand.map((item, key) => {
      return <MenuItem onClick={handleClose}>{item.brandname}</MenuItem>;
    });
  };

  const displayMainMenu = () => {
    return getList.map((item, key) => {
      return (
        <div className={classes.mainu}>
          <div className={classes.mainmenuitems}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              value={item.categoryid}
              onClick={(event) => handleClick(event)}
            >
              {item.categoryname}
            </Button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />

          <ShowCartIcon />

          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div className={classes.mainmenu}>
            {displayMainMenu()}
            <Menu
              id="simple-menu"
              anchorEl={anchorMM}
              keepMounted
              open={Boolean(anchorMM)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {displayBrandMenu()}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}

      {renderMenu}

      <div>{getContainer}</div>
    </div>
  );
}
