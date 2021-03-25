import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserActionsPage from "./pages/UserActionsPage";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/user-actions" render={props => <UserActionsPage {...props} user='Atracador' actionType='Solicitar Edição' />} />
      <Route path="/forgot-password" component={ForgotPassword}/>
    </BrowserRouter>
  );
};

export default Routes;
