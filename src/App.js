import React, { createContext, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Checkout from "./components/Checkout/Checkout";
import Admin from "./components/Admin/Admin";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import './App.css';
import EditProduct from "./components/EditProduct/EditProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Product />
            </Route>
            <Route path="/home">
              <Header />
              <Product />
            </Route>
            <PrivateRoute path="/product/:productId">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/manageProduct">
              <ManageProduct />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/editProduct/:editId">
              <EditProduct />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
