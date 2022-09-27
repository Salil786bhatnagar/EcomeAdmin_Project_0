import React from "react";
import "./fm-css/Demo.css";
import CategoryInterface from "./Components/Category/CategoryInterface";
import OutletInterface from "./Components/Outlet/OutletInterface";
import BrandInterface from "./Components/Brand/BrandInterface";
import DisplayAllCategories from "./Components/Category/DisplayAllCategories";
import DisplayAllOutlets from "./Components/Outlet/DisplayAllOutlets";
import DisplayAllBrand from "./Components/Brand/DisplayAllBrand";
import ModleInterface from "./Components/Modle/ModleInterface";
import DisplayAllModle from "./Components/Modle/DisplayAllModle";
import SingIn from "./Components/Admin/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import Signinoutlet from "./Components/Outlatesdashbord/Signinoutlet";
import Dashboard_outlate from "./Components/Outlatesdashbord/Dashboard_outlate";
import Productitem from "./Components/Outlatesdashbord/Productitem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexPage from "./Components/Admin/IndexPage";
import SignIn from "./Components/Admin/SignIn";
import Index_Page from "./Components/Outlatesdashbord/Index_Page";
import Mainpage from "./Components/Clientview/Mainpage";
import Productdataslider from "./Components/Productitem/Productdataslider";
import Categorydataslider from "./Components/Category/Categorydataslider";
import Brandad from "./Components/Brand/Brandad";
import BrandTopSlider from "./Components/Brand/BrandTopSlider";
import BrandNewSlider from "./Components/Brand/BrandNewSlider";
import Footer from "./Components/Footercontain/Footer";
import FirstPage from "./Components/Clientview/FirstPage";
import ViewListOfProducts from "./Components/Clientview/ViewListOfProducts";
import Header from "./Components/Clientview/Header";
import ProductView from "./Components/Clientview/ProductView";

function App(props) {
  return (
    <div>
      <Router>
        <Route
          exact
          strict
          component={Productdataslider}
          path="/Productdataslider"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Categorydataslider}
          path="/Categorydataslider"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Brandad}
          path="/Brandad"
          history={props.history}
        />
        <Route
          exact
          strict
          component={BrandTopSlider}
          path="/BrandTopSlider"
          history={props.history}
        />
        <Route
          exact
          strict
          component={BrandNewSlider}
          path="/BrandNewSlider"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Header}
          path="/Header"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Footer}
          path="/Footer"
          history={props.history}
        />
        <Route
          exact
          strict
          component={FirstPage}
          path="/FirstPage"
          history={props.history}
        />
        {/* <Route exact strict component={QtyCtrl} path="/QtyCtrl" history={props.history} /> */}

        <Route
          exact
          strict
          component={Mainpage}
          path="/Mainpage"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Signinoutlet}
          path="/Signinoutlet"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Dashboard_outlate}
          path="/Dashboard_outlate"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Index_Page}
          path="/Index_Page"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Productitem}
          path="/Productitem"
          history={props.history}
        />

        <Route
          exact
          strict
          component={CategoryInterface}
          path="/CategoryInterface"
          history={props.history}
        />
        <Route
          exact
          strict
          component={BrandInterface}
          path="/BrandInterface"
          history={props.history}
        />
        <Route
          exact
          strict
          component={OutletInterface}
          path="/OutletInterface"
          history={props.history}
        />
        <Route
          exact
          strict
          component={ModleInterface}
          path="/ModleInterface"
          history={props.history}
        />
        <Route
          exact
          strict
          component={DisplayAllCategories}
          path="/DisplayAllCategories"
          history={props.history}
        />
        <Route
          exact
          strict
          component={DisplayAllOutlets}
          path="/DisplayAllOutlets"
          history={props.history}
        />
        <Route
          exact
          strict
          component={DisplayAllBrand}
          path="/DisplayAllBrand"
          history={props.history}
        />
        <Route
          exact
          strict
          component={DisplayAllModle}
          path="/DisplayAllModle"
          history={props.history}
        />
        <Route
          exact
          strict
          component={SignIn}
          path="/SignIn"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Dashboard}
          path="/Dashboard"
          history={props.history}
        />
        <Route
          exact
          strict
          component={IndexPage}
          path="/IndexPage"
          history={props.history}
        />
        <Route
          exact
          strict
          component={ViewListOfProducts}
          path="/ViewListOfProducts/:cid"
          history={props.history}
        />
        <Route
          exact
          strict
          component={ProductView}
          path="/ProductView/:pid"
          history={props.history}
        />
      </Router>
    </div>
  );
}

export default App;
