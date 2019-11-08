import React, {
  Component
} from "react";
import gql from "graphql-tag";
import {
  Query
} from "react-apollo";
import { Route, Switch } from "react-router-dom"; 
import ProductIndex from "./products/ProductIndex";
import Login from "./Login";
import AuthRoute from "../util/route_util";
import Nav from './Nav';
import Register from "./Register";
import ProductDetail from "./products/ProductDetail";
import CreateProduct from "./products/CreateProduct";

const App = () => {
  return(
    <div>
      <Route path="/" component={Nav} />
      <h1>Online Store</h1>
       <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth"/>
        <AuthRoute exact path="/register" component={Register} routeType="auth"/>
        <AuthRoute exact path="/product/new" component={CreateProduct} routeType="protected"/>
        <Route path="/" component={ProductIndex} />
      </Switch>
      <Route path="/product/:productId" component={ProductDetail} />
    </div>
    )
};

export default App;

